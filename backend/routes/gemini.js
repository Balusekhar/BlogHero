require("dotenv").config();
const express = require("express");
const router = express.Router();

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

router.post("/", async (req, res) => {
  const { topic, numberOfWords } = req.body;
  console.log("Received topic:", topic, "and numberOfWords:", numberOfWords);

  const chatSession = model.startChat({
    generationConfig,
  });

  const prompt = `Generate a blog post for a topic: ${topic} with an engaging tone. The post should be around ${numberOfWords} words. Give the output in Rich Text format.`;

  try {
    const result = await chatSession.sendMessage(prompt);
    console.log(result);
    const blog = result.response.text();
    console.log(blog);
    res.status(200).json({ blog });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Error generating content" });
  }
});

module.exports = router;

import React, { useState } from "react";
import AiResponse from "./components/AiResponse";
import Header from "./components/Header";
import UserRequest from "./components/UserRequest";
import axios from "axios";

export default function App() {
  const [response, setResponse] = useState(null);

  const handleGenerate = async (topic, numberOfWords) => {
    try {
      console.log("Sending request to the server...");
      const { data } = await axios.post("http://localhost:3000/api/v1/blog", {
        topic,
        numberOfWords,
      });

      setResponse(JSON.parse(data.blog));
      console.log("res.data", data);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div className="min-h-screen overflow-scroll w-screen bg-black flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row p-4">
        <div className="w-full md:w-2/5 p-2 flex flex-col">
          <UserRequest handleGenerate={handleGenerate} />
        </div>
        <div className="w-full md:w-3/5 p-2 flex flex-col">
          <AiResponse response={response} />
        </div>
      </div>
    </div>
  );
}

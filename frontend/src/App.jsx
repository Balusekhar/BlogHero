import { useState } from "react";
import AiResponse from "./components/AiResponse";
import Header from "./components/Header";
import UserRequest from "./components/UserRequest";
import axios from "axios";

export default function App() {
  const [response, setResponse] = useState(null);

  const handleGenerate = async (topic, numberOfWords) => {
    try {
      console.log("Sending request to the server...");
      const res = await axios.post("http://localhost:3000/api/v1/blog", {
        topic,
        numberOfWords,
      });
      setResponse(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-black">
      <Header />
      <div className="flex flex-col md:flex-row p-4">
        <div className="w-full md:w-2/5 p-2">
          <UserRequest handleGenerate={handleGenerate} />
        </div>
        <div className="w-full md:w-3/5 p-2">
          <AiResponse response={response} />
        </div>
      </div>
    </div>
  );
}

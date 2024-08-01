import React, { useState } from "react";

function UserRequest({ handleGenerate }) {
  const [topic, setTopic] = useState("");
  const [numberOfWords, setNumberOfWords] = useState("");

  const handleSubmit = async () => {
    handleGenerate(topic, numberOfWords);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Generate Blog Post</h2>
      <div className="mb-4">
        <label
          htmlFor="topic"
          className="block text-sm font-medium text-gray-700"
        >
          Topic
        </label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter the topic"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="numberOfWords"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Words
        </label>
        <input
          type="number"
          id="numberOfWords"
          value={numberOfWords}
          onChange={(e) => setNumberOfWords(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter the number of words"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Generate
      </button>
    </div>
  );
}

export default UserRequest;

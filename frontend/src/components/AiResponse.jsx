import React from "react";
import parse from "html-react-parser";

function AiResponse({ response }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex-1 overflow-scroll">
      {response && response.title && (
        <h1 className="text-2xl font-bold mb-4">{response.title}</h1>
      )}
      {response && response.content && (
        <div>{parse(response.content)}</div>
      )}
    </div>
  );
}

export default AiResponse;

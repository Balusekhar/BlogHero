import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Import styles of the editor

function AiResponse({ response }) {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill && response) {
      quill.root.innerHTML = response; // Set the inner HTML of the editor to the response
    }
  }, [quill, response]); // Depend on quill instance and response to update content

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div ref={quillRef} /> {/* Quill editor attaches to this div */}
    </div>
  );
}

export default AiResponse;

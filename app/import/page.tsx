"use client";
import React, { useState } from "react";
import { handleData } from "../controllData/functionHandleReq";

const FileUploadForm = () => {
  const [selectedFiles, setSelectedFiles]: any = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    const allowedFormats = ["image/jpeg", "image/png"];
    let invalidFiles = [];

    for (let i = 0; i < files.length; i++) {
      if (allowedFormats.indexOf(files[i].type) === -1) {
        invalidFiles.push(files[i].name);
      }
    }

    if (invalidFiles.length > 0) {
      setError(
        `Chỉ chấp nhận định dạng JPEG và PNG cho các file: ${invalidFiles.join(
          ", "
        )}`
      );
    } else {
      setError("");
    }

    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    if (selectedFiles.length === 0) {
      setError("Vui lòng chọn ít nhất một file");
      return;
    }

    console.log("selectedFiles", selectedFiles);
    const formData = new FormData();
    formData.append("file", selectedFiles);
    await handleData(
      `http://localhost:3000/file/upload-images`,
      "POST",
      formData
    ).then((res: any) => {
      // setSelectedFiles([]);
      // setError("");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-8 rounded shadow-md"
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Chọn file:
          <input
            type="file"
            onChange={handleFileChange}
            className="border-2 border-gray-300 p-2 w-full mt-2"
            multiple
          />
        </label>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FileUploadForm;

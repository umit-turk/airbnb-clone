import { useState } from "react";
import { UploadIcon } from "../assets/svgs";
import axios from "axios";

export default function PhotosUploader({ addedPotos, onChange }) {
  const [photoLink, setPhotoLink] = useState("");

  const addPhotoByLink = async (ev) => {
    ev.preventDefault();
    if (!photoLink) return;
    const { data: fileName } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    onChange((prev) => {
      return [...prev, fileName];
    });
    setPhotoLink("");
  };

  const uploadPhoto = async (ev) => {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    const { data: fileNames } = await axios.post("/upload", data, {
      headers: { "Content-type": "multipart/form-data" },
    });
    onChange((prev) => {
      return [...prev, ...fileNames];
    });
  };
  return (
    <>
      <div className="flex gap-2">
        <input
          value={photoLink}
          onChange={(ev) => setPhotoLink(ev.target.value)}
          type="text"
          placeholder="Add using a link ...jpg"
        />
        <button
          onClick={addPhotoByLink}
          className="bg-gray-200 px-4 rounded-2xl"
        >
          Add&nbsp;photo
        </button>
      </div>
      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPotos.length > 0 &&
          addedPotos.map((link, index) => (
            <div className="h-32 flex" key={index}>
              <img
                className="rounded-2xl w-full object-cover"
                src={"http://localhost:4000/uploads/" + link}
              />
            </div>
          ))}
        <label className="h-32 border flex items-center justify-center cursor-pointer gap-1 bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
          <input
            multiple
            type="file"
            className="hidden"
            onChange={uploadPhoto}
          />
          <UploadIcon />
          Upload
        </label>
      </div>
    </>
  );
}

"use client"
import React, { useState } from "react"
import Image from "next/image"

export default function ImageUpload({ selectedImage = () => {} }) {
  const [file, setFile] = useState(null)

  const onFileSelected = (event) => {
    const picked = event.target.files?.[0]
    console.log("📁 ImageUpload: picked file →", picked)
    if (!picked) return
    setFile(picked)
    selectedImage(picked)
  }

  return (
    <div>
      <label className="text-blue-800">Select Image of Your Room</label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className={`border rounded-xl border-dotted flex justify-center
              border-purple-400 bg-white cursor-pointer hover:shadow-lg
              ${file ? "p-0" : "p-8"}`}
          >
            {!file ? (
              <Image
                src="/imageupload.jpeg"
                width={150}
                height={150}
                alt="Upload placeholder"
              />
            ) : (
              <Image
                src={URL.createObjectURL(file)}
                width={300}
                height={300}
                alt="Your selected room"
                className="w-[300px] h-[300px] object-cover"
              />
            )}
          </div>
        </label>
        <input
          id="upload-image"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  )
}

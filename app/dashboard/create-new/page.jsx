"use client";

import React, { useState } from "react";
import Layout from "../_components/layout";
import ImageUpload from "./_components/ImageUpload";
import RoomType from "./_components/RoomType";
import DesignType from "./_components/DesignType";
import AdditionalReq from "./_components/AdditionalReq";
import { Button } from "../../../components/ui/button";
import { supabase } from "../../../lib/supabaseClient";

export default function CreateNew() {
  // single object to hold all form values
  const [formData, setFormData] = useState({});

  // generic handler: fieldName is one of "image", "roomType", "designType", "additionalReq"
  const onHandleInputChange = (value, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  // Step 3: upload the image to Supabase Storage
  const onGenerateImage = async () => {
    if (!formData.image) {
      alert("Please upload an image first.");
      return;
    }

    try {
      const file = formData.image;
      const fileName = `${Date.now()}-${file.name}`;
      const bucket = "user-uploads"; // your actual bucket name

      // upload file
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(fileName, file);

      if (uploadError) {
        console.error("Upload error:", uploadError);
        alert("Failed to upload image.");
        return;
      }

      // get a public URL for the uploaded file
      const {
        data: { publicUrl },
      } = supabase.storage.from(bucket).getPublicUrl(fileName);

      console.log("Public URL:", publicUrl);

      // ▶︎ Next: send this URL to your AI API (Replicate)
      // ▶︎ Then convert the returned AI image URL to base64, store it, etc.

    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <Layout>
      <div className="px-6 pt-14 lg:px-8">
        <h2 className="text-center mt-2 text-2xl font-bold text-blue-700">
          Experience the Magic of AI Remodeling
        </h2>
        <p className="text-center mt-2 text-gray-600">
          Transform any room with a click. Save a space, choose a style, and
          watch as AI instantly reimagines your environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
          {/* 1. Image Upload */}
          <ImageUpload
            selectedImage={(value) => onHandleInputChange(value, "image")}
          />

          {/* 2. Form Inputs */}
          <div className="flex flex-col">
            <RoomType
              selectedRoomType={(value) =>
                onHandleInputChange(value, "roomType")
              }
            />

            <DesignType
              selectedDesignType={(value) =>
                onHandleInputChange(value, "designType")
              }
            />

            <AdditionalReq
              additionalRequirementInput={(value) =>
                onHandleInputChange(value, "additionalReq")
              }
            />

            {/* 3. Generate Button */}
            <Button
              className="w-full mt-5 bg-blue-700 hover:bg-blue-500 text-white"
              onClick={onGenerateImage}
            >
              Generate
            </Button>

            <p className="text-sm text-gray-700 mt-5">
              Note: 1 credit will be used to redesign your room.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

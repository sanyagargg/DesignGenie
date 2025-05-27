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
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (value, fieldName) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    console.log("📝 formData updated:", { ...formData, [fieldName]: value });
  };

  const onGenerateImage = async () => {
    console.log("🔥 onGenerateImage fired with:", formData);

    // 1) Require an image
    if (!formData.image) {
      alert("Please upload an image first.");
      return;
    }

    // 2) Slugify filename
    const rawName = formData.image.name.replace(/\s+/g, "_");
    const fileName = `${Date.now()}-${rawName}`;
    const bucketName = "user-uploads";

    // 3) Upload
    const { data: uploadData, error: uploadErr } =
      await supabase.storage
        .from(bucketName)
        .upload(fileName, formData.image);

    if (uploadErr) {
      console.error("❌ Storage upload error:", uploadErr);
      alert("Image upload failed.");
      return;
    }
    console.log("✅ Uploaded to Storage:", uploadData);

    // 4) Get public URL
    const { data: urlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);
    const publicUrl = urlData?.publicUrl;
    console.log("🌐 Public URL:", publicUrl);

    // 5) Insert into DB
    const payload = {
      image_url:          publicUrl,
      room_type:          formData.roomType,
      design_type:        formData.designType,
      additional_request: formData.additionalReq,
      created_at:         new Date(),
    };

    const { data: insertData, error: insertErr } =
      await supabase.from("redesign_requests").insert([payload]);

    if (insertErr) {
      console.error("❌ DB insert error:", insertErr);
      alert("Saving request to DB failed.");
    } else {
      console.log("✅ Saved to DB:", insertData);
      alert("Your redesign request has been submitted!");
    }
  };

  return (
    <Layout>
      {/* Centered Heading */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-blue-800">
          Experience the Magic of AI Remodeling
        </h2>
        <p className="mt-2 text-gray-600">
          Transform any room with a click. Save a space, choose a style, and watch
          as AI instantly reimagines your environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-8">
        {/* 1) Image Upload */}
        <ImageUpload
          selectedImage={(v) => onHandleInputChange(v, "image")}
        />

        {/* 2) Form Inputs */}
        <div className="space-y-6">
          <RoomType
            selectedRoomType={(v) => onHandleInputChange(v, "roomType")}
          />
          <DesignType
            selectedDesignType={(v) => onHandleInputChange(v, "designType")}
          />
          <AdditionalReq
            additionalRequirementInput={(v) =>
              onHandleInputChange(v, "additionalReq")
            }
          />

          {/* 3) Generate Button */}
          <Button
            className="w-full bg-blue-700 hover:bg-blue-500 text-white"
            onClick={onGenerateImage}
          >
            Generate
          </Button>
          <p className="text-sm text-gray-700">
            Note: 1 credit will be used to redesign your room
          </p>
        </div>
      </div>
    </Layout>
  );
}

"use client";
import React, { useState } from "react";
import "../styles/RFQ.css";
import { useRef } from "react";
const RFQForm = () => {
  const [sampleCount, setSampleCount] = useState(0);

  const increment = () => setSampleCount((prev) => prev + 1);
  const decrement = () => setSampleCount((prev) => (prev > 0 ? prev - 1 : 0));

  const swatchRef = useRef();
  const fabricRef = useRef();
  const miscRef = useRef();

  const handleFileDrop = (e, refName) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      console.log(`${refName} dropped:`, file.name);
    }
  };

  const handleFileChange = (e, refName) => {
    const file = e.target.files[0];
    if (file) {
      console.log(`${refName} selected:`, file.name);
    }
  };

  return (
    <div className="ml-[330px] mt-[30px] mb-30px w-[calc(100%-360px)] px-16 py-8 bg-white min-h-screen  rounded-[20px]">
      {/* Top Button Group */}
      <p className="pb-5 text-[#ACACAC] font-[NSregular]">
        Request for a quote or a sample here
      </p>

      <div className="flex mb-6">
        {/* NEW RFQ Button */}
        <button className="text-sm cursor-pointer font-[500] font-[NSmedium] px-4  py-2 rounded-tl-[20px] rounded-bl-[20px] border border-[#79747E] bg-[#233B6E] text-white">
          NEW RFQ
        </button>

        {/* RFQ HISTORY Button */}
        <button className="text-sm cursor-pointer font-[500] font-[NSmedium]  px-4 py-2 rounded-tr-[20px] rounded-br-[20px] border border-[#79747E] bg-white text-[#1D1B20]">
          RFQ HISTORY
        </button>
      </div>

      {/* Row 1 Inputs */}
      <div className="grid grid-cols-5 gap-4 mb-4">
        <div className="col-span-4">
          <label className="block text-sm font-medium mb-1  font-[NSmedium] text-[#000] opacity-[0.67]">
            Shipping Address*
          </label>
          <input
            type="text"
            placeholder="Shipping Address"
            className="w-full border border-gray-300 font-[NSregular] rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-[NSmedium] mb-1 text-[#000] opacity-[0.67]">
            Quantity*
          </label>
          <input
            type="text"
            placeholder="Quantity"
            className="w-full border border-gray-300 font-[NSregular] rounded-md px-3 py-2"
          />
        </div>
      </div>

      {/* Row 2 Inputs */}
      <div className="grid grid-cols-4 gap-4 mb-6 font-[NSregular] text-[#000] opacity-[0.67]">
        {[
          "Lead Time*",
          "Target Price (in $)*",
          "Fabric Composition*",
          "GSM*",
        ].map((label, i) => (
          <div key={i}>
            <label className="block text-sm font-[NSmedium] mb-1">{label}</label>
            <input
              type="text"
              placeholder={label.replace("*", "")}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        ))}
      </div>

      {/* Upload Sections */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Left Section: Techpack & Product Images (side by side on large screens) */}
        <div className="flex flex-col lg:flex-row gap-10 w-full lg:w-3/4">
          {/* Techpack */}
          <div className="flex flex-col items-center justify-center border border-dashed border-gray-400 rounded-md p-6 text-center w-full h-85 bg-white border-[rgba(151,151,151,0.5)]">
            <img src="/uploadLogo.svg" alt="Upload" className="mb-2 w-8 h-8" />
            <p className="font-semibold text-gray-800 mb-1 font-[NSmedium]">UPLOAD TECHPACK*</p>
            <p className="text-[14px] text-[#000] opacity-[0.67] font-[NSregular]">
              Upload png, jpeg, svg, pdf and docs <br />
              Files must be less than 10 MB
            </p>
            <label className="cursor-pointer mt-5 px-8 py-2 py-1 text-sm text-white font-NSregular rounded-[20px] bg-[#3F72AF]">
              UPLOAD
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    console.log("Selected file:", file.name);
                    // You can add file upload logic here
                  }
                }}
              />
            </label>
          </div>

          {/* Product Images */}
          <div className="flex flex-col items-center justify-center border border-dashed border-gray-400 rounded-md p-6 text-center w-full h-85 bg-white border-[rgba(151,151,151,0.5)]  ">
            <img src="/uploadLogo.svg" alt="Upload" className="mb-2 w-8 h-8" />
            <p className="font-semibold text-gray-800  mb-1 font-[NSmedium]">
              UPLOAD PRODUCT IMAGES*
            </p>
            <p className="text-[14px] text-[#000] opacity-[0.67] font-[NSregular]">
              Upload png, jpeg, svg, pdf and docs <br />
              Files must be less than 10 MB
            </p>
            <label className="cursor-pointer mt-5 px-8 py-2 py-1 text-sm text-white font-NSregular rounded-[20px] bg-[#3F72AF]">
              UPLOAD
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    console.log("Selected file:", file.name);
                    // You can add file upload logic here
                  }
                }}
              />
            </label>
          </div>
        </div>

        {/* Right Section: Swatch, Fabric, Miscellaneous */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
      {/* Colour Swatch */}
      <div
        className="flex flex-col items-center justify-center border  border-gray-400 rounded-[10px] p-6 text-center h-28 bg-white cursor-pointer"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleFileDrop(e, "Colour Swatch")}
        onClick={() => swatchRef.current.click()}
      >
        <img src="/SwatchLogo.svg" alt="Swatch" className="mb-2 w-8 h-8" />
        <p className="font-semibold text-[#000] opacity-[0.67] text-sm mb-1 font-[NSmedium]">COLOUR SWATCH*</p>
        <p className="text-xs text-[#000] opacity-[0.67] font-[NSregular]">Drop files here or Browse</p>
        <input
          type="file"
          ref={swatchRef}
          className="hidden"
          onChange={(e) => handleFileChange(e, "Colour Swatch")}
        />
      </div>

      {/* Fabric */}
      <div
        className="flex flex-col items-center justify-center border border-gray-400 rounded-[10px] p-6 text-center h-28 bg-white cursor-pointer"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleFileDrop(e, "Fabric")}
        onClick={() => fabricRef.current.click()}
      >
        <img src="/PDFLogo.svg" alt="PDF" className="mb-2 w-8 h-8" />
        <p className="font-semibold text-[#000] opacity-[0.67] text-sm mb-1 font-[NSmedium]">FABRIC*</p>
        <p className="text-xs text-[#000] opacity-[0.67] font-[NSregular]">Drop files here or Browse</p>
        <input
          type="file"
          ref={fabricRef}
          className="hidden"
          onChange={(e) => handleFileChange(e, "Fabric")}
        />
      </div>

      {/* Miscellaneous */}
      <div
        className="flex flex-col items-center justify-center border  border-gray-400 rounded-[10px] p-6 text-center h-22 bg-white cursor-pointer"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleFileDrop(e, "Miscellaneous")}
        onClick={() => miscRef.current.click()}
      >
        <p className="font-semibold text-[#000] opacity-[0.67] text-sm mb-1 font-[NSmedium]">MISCELLANEOUS</p>
        <p className="text-xs text-[#000] opacity-[0.67] font-[NSregular]">Drop files here or Browse</p>
        <input
          type="file"
          ref={miscRef}
          className="hidden"
          onChange={(e) => handleFileChange(e, "Miscellaneous")}
        />
      </div>
    </div>
      </div>

      {/* Order Notes */}
      <div className="mb-6">
        <label className="block text-sm font-[NSmedium] mb-1">Order Notes</label>
        <textarea
          placeholder="Order Notes"
          className="w-full border border-gray-300 rounded-md font-[NSregular] px-3 py-2"
          rows={3}
        ></textarea>
      </div>

      {/* Sample Request + Submit */}
      <div className="flex flex-col lg:flex-row justify-between items-center   ">
        {/* Left Side: Sample Option + Selector */}
        <div className="flex flex-col gap-3  p-4 rounded-md  border border-gray-200 pl-10 ">
          <div className="flex flex-wrap items-center gap-4 text-[#000] opacity-[0.67]">
            <span className=" font-medium font-[NSregular] mr-50 ">
              Would you like to order a sample?
            </span>
            <label className="flex items-center gap-4 font-[NSregular]">
              <input type="radio" name="sample" className="w-4 h-4" /> Yes
            </label>
            <label className="flex items-center gap-4 font-[NSregular] ">
              <input type="radio" name="sample" className="w-4 h-4" /> No
            </label>
          </div>

          {/* Sample count selector (moved below) */}
          <div className="flex items-center gap-2 text-[#000] opacity-[0.67]">
            <span className=" font-medium font-[NSregular] mr-5 ">
              Select number of samples
            </span>
            <button onClick={decrement} className=" cursor-pointer ">
              <img src="/MinusIcon.svg" alt="Minus" className="w-5 h-5" />
            </button>
            <span className="w-6 text-center font-[NSregular]">
              {sampleCount}
            </span>
            <button onClick={increment} className=" cursor-pointer ">
              <img src="/PlusIcon.svg" alt="Plus" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Side: Submit Button */}
        <button className="bg-[#194185] text-white px-6 py-2 mt-4 lg:mt-0 rounded-[20px] font-[NSregular]">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default RFQForm;

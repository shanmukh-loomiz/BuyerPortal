"use client";
import React, { useState } from "react";

function InputDesign() {
  // Main form state
  const [formData, setFormData] = useState({
    // Contact Person
    contactName: "",
    phone: "",
    email: "",
    
    // Company Profile
    companyName: "",
    taxId: "",
    taxCertificate: null,
    businessNo: "",
    countryOfIncorporation: "",
    
    // Address Details
    streetAddress: "",
    addressState: "",
    addressCountry: "",
    addressPostcode: "",
    
    // Financial Details
    branchName: "",
    bankState: "",
    bankCountry: "",
    bankPostcode: "",
    bankCertificate: null,
    importExportLicense: null
  });
  
  // Track file names for display purposes
  const [fileNames, setFileNames] = useState({
    taxCertificate: "",
    bankCertificate: "",
    importExportLicense: ""
  });
  
  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      // Update the file in the form data
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
      
      // Update the file name for display
      setFileNames(prev => ({
        ...prev,
        [name]: files[0].name
      }));
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  // Style classes based on Figma specs
  const headingStyle = "font-['Noto_Sans',sans-serif] font-medium text-[28px] leading-[64px] tracking-normal align-middle font-variant-small-caps text-gray-800";
  const subheadingStyle = "font-['Noto_Sans',sans-serif] font-medium text-[20px] leading-[64px] tracking-normal align-middle text-gray-700";
  const labelStyle = "block font-['Noto_Sans',sans-serif] font-medium text-[14px] leading-[100%] tracking-normal align-middle text-gray-700 mb-1";
  const inputStyle = "border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300";

  return (
    <div className="min-h-screen w-full bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 before:content-[''] before:absolute before:inset-0 before:backdrop-blur-sm before:bg-white/20 before:z-0 relative overflow-hidden">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl z-10 overflow-hidden">
        <div className="p-8">
          {/* Info Banner */}
          <div className="bg-blue-50 rounded-xl p-4 mb-8 flex items-start border border-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-700 mt-0.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="text-sm">Kindly ensure the following details are completed, as the RFQ will not be processed without them.</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Person of Contact Section */}
            <div className="mb-8">
              <h2 className={headingStyle}>PERSON OF CONTACT</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className={labelStyle}>
                    Contact Person Name*
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Name of Contact Person"
                    className={inputStyle}
                    required
                  />
                </div>
                
                <div>
                  <label className={labelStyle}>
                    Phone No. *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No."
                    className={inputStyle}
                    required
                  />
                </div>
                
                <div>
                  <label className={labelStyle}>
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={inputStyle}
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Company Profile Section */}
            <div className="mb-8">
              <h2 className={headingStyle}>COMPANY PROFILE</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="md:col-span-2">
                  <label className={labelStyle}>
                    Registered company name*
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className={inputStyle}
                    required
                  />
                </div>
                
                <div>
                  <label className={labelStyle}>
                    GST/Tax Id
                  </label>
                  <input
                    type="text"
                    name="taxId"
                    value={formData.taxId}
                    onChange={handleChange}
                    placeholder="GST/Tax Id"
                    className={inputStyle}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className={labelStyle}>
                    Tax registration certificate *
                  </label>
                  <div>
                    <input
                      type="file"
                      name="taxCertificate"
                      id="taxCertificate"
                      onChange={handleFileChange}
                      accept=".pdf"
                      className="hidden"
                      required
                    />
                    <label 
                      htmlFor="taxCertificate"
                      className="block text-center py-3 px-4 bg-gray-300 hover:bg-gray-400 rounded-lg text-sm uppercase font-medium cursor-pointer transition-all duration-300"
                    >
                      UPLOAD
                    </label>
                    {fileNames.taxCertificate && (
                      <p className="text-xs text-green-600 mt-1 truncate">
                        Selected: {fileNames.taxCertificate}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className={labelStyle}>
                    Business No.*
                  </label>
                  <input
                    type="text"
                    name="businessNo"
                    value={formData.businessNo}
                    onChange={handleChange}
                    placeholder="Business No."
                    className={inputStyle}
                    required
                  />
                </div>
                
                <div>
                  <label className={labelStyle}>
                    Country of Incorporation *
                  </label>
                  <input
                    type="text"
                    name="countryOfIncorporation"
                    value={formData.countryOfIncorporation}
                    onChange={handleChange}
                    placeholder="Enter your COI"
                    className={inputStyle}
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Address Detail Section */}
            <div className="mb-8">
              <h2 className={headingStyle}>ADDRESS DETAIL</h2>
              <div className="mb-4">
                <div className={subheadingStyle}>Registered Company Address</div>
              </div>
              
              <div className="mb-4">
                <label className={labelStyle}>
                  Apartment No/Street Address *
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder="Apartment No/Street Address"
                  className={inputStyle}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={labelStyle}>
                    State *
                  </label>
                  <input
                    type="text"
                    name="addressState"
                    value={formData.addressState}
                    onChange={handleChange}
                    placeholder="State"
                    className={inputStyle}
                    required
                  />
                </div>
                
                <div>
                  <label className={labelStyle}>
                    Country *
                  </label>
                  <input
                    type="text"
                    name="addressCountry"
                    value={formData.addressCountry}
                    onChange={handleChange}
                    placeholder="Country"
                    className={inputStyle}
                    required
                  />
                </div>
                
                <div>
                  <label className={labelStyle}>
                    Postcode/Zip *
                  </label>
                  <input
                    type="text"
                    name="addressPostcode"
                    value={formData.addressPostcode}
                    onChange={handleChange}
                    placeholder="Postcode/Zip"
                    className={inputStyle}
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Financial Detail Section */}
            <div className="mb-8">
              <h2 className={headingStyle}>FINANCIAL DETAIL</h2>
              <div className="mb-4">
                <div className={subheadingStyle}>Bank Details</div>
              </div>
              
              <div className="mb-4">
                <label className={labelStyle}>
                  Branch Name*
                </label>
                <input
                  type="text"
                  name="branchName"
                  value={formData.branchName}
                  onChange={handleChange}
                  placeholder="Branch Name"
                  className={inputStyle}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className={labelStyle}>
                    State *
                  </label>
                  <input
                    type="text"
                    name="bankState"
                    value={formData.bankState}
                    onChange={handleChange}
                    placeholder="State"
                    className={inputStyle}
                    required
                  />
                </div>
                
                <div>
                  <label className={labelStyle}>
                    Country *
                  </label>
                  <input
                    type="text"
                    name="bankCountry"
                    value={formData.bankCountry}
                    onChange={handleChange}
                    placeholder="Country"
                    className={inputStyle}
                    required
                  />
                </div>
                
                <div>
                  <label className={labelStyle}>
                    Postcode/Zip *
                  </label>
                  <input
                    type="text"
                    name="bankPostcode"
                    value={formData.bankPostcode}
                    onChange={handleChange}
                    placeholder="Postcode/Zip"
                    className={inputStyle}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelStyle}>
                    Bank Certificate
                  </label>
                  <div className="border border-gray-300 rounded-lg p-4 text-center bg-gray-50">
                    <input
                      type="file"
                      name="bankCertificate"
                      id="bankCertificate"
                      onChange={handleFileChange}
                      accept=".pdf"
                      className="hidden"
                    />
                    <label 
                      htmlFor="bankCertificate"
                      className="inline-flex items-center gap-2 cursor-pointer text-blue-600 hover:text-blue-800 transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      upload from browser/drive
                    </label>
                    {fileNames.bankCertificate && (
                      <p className="text-xs text-green-600 mt-2 truncate">
                        Selected: {fileNames.bankCertificate}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-4">
                      You can upload files in pdf format only upto 100 kb
                    </p>
                  </div>
                </div>
                
                <div>
                  <label className={labelStyle}>
                    Import/Export License
                  </label>
                  <div className="border border-gray-300 rounded-lg p-4 text-center bg-gray-50">
                    <input
                      type="file"
                      name="importExportLicense"
                      id="importExportLicense"
                      onChange={handleFileChange}
                      accept=".pdf"
                      className="hidden"
                    />
                    <label 
                      htmlFor="importExportLicense"
                      className="inline-flex items-center gap-2 cursor-pointer text-blue-600 hover:text-blue-800 transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      upload from browser/drive
                    </label>
                    {fileNames.importExportLicense && (
                      <p className="text-xs text-green-600 mt-2 truncate">
                        Selected: {fileNames.importExportLicense}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-4">
                      You can upload files in pdf format only upto 100 kb
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-center">
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-3 rounded-full uppercase shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputDesign;
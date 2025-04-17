import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full">
      <section className="w-screen h-125 flex flex-col items-center justify-start pt-45 bg-gray-100 text-center p-4">
        <h1 className="text-8xl font-bold text-gray-800">CAREHIVE </h1>
        <p className="text-sm text-gray-600 mt-4 max-w-md ">
        MediVault brings together your family's healthcare records, prescriptions, and medical documents in one organized platform. Access critical information instantly with emergency QR codes.
        </p>
        
        
      </section>

      
      <section className="w-screen h-screen flex flex-col items-center justify-start pt-30 bg-white text-center px-4">
        <h2 className="text-5xl font-semibold text-gray-800 mb-8">
        Everything Your Family Needs
          </h2>
          <h4 className="text-1xl font-light text-gray-600 mb-30 ">CareHive provides a comprehensive solution for managing your family's health information.</h4>
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl">

            <div className="flex-1 bg-gray-100 p-6 rounded-xl shadow-lg ">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Family Profiles   
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                    Create individual profiles for each family member with their medical history, allergies, and conditions.
                </p>
            </div>

            <div className="flex-1 bg-gray-100 p-6 rounded-2xl shadow-lg mr-10 ml-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Document Storage
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Upload and organize prescriptions, lab reports, X-rays, and other medical documents.
              </p>
            </div>

            <div className="flex-1 bg-gray-100 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Emergency QR Codes
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Generate QR codes with critical medical information for emergency situations.
              </p>

            </div>
          </div>
      </section>

      <section id="how-it-works" className="w-screen h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          How it works ?
        </h2>
        <p className="text-1x1 text-black mb-12">CareHive makes it easy to manage your family's health information in three simple steps.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <img
              src="/number-1.png"
              alt="Create an account"
              className="mb-4 w-20 h-20 object-contain"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Create an Account</h3>
            <p className="text-sm text-gray-600">
            Sign up for a family account and add members to your healthcare circle
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <img
              src="/number-2.png"
              alt="add medical info"
              className="mb-4 w-20 h-20 object-contain"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Add Medical Information</h3>
            <p className="text-sm text-gray-600">
            Enter health details and upload important medical documents for each family member.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            <img
              src="/number-3.png"
              alt="access anywhere"
              className="mb-4 w-20 h-20 object-contain"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Access Anywhere</h3>
            <p className="text-sm text-gray-600">
            Access your family's health information anytime, anywhere, and share emergency QR codes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
import React from 'react'
import { Twitter,Facebook,Instagram } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
       <footer className=" text-black py-9 mt-20 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold">CareHive</h2>
            <p className="mt-2 text-gray-400">
              "One Hive. One Family. One Health."
             </p>
             <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} className="text-gray-400 hover:text-blue-400 " />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} className="text-gray-400 hover:text-blue-400 " />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="text-gray-400 hover:text-blue-400 " />
              </a>
            </div>
            
            
          </div>
          

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 flex justify-between">
              <li>
                <a href="/" className="text-gray-400 hover:text-gray-950">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-gray-950">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-gray-950">
                  Contact
                </a>
              </li>
            </ul>
          </div>
         
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            © 2025 CAREHIVE. All Rights Reserved.
          </p>
        </div>
      </div>

  </footer>
  )
}

export default Footer
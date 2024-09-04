"use client";
import Head from 'next/head';
import Script from 'next/script';
import Header from '@/components/Header';
import { useState, ChangeEvent, FormEvent } from 'react';
import Swal from 'sweetalert2';

const Email = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        ...formData,
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setErrorMessage('Something went wrong. Please try again.');
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <>
      <Header/>
      <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 text-gray-900 w-full dark:bg-black bg-black dark:bg-grid-white/[0.1]" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
        <div className="bg-white shadow-lg rounded-lg p-8 w-[90%] h-[80vh] max-w-3xl mx-auto overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900 text-3xl font-bold">Send me an email</h2>
            <div 
              className="text-gray-600 cursor-pointer" 
              aria-label="Close" 
              onClick={() => window.history.back()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
                ></path>
              </svg>
            </div>
          </div>
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <p className="text-gray-700 text-base font-medium mb-2">Name</p>
              <input
                name="name"
                placeholder="Your name"
                className="form-input w-full rounded-lg border-gray-300 bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-4"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="flex flex-col">
              <p className="text-gray-700 text-base font-medium mb-2">Email</p>
              <input
                name="email"
                placeholder="Your email"
                className="form-input w-full rounded-lg border-gray-300 bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-4"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            {/* <label className="flex flex-col">
              <p className="text-gray-700 text-base font-medium mb-2">Subject</p>
              <input
                name="subject"
                placeholder="Your subject"
                className="form-input w-full rounded-lg border-gray-300 bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-4"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label> */}
            <label className="flex flex-col">
              <p className="text-gray-700 text-base font-medium mb-2">Message</p>
              <textarea
                name="message"
                placeholder="Your message"
                className="form-input w-full rounded-lg border-gray-300 bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-4 min-h-[320px]"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg py-3 px-6 font-bold transition-all duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Email;

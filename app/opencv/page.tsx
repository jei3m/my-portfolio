"use client";
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Link from 'next/link';

const CVPage = () => {
  return (
    <div className="p-6 flex flex-col overflow-x-hidden overflow-hidden w-full h-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
      <Header />
      <br /><br /><br />
      <Head>
        <title>My CV</title>
        <meta name="description" content="View my professional CV" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
        <h2
          id="experience"
          style={{ fontFamily: "DM Serif Display, serif", color: "white" }}
          className="scroll-m-20 font-extrabold tracking-tight text-4xl lg:text-4xl lg:text-5xl text-center w-full z-20"
        >
          My Curriculum Vitae
        </h2>
        <br />
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
          <div className="relative w-full" style={{ paddingBottom: "141.4%" }}>
            <iframe
              src="https://drive.google.com/file/d/1KvU2TYSmUt4sANqhH9ulIhc4UPZpw0R4/preview" 
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
        <br />
        <p className="mt-4 text-center text-white">
          If the CV doesn&apos;t load, please{' '}
          <a
            href="https://drive.google.com/file/d/1K21R-0lZe7SaPeHydEcm6cOqEYg195Iu/view"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>{' '}
          to view it directly.
        </p>
        <br />
        <Link href="/home">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Back to Home
          </button>
        </Link>
      </main>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default CVPage;

"use client";
import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { DM_Serif_Text } from "next/font/google";
import EmailModal from './custom-ui/email-modal';
import { useState } from 'react';
import { Reveal } from './custom-ui/reveal';

const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const Footer = () => {
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  return (
    <footer className="relative bg-neutral-900 text-white py-4 overflow-hidden">
      
      
      <div className="container mx-auto px-4 z-50 relative">
        <div className="flex flex-col items-center justify-center animate-fadeIn">
        <Reveal
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
              >
          <h3 className={`${dmSerifText.className} text-2xl mb-4 text-center`}>
            Connect With Me
          </h3>
          
          <div className="flex space-x-4 justify-center align-center"> 
            <div className="transform transition-transform hover:scale-125 hover:rotate-12">
                <a onClick={(e) => {e.preventDefault(); setIsEmailModalOpen(true)}} className="text-orange-300 hover:text-white transition-colors cursor-pointer hover:rotate-5">
                <Mail className="h-8 w-8 mt-[-2px]" />
                </a>
            </div>

            <div className="transform transition-transform hover:scale-125 hover:rotate-12">
              <a
                href="https://www.facebook.com/justinmiguel.reyes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-7 w-7" />
              </a>
            </div>

            <div className="transform transition-transform hover:scale-125 hover:rotate-12">
              <a
                href="https://github.com/jei3m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
              </a>
            </div>

            <div className="transform transition-transform hover:scale-125 hover:rotate-12">
              <a
                href="https://www.linkedin.com/in/justin-miguel-reyes-175323327/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 mt-[-2px]" />
              </a>
            </div>

            <div className="transform transition-transform hover:scale-125 hover:rotate-12">
              <a
                href="/opencv"
                className="text-red-300 hover:text-white transition-colors"
              >
                <FileText className="h-7 w-7" />
              </a>
            </div>
          </div>
          

          <div className=" text-center mt-4 text-sm text-gray-400">
            <p>© 2024 Justin Miguel Reyes. All rights reserved.</p>
          </div>

          </Reveal>
        </div>
        <EmailModal 
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
      </div>

    </footer>
  );
};

export default Footer;
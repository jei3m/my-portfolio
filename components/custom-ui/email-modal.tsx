import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState<string>('');

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
      onClose();
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

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  // Close modal when clicking escape key
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  // Add event listener for escape key
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center px-2 bg-black bg-opacity-50 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          onClick={onClose}
        >
          <motion.div 
            className="w-full max-w-3xl bg-neutral-900 p-5 rounded-xl shadow-2xl"
            variants={modalVariants}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <motion.h2
                className={`${dmSerifText.className} text-left text-4xl text-white`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }}
              >
                Email Me
              </motion.h2>

              <motion.div
                className="text-gray-600 cursor-pointer text-xl"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 256 256">
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </motion.div>
            </div>

            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
              <motion.div 
                className="w-full transform-gpu"
                variants={itemVariants}
              >
                <input
                  name="name"
                  placeholder="Name"
                  className="form-input w-full rounded-lg bg-neutral-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-4 transform-gpu transition-transform duration-200 ease-in-out hover:scale-[1.01] focus:scale-[1.01]"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              
              <motion.div 
                className="w-full transform-gpu"
                variants={itemVariants}
              >
                <input
                  name="email"
                  placeholder="Email"
                  className="form-input w-full rounded-lg bg-neutral-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-4 transform-gpu transition-transform duration-200 ease-in-out hover:scale-[1.01] focus:scale-[1.01]"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              
              <motion.div 
                className="w-full transform-gpu"
                variants={itemVariants}
              >
                <textarea
                  name="message"
                  placeholder="Message"
                  className="form-input w-full rounded-lg bg-neutral-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 p-4 min-h-[30vh] transform-gpu transition-transform duration-200 ease-in-out hover:scale-[1.01] focus:scale-[1.01]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>
              
              <AnimatePresence>
                {errorMessage && (
                  <motion.p
                    className="text-red-500"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
              
              <motion.button
                type="submit"
                className="bg-white text-black border border-gray-700 rounded-lg py-3 px-6 font-bold transition-all duration-300 ease-in-out hover:bg-neutral-800 hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-blue-500 transform-gpu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailModal;

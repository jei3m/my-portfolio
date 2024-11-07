"use client";
import { Calendar, FileText, Github, Linkedin, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./custom-ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope} from "react-icons/fa6"
import { Instrument_Sans } from "next/font/google";

export default function Profile() {
  const socialLinks = [
    { 
        icon: Mail, 
        href: "/email",
        label: "Email", 
        title: "Contact" 
      },
    { 
      icon: Github, 
      href: "https://github.com/jei3m",
      label: "GitHub",
      title: "View Projects" 
    },
    { 
        icon: Facebook, 
        href: "https://www.facebook.com/justinmiguel.reyes/",
        label: "Calendar", 
        title: "Schedule" 
      },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/justin-miguel-reyes-175323327/",
      label: "LinkedIn", 
      title: "Connect" 
    },

    { 
      icon: Instagram, 
      href: "https://www.instagram.com/_justinmiguel/",
      label: "Resume", 
      title: "Download CV" 
    }
  ];

  return (
    <div className="min-h-screen text-white relative py-20 md:py-40">
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <div className="grid md:grid-cols-[300px,1fr] lg:grid-cols-[400px,1fr] gap-8 lg:gap-12 items-start md:items-center">
            {/* Profile Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden max-w-[300px] md:max-w-full mx-auto">
              <img
                src="/JustinMiguel.png"
                alt="Justin Miguel"
                className="object-cover w-full h-full"
                loading="eager"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-2xl font-bold sm:text-2xl text-gray-200 mb-[-10px]">
                  Hello, I&apos;m Justin Miguel<span className="text-3xl">👋</span>
                </h3>
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    A Computer Engineering Student &{' '}
                    <span className="text-[#8B5CF6]">Tech Enthusiast</span>
                  </h1>
                  <p className="text-gray-300 text-md  mt-4 max-w-2xl">
                    With a foundation in Web Development, IoT Solutions, and IT.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center md:justify-start">
                {socialLinks.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-xl bg-white text-black hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      <item.icon className="h-6 w-6" />
                      <span className="sr-only">{item.label}</span>
                    </Button>
                  </Link>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Link href="/opencv">
                  <button className="group relative overflow-hidden rounded-full px-4 py-2 bg-white/20 hover:bg-white/10 border border-white transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    
                    <div className="relative flex items-center gap-2 text-zinc-100">
                      <span className="text-sm font-medium">Open CV</span>
                      <FileText className="w-4 h-4 text-white group-hover:text-purple-300 transition-colors duration-300" />
                    </div>
                    
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useTheme } from "@/context/ThemeContext";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBtn() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const backgroundColor = isDark ? '#C6A87C' : '#25D366';

  return (
    <a
      href="https://wa.me/201000025670"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse"
      style={{ backgroundColor }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </a>
  );
}

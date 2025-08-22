"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-12">
      <div className="container w-11/12 mx-auto py-12 grid grid-cols-12 gap-8">
        {/* Logo & About */}
        <div className="col-span-12 md:col-span-4">
          <h2 className="text-2xl font-bold">🌿 PlantStore</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Bringing nature closer to you with fresh, healthy, and vibrant plants.
            Our mission is to create greener spaces and happier lives.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Facebook">
              <FaFacebookF className="hover:text-green-400 transition" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="hover:text-green-400 transition" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter className="hover:text-green-400 transition" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-6 md:col-span-2">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-green-400">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-green-400">Products</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="col-span-6 md:col-span-3">
          <h3 className="font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/faq" className="hover:text-green-400">FAQs</Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-green-400">Shipping Info</Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-green-400">Returns & Refunds</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-green-400">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-12 md:col-span-3">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm">
            📍 Dhaka, Bangladesh <br />
            📞 +880 1234-567890 <br />
            ✉️ support@plantstore.com
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-green-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} PlantStore — All rights reserved.
      </div>
    </footer>
  );
}

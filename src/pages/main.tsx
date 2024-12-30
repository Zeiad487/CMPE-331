import logo from "@/public/offside 1 (1).png";
import logo1 from "@/public/logo.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div style={{ backgroundColor: "rgba(32, 32, 32, 1)", color: "white" }}>
      {/* Navbar */}
      <header
        style={{ backgroundColor: "rgba(32, 32, 32, 1)" }}
        className="p-4 flex justify-between items-center"
      >
        <Image src={logo} alt="Logo" width={171} height={62} />
        <nav className="flex space-x-20">
          <Link href="/" className="text-white hover:bg-[#9ace20e0] px-4 py-2 rounded">Home</Link>
          <Link href="/tournaments" className="text-white hover:bg-[#9ace20e0] px-4 py-2 rounded ">Tournaments</Link>
          <Link href="/booking" className="text-white  hover:bg-[#9ace20e0] px-4 py-2 rounded">Booking</Link>
        </nav>
         {/* Profile Navbar */}
      <div className="relative">
        {/* Icon for Profile with Dropdown */}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <span className="text-white">P</span> {/* Profile Icon */}
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[rgba(32,32,32,1)] text-white rounded-lg shadow-lg border-2 border-[#9ace20]">
            <a href="#" className="block px-4 py-2 hover:bg-[#9ace20e0]">Profile</a>
            <a href="#" className="block px-4 py-2 hover:bg-[#9ace20e0]">Activities</a>
            <a href="#" className="block px-4 py-2 hover:bg-[#9ace20e0]">Settings</a>
          </div>
        )}
      </div>
    </header>

      {/* Hero Section */}
      <div className="flex flex-col items-center py-12">
  <h1 className=" text-white text-5xl font-bold mb-4 flex items-center" style={{ color: "hover:bg-[rgba(255, 255, 255, 1)]" }}>
    Stay onside with 
    <Image src={logo} alt="OFFSIDE Logo" width={196} height={96} className="ml-2" />
  </h1>
  <img src="/player.png" alt="Player" className="w-25 h-86" />
</div>


      {/* Booking and Tournaments Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-8 py-16">
        {/* Booking Section */}
        <div
          style={{ backgroundColor: "rgba(32, 32, 32, 1)" }}
          className="p-6 rounded-lg max-w-md"
        >
          <img
            src="/booking.png"
            alt="Booking"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Booking</h2>
          <p className="text-[rgba(155,206,32,1)]">
            Book your favorite sports fields in seconds! Browse available slots, choose the perfect
            time, and secure your game effortlessly—no calls needed!
          </p>
        </div>

        {/* Tournaments Section */}
        <div
          style={{ backgroundColor: "rgba(32, 32, 32, 1)" }}
          className="p-6 rounded-lg max-w-md"
        >
          <img
            src="/tournaments.png"
            alt="Tournaments"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-white text-xl font-bold mb-2">Tournaments</h2>
          <p className="text-[rgba(155,206,32,1)]">
            Join thrilling tournaments and compete for exciting prizes! Build your dream team,
            showcase your skills, and win big while making unforgettable memories.
          </p>
        </div>
      </div>

      <footer
  style={{ backgroundColor: "rgba(155, 206, 32, 1)" }}
  className="flex flex-col md:flex-row justify-between items-center py-6 px-12 space-y-6 md:space-y-0"
>
  {/* Left Side - Logo and Description */}
  <div className="flex flex-col items-center md:items-start space-y-4">
    <Image src={logo1} alt="OFFSIDE Logo" width={250} height={270} />
    <p className="text-black font-bold text-lg text-center md:text-left">
      OFFSIDE - The easiest way to book football fields near you. Plan your game, reserve your
      pitch, and get ready to play!
    </p>
  </div>

  {/* Middle - Links */}
  <div className="flex flex-col items-center space-y-2">
    <a href="#" className="text-black hover:text-gray-300">
      Privacy Policy
    </a>
    <a href="#" className="text-black hover:text-gray-300">
      Terms and Conditions
    </a>
    <a href="#" className="text-black hover:text-gray-300">
      Contact Us
    </a>
  </div>

  {/* Right Side - Social Media Links */}
   {/* Right Side - Social Media Links */}
   <div className="flex space-x-4 mt-4">
          <a href="#" className="text-black hover:text-gray-300 text-x">
            <i className="fab fa-facebook"></i>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
          </a>
          <a href="#" className="text-black hover:text-gray-300 text-x1">
            <i className="fab fa-instagram"></i>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
          </a>
        </div>
    <p className="text-black">&copy; 2024 Football Reservation Website. All rights reserved.</p>
</footer>

    </div>
  );
}

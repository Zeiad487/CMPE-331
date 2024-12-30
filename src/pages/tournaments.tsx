import Image from "next/image";
import logo from "@/public/logo.png"; // Adjust the path as needed
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import logo1 from "@/public/offside 1 (1).png";

export default function Tournaments() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    return (
        <div
            className="min-h-screen text-white bg-cover bg-center"
            style={{
                backgroundImage: "url('/2niggers 1.png')", 
            
            }}
        >
            {/* Header */}
            <header
                style={{ backgroundColor: "rgba(32, 32, 32, 1)" }}
                className="p-4 flex justify-between items-center"
            >
                <Image src={logo1} alt="Logo" width={171} height={62} />
                <nav className="flex space-x-20">
                    <Link
                        href="/main"
                        className={`px-4 py-2 rounded ${
                            router.pathname === "/main" ? "bg-[#9ace20e0]" : "text-white hover:bg-[#9ace20e0]"
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/tournaments"
                        className={`px-4 py-2 rounded ${
                            router.pathname === "/tournaments" ? "bg-[#9ace20e0]" : "text-white hover:bg-[#9ace20e0]"
                        }`}
                    >
                        Tournaments
                    </Link>
                    <Link
                        href="/booking"
                        className={`px-4 py-2 rounded ${
                            router.pathname === "/booking" ? "bg-[#9ace20e0]" : "text-white hover:bg-[#9ace20e0]"
                        }`}
                    >
                        Booking
                    </Link>
                </nav>
                {/* Profile Navbar */}
                <div className="relative">
                    <div
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
                    >
                        <span className="text-white">P</span>
                    </div>

                    {/* Dropdown Menu */}
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-[#202020] text-white rounded-lg shadow-lg border-2 border-[#9ace20]">
                            <a href="#" className="block px-4 py-2 hover:bg-[#9ace20e0]">
                                Profile
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-[#9ace20e0]">
                                Activities
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-[#9ace20e0]">
                                Settings
                            </a>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-col items-center p-8 w-full max-w-4xl mx-auto bg-[#00000000] bg-opacity-90 text-white rounded-lg shadow-md">
                {/* Tournament Image and Details */}
                <div className="bg-[#1b1a1a] rounded-lg shadow-md p-4 w-full mb-6 text-center">
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/tournaments.png" // Replace with the actual image path
                            alt="Tournament"
                            width={400}
                            height={300}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-2xl">8 × 8</p>
                        <p className="text-[#9ace20] font-bold text-3xl">15,000 ₺</p>
                    </div>
                </div>

                {/* Team Details Form */}
                <div className="bg-[#1b1a1a] rounded-lg shadow-md p-6 w-full">
                    <h2 className="text-center text-xl font-bold mb-4">Team details</h2>
                    <div className="flex justify-center mb-4">
                        <Image src={logo} alt="Logo" width={500} height={10} />
                    </div>
                    <form className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <input
                                type="text"
                                placeholder="Team Name"
                                className="w-full p-2 rounded-md bg-[#30312f] text-white placeholder-gray-400"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Captain Name"
                            className="w-full p-2 rounded-md bg-[#30312f] text-white placeholder-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="1st Teammate Name"
                            className="w-full p-2 rounded-md bg-[#30312f] text-white placeholder-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="2nd Teammate Name"
                            className="w-full p-2 rounded-md bg-[#30312f] text-white placeholder-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="3rd Teammate Name"
                            className="w-full p-2 rounded-md bg-[#30312f] text-white placeholder-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="4th Teammate Name"
                            className="w-full p-2 rounded-md bg-[#30312f] text-white placeholder-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="5th Teammate Name"
                            className="w-full p-2 rounded-md bg-[#30312f] text-white placeholder-gray-400"
                        />
                        <input
                            type="text"
                            placeholder="6th Teammate Name"
                            className="w-full p-2 rounded-md bg-[#30312f] text-white placeholder-gray-400"
                        />
                        <div className="col-span-2">
                            <input
                                type="text"
                                placeholder="T-shirt Color"
                                className="w-full p-2 rounded-md bg-[#30312f] text-white placeholder-gray-400"
                            />
                        </div>
                    </form>
                    <div className="flex justify-center mt-9">
                        <button className="bg-[#9ace20e0] text-black font-bold py-2 px-6 rounded-lg">
                            BOOK NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer
  style={{ backgroundColor: "rgba(155, 206, 32, 1)" }}
  className="flex flex-col md:flex-row justify-between items-center py-6 px-12 space-y-6 md:space-y-0"
>
  {/* Left Side - Logo and Description */}
  <div className="flex flex-col items-center md:items-start space-y-4">
    <Image src={logo} alt="OFFSIDE Logo" width={250} height={270} />
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

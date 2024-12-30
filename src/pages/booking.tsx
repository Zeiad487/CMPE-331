import Image from "next/image";
import Link from "next/link";
import logo from "@/public/offside 1 (1).png";
import logo1 from "@/public/logo.png";
import { useState } from "react";
import { useRouter } from "next/router";
import { stadiums } from "@/data/stadium";

export default function BookingPage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBooking = (id: any) => {
    router.push(`/stadium/${id}`);
  };


  return (
    <div
      className="min-h-screen text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('/2niggers 1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
      }}
    >
      {/* Header */}
      <header
        style={{ backgroundColor: "rgba(32, 32, 32, 1)" }}
        className="p-4 flex justify-between items-center"
      >
        <Image src={logo} alt="Logo" width={171} height={62} />
        <nav className="flex space-x-20">
          <Link
            href="/main"
            className={`px-4 py-2 rounded ${
              router.pathname === "/" ? "bg-[#9ace20e0]" : "text-white hover:bg-[#9ace20e0]"
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

      {/* Main Section */}
      <main className="py-10 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stadiums.map((stadium) => (
            <div key={stadium.id} className="bg-[#2c2c2c] p-5 rounded-lg text-center">
              <Image src={stadium.image} alt={stadium.name} width={300} height={200} className="rounded-lg" />
              <h2 className="text-white font-bold mt-2">{stadium.name}</h2>
              <p className="text-[#9ace20]">{stadium.price} ₺/hr</p>
              <button
                onClick={() => handleBooking(stadium.id)}
                className="bg-[#9bce20] text-black py-2 px-4 rounded mt-3 inline-block"
              >
                Book
              </button>
            </div>
          ))}
        </div>
      </main>

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


export async function getStaticProps() {
  // Ideally, fetch this data from an API
  
  return {
    props: {
      stadiums,
    },
    revalidate: 86400, // Revalidate at most once per day
  };
}
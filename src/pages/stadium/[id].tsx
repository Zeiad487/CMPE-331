import { useState } from "react";
import { useRouter } from "next/router";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/offside 1 (1).png";
import logo1 from "@/public/logo.png";
import { stadiums } from "@/data/stadium";

// Define the type for a Stadium
interface Stadium {
  id: number;
  name: string;
  price: number;
  image: string;
  location: string;
  locationLink: string;
}

export default function StadiumDetails() {
  const router = useRouter();
  const { id } = router.query;
  const stadium = stadiums.find((s) => parseInt(id as string) === s.id);

  if (!stadium) return <h2>No stadium with that ID</h2>;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Mock available time slots
  const timeSlots: { [key: string]: string[] } = {
    "2024-12-30": ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"],
    "2024-12-31": ["11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
  };

  // Get time slots for the selected date
  const availableTimes = selectedDate
    ? timeSlots[selectedDate.toISOString().split("T")[0]] || []
    : [];

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
          <Link href="/" className="text-white hover:bg-[#9ace20e0] px-4 py-2 rounded">
            Home
          </Link>
          <Link href="/tournaments" className="text-white hover:bg-[#9ace20e0] px-4 py-2 rounded">
            Tournaments
          </Link>
          <Link href="/booking" className="text-white hover:bg-[#9ace20e0] px-4 py-2 rounded">
            Booking
          </Link>
        </nav>
        <div className="relative">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <span className="text-white">P</span>
          </div>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[rgba(32,32,32,1)] text-white rounded-lg shadow-lg border-2 border-[#9ace20]">
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
      <main className="max-w-6xl mx-auto bg-[#202020] py-10 px-8 rounded-lg shadow-lg mt-10">
        {/* Image and Title */}
        <div className="text-center mb-10 flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <Image
              src={stadium.image}
              alt={stadium.name}
              width={600}
              height={300}
              className="rounded-lg object-cover"
            />
            <h1 className="text-3xl font-bold mt-4 text-[#9ace20]">{stadium.name}</h1>
          </div>

          {/* Calendar Section */}
          <div className="md:w-1/3 bg-white rounded-lg p-4 text-black shadow-lg">
            <h2 className="text-[#9ace20] font-bold mb-4">Availability</h2>
            <Calendar
              onChange={(value) => setSelectedDate(value as Date)}
              minDate={new Date()}
              value={selectedDate}
            />
          </div>
        </div>

        {/* Time Slots Section */}
        {selectedDate && (
          <div className="text-center mt-10">
            <h2 className="text-2xl text-[#9ace20] font-bold mb-4">
              Available Times for {selectedDate.toDateString()}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {availableTimes.length > 0 ? (
                availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-2 rounded ${
                      selectedTime === time
                        ? "bg-[#9ace20] text-black"
                        : "bg-white text-black hover:bg-gray-300"
                    }`}
                  >
                    {time}
                  </button>
                ))
              ) : (
                <p className="text-white">No times available for this date.</p>
              )}
            </div>
          </div>
        )}

        {/* Selected Time */}
        {selectedTime && (
          <div className="text-center mt-10">
            <h2 className="text-2xl text-[#9ace20] font-bold">
              You selected: {selectedTime}
            </h2>
            <button className="bg-[#9bce20] hover:bg-[#88b519] text-black font-bold py-3 px-6 rounded text-xl mt-4">
              Confirm Booking
            </button>
          </div>
        )}

        {/* Description Section */}
        <div className="grid grid-cols-2 gap-6 text-lg mt-10">
          <div className="text-left">
            <h2 className="text-[#9ace20] font-bold mb-4">Description</h2>
            <p>
              Rent our premium fields for your next game! ⚽ Enjoy well-maintained turf, cold water,
              marker jerseys, and a quality ball for an unforgettable experience. Perfect for
              matches, practice, or tournaments. 🏆 Book now and play like a pro!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-lg">
            <p>
              <strong>Pitch Type:</strong> <span className="text-[#9ace20]">Outdoor</span>
            </p>
            <p>
              <strong>Time:</strong> <span className="text-[#9ace20]">5pm - 7pm</span>
            </p>
            <p>
              <strong>Size:</strong> <span className="text-[#9ace20]">8 x 8</span>
            </p>
            <p>
              <strong>Date:</strong> <span className="text-[#9ace20]">20 Jan 2025</span>
            </p>
            <p>
              <strong>Fee:</strong> <span className="text-[#9ace20]">{stadium.price} ₺</span>
            </p>
            <p>
              <strong>Location:</strong>{" "}
              <a
                href={stadium.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ace20] underline"
              >
                {stadium.location}
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{ backgroundColor: "rgba(155, 206, 32, 1)" }}
        className="flex flex-col md:flex-row justify-between items-center py-6 px-12 space-y-6 md:space-y-0"
      >
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image src={logo1} alt="OFFSIDE Logo" width={250} height={270} />
          <p className="text-black font-bold text-lg text-center md:text-left">
            OFFSIDE - The easiest way to book football fields near you. Plan your game, reserve your
            pitch, and get ready to play!
          </p>
        </div>
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
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-black hover:text-gray-300 text-x">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-black hover:text-gray-300 text-x1">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

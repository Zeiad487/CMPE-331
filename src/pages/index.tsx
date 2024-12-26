import { useRouter } from 'next/router';
import Image from 'next/image';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div
      style={{ backgroundColor: 'rgba(32, 32, 32, 1)' }}
      className="min-h-screen text-white flex flex-col items-center justify-center"
    >
      <div className="text-center">
        {/* Main logo */}
        <Image
          src="/logo.png"
          alt="OFFSIDE Logo"
          width={700}
          height={359}
        />

        {/* Small OFFSIDE logo centered */}
        <div className="flex justify-center items-center w-full my-4">
          <Image
            src="/offside 2.png"
            alt="OFFSIDE Small Logo"
            width={220}
            height={101}
          />
        </div>

        <p className="text-lg mt-4">
          "Stay Onside with OFFSIDE - Your Go-To Spot for Booking Football Pitches!"
        </p>

        {/* Clickable logo to navigate to main, centered */}
        <div
          onClick={() => router.push('/main')}
          className="flex justify-center items-center w-full cursor-pointer"
        >
          <Image
            src="/Component.png"
            alt="Navigate to Main"
            width={279}
            height={106}
          />
        </div>
      </div>
    </div>
  );
}

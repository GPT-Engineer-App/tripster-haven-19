import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Star } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const featuredListings = [
    { id: 1, title: "Cozy Cabin in the Woods", price: 100, image: "/placeholder.svg" },
    { id: 2, title: "Beachfront Paradise", price: 200, image: "/placeholder.svg" },
    { id: 3, title: "City Center Apartment", price: 150, image: "/placeholder.svg" },
    { id: 4, title: "Mountain View Chalet", price: 180, image: "/placeholder.svg" },
    { id: 5, title: "Lakeside Retreat", price: 120, image: "/placeholder.svg" },
    { id: 6, title: "Historic Downtown Loft", price: 160, image: "/placeholder.svg" },
  ];

  const filteredListings = featuredListings.filter(listing =>
    listing.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-500">Airbnb Clone</div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-800 hover:text-gray-900">Home</Link></li>
              <li><Link to="/booking" className="text-gray-800 hover:text-gray-900">Explore</Link></li>
              <li><Link to="/my-trips" className="text-gray-800 hover:text-gray-900">My Trips</Link></li>
              <li><Link to="/signin" className="text-gray-800 hover:text-gray-900">Login/Signup</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Explore Stays</h1>
        
        <div className="mb-8 flex flex-wrap gap-4">
        <Input
          placeholder="Search for a stay"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={cn("w-[240px] justify-start text-left font-normal", !checkInDate && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkInDate ? format(checkInDate, "PPP") : <span>Check-in Date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={checkInDate} onSelect={setCheckInDate} initialFocus />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={cn("w-[240px] justify-start text-left font-normal", !checkOutDate && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkOutDate ? format(checkOutDate, "PPP") : <span>Check-out Date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={checkOutDate} onSelect={setCheckOutDate} initialFocus />
          </PopoverContent>
        </Popover>
        <Button className="bg-red-500 text-white hover:bg-red-600">Search</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredListings.map((listing) => (
          <PropertyCard key={listing.id} {...listing} />
        ))}
      </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-sm">Airbnb Clone is a project to demonstrate web development skills.</p>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-sm">Email: info@airbnbclone.com</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="text-sm">
                <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookingPage;

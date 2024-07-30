import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Star } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import PropertyCard from "./PropertyCard";

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
    <div className="container mx-auto px-4 py-8">
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
    </div>
  );
};

export default BookingPage;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Star } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const BookingPage = () => {
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  const reviews = [
    { id: 1, author: "John Doe", rating: 5, comment: "Amazing place! Would definitely come back." },
    { id: 2, author: "Jane Smith", rating: 4, comment: "Great location and very comfortable." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="/placeholder.svg" alt="Property" className="w-full h-[400px] object-cover rounded-lg mb-4" />
          <h1 className="text-3xl font-bold mb-4">Luxury Beachfront Villa</h1>
          <p className="text-gray-600 mb-4">
            Experience the ultimate beachfront getaway in this stunning villa. Enjoy breathtaking ocean views, private beach access, and luxurious amenities.
          </p>
          <h2 className="text-xl font-semibold mb-2">Amenities</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Private pool</li>
            <li>Fully equipped kitchen</li>
            <li>Wi-Fi</li>
            <li>Air conditioning</li>
            <li>Beach access</li>
          </ul>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !checkInDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkInDate ? format(checkInDate, "PPP") : <span>Check-in Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={checkInDate} onSelect={setCheckInDate} initialFocus />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !checkOutDate && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOutDate ? format(checkOutDate, "PPP") : <span>Check-out Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={checkOutDate} onSelect={setCheckOutDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <Input type="number" placeholder="Number of guests" />
              <Button className="w-full bg-red-500 text-white hover:bg-red-600">Book Now</Button>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            {reviews.map((review) => (
              <div key={review.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="font-semibold mr-2">{review.author}</span>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Star } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const ListingPage = () => {
  const { id } = useParams();
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [guests, setGuests] = useState(1);

  // Mock data for the listing
  const listing = {
    id,
    title: "Luxury Beachfront Villa",
    description: "Experience the ultimate beachfront getaway in this stunning villa. Enjoy breathtaking ocean views, private beach access, and luxurious amenities.",
    price: 300,
    image: "/placeholder.svg",
    amenities: ["Private pool", "Fully equipped kitchen", "Wi-Fi", "Air conditioning", "Beach access"],
    reviews: [
      { id: 1, author: "John Doe", rating: 5, comment: "Amazing place! Would definitely come back." },
      { id: 2, author: "Jane Smith", rating: 4, comment: "Great location and very comfortable." },
    ],
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out dates");
      return;
    }
    // Here you would typically send the booking data to your backend
    toast.success("Booking successful! Check your email for confirmation.");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={listing.image} alt={listing.title} className="w-full h-[400px] object-cover rounded-lg mb-4" />
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{listing.title}</h1>
          <p className="text-gray-700 mb-4">{listing.description}</p>
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Amenities</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {listing.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
            <form onSubmit={handleBooking} className="space-y-4">
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
              <Input
                type="number"
                placeholder="Number of guests"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                min="1"
              />
              <Button type="submit" className="w-full bg-red-500 text-white hover:bg-red-600">Book Now</Button>
            </form>
            <p className="mt-4 text-center text-gray-700">
              ${listing.price} / night · {guests} guest{guests !== 1 ? 's' : ''}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            {listing.reviews.map((review) => (
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

export default ListingPage;
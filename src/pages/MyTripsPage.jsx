import { Button } from "@/components/ui/button";

const TripCard = ({ image, title, dates, isPast }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{dates}</p>
      <Button variant={isPast ? "outline" : "default"}>
        {isPast ? "Leave a Review" : "View Details"}
      </Button>
    </div>
  </div>
);

const MyTripsPage = () => {
  const upcomingTrips = [
    { id: 1, title: "Mountain Retreat", dates: "Jun 15 - Jun 20, 2023", image: "/placeholder.svg" },
    { id: 2, title: "City Loft", dates: "Jul 5 - Jul 10, 2023", image: "/placeholder.svg" },
  ];

  const pastTrips = [
    { id: 3, title: "Beach House", dates: "May 1 - May 5, 2023", image: "/placeholder.svg" },
    { id: 4, title: "Countryside Cottage", dates: "Apr 10 - Apr 15, 2023", image: "/placeholder.svg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Trips</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingTrips.map((trip) => (
            <TripCard key={trip.id} {...trip} isPast={false} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Past Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastTrips.map((trip) => (
            <TripCard key={trip.id} {...trip} isPast={true} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyTripsPage;
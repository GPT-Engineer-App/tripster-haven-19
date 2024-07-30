import { Card, CardContent, CardFooter } from "@/components/ui/card";

const PropertyCard = ({ title, price, image }) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-bold">${price} / night</span>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
          View
        </button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
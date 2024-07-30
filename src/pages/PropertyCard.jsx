import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PropertyCard = ({ id, title, price, image }) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-bold text-gray-900">${price} / night</span>
        <Button asChild>
          <Link to={`/listing/${id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
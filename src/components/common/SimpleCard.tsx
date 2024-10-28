import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "../ui/label";

const SimpleCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: any;
}) => {
  return (
    <Card className="p-4 lg:w-[300px] h-[200px]">
      <CardTitle>{title}</CardTitle>
      <CardContent className="flex flex-row gap-4 mt-6">
        <Label className="text-lg">{description}</Label>
        {icon ?? <></>}
      </CardContent>
    </Card>
  );
};

export default SimpleCard;

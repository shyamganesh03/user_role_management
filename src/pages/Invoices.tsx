import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowDownWideNarrow, Plus } from "lucide-react";
import { DataTable } from "@/components/common/DataTable";
import { invoiceColumns } from "@/constants/columns";
import SimpleCard from "@/components/common/SimpleCard";

const Invoices = () => {
  const data = [
    {
      name: "Bricks",
      amount: "$ 120",
    },
    {
      name: "Beams",
      amount: "$ 1200",
    },
  ];
  return (
    <div className="h-screen w-full flex flex-col p-4 gap-4">
      <div className="flex flex-row justify-between">
        <Label>Invoices of 28/05/2024</Label>
        <Input className="w-[200px]" />
      </div>
      <div className="flex flex-row-reverse">
        <Button>
          <Plus />
          <Label>Add New User</Label>
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <SimpleCard
          title={"Paid Amount"}
          description={"$ 12"}
          icon={<ArrowDownWideNarrow />}
        />
        <SimpleCard
          title={"Due Amount"}
          description={"$ 20,000"}
          icon={<ArrowDownWideNarrow />}
        />
        <SimpleCard
          title={"Total Invoice"}
          description={"28"}
          icon={<ArrowDownWideNarrow />}
        />
      </div>
      <div>
        <Card className="p-4">
          <CardTitle>Invoices</CardTitle>
          <CardContent className="mt-4">
            <DataTable columns={invoiceColumns} data={data} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Invoices;

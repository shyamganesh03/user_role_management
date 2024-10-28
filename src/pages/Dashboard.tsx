import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react";
import { months } from "@/lib/utils";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const pieChartDataSet = {
    labels: ["user1", "user2", "user3"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const labels = months({ count: 7 });
  const lineChartDataSet = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div className="h-screen w-full flex gap-4 flex-col py-4">
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <Card className="p-4">
          <Pie data={pieChartDataSet} />
        </Card>
        <Card className="p-4 lg:w-[300px] h-[200px]">
          <CardTitle>Todays Sale</CardTitle>
          <CardContent className="flex flex-row gap-4 mt-6">
            <Label className="text-lg">$15,000</Label>
            <ArrowUpWideNarrow />
          </CardContent>
        </Card>
        <Card className="p-4 lg:w-[300px] h-[200px]">
          <CardTitle>Total Customer</CardTitle>
          <CardContent className="flex flex-row gap-4 mt-6">
            <Label className="text-lg">12,0000</Label>
            <ArrowDownWideNarrow />
          </CardContent>
        </Card>
      </div>
      <Card>
        <Line data={lineChartDataSet} />
      </Card>
    </div>
  );
};

export default Dashboard;

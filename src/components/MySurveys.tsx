import { Calendar, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "./ui/progress";

const MySurveys = () => {

  return (
    <>
      <div className="flex gap-5">
        <Button variant="outline" className="rounded-xl">
          <Calendar absoluteStrokeWidth /> Last 30 days
        </Button>
        <Button variant="outline" className="rounded-xl">
          Compare: Previous month
        </Button>
      </div>

      <div className="py-4 flex gap-5 justify-between">
        <Card className="w-[400px] rounded-xl">
          <CardHeader className="flex flex-row place-items-center justify-between">
            <h3 className="border-b-2 border-dashed">Survey created</h3>
            <FileSearch absoluteStrokeWidth strokeWidth={1.5} size={20} />
          </CardHeader>
          <CardContent className="text-3xl font-bold">0</CardContent>
        </Card>

        <Card className="w-[400px] rounded-xl">
          <CardHeader className="flex flex-row place-items-center justify-between">
            <h3 className="border-b-2 border-dashed">Surveys published</h3>
            <FileSearch absoluteStrokeWidth strokeWidth={1.5} size={20} />
          </CardHeader>
          <CardContent className="text-3xl font-bold">0</CardContent>
        </Card>

        <Card className="w-[400px] rounded-xl">
          <CardHeader className="flex flex-row place-items-center justify-between">
            <h3 className="border-b-2 border-dashed">Response rate</h3>
            <FileSearch absoluteStrokeWidth strokeWidth={1.5} size={20} />
          </CardHeader>
          <CardContent className="text-3xl font-bold">0</CardContent>
        </Card>
      </div>

      <Card className="w-full rounded-xl">
        <Table>
          <TableHeader className="text-lg">
            <TableRow>
              <TableHead className="w-[60%]">Survey name</TableHead>
              <TableHead>Responses</TableHead>
              <TableHead>Completion rate</TableHead>
              <TableHead>Survey type</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
          </TableBody>
          <TableCaption className="text-center place-content-center text-lg text-foreground h-60">
            <h1 className="font-bold text-xl mb-1">No surveys yet</h1>
            <p>Create a survey to get started</p>
          </TableCaption>

        </Table>
      </Card>

      <Card className="my-4">
        <CardHeader className="font-semibold">You're on the Free plan</CardHeader>
        <CardContent>
          <p>No. of days left: 1/100</p>    
          <Progress value={1} max={100} className="my-2" />
        </CardContent>
        <CardFooter>
          <span>Upgrade to our </span>
          <a href="#" className="mx-1 text-blue-700 underline">premium</a> 
          <span>plan to get more benefits!</span>
        </CardFooter>
      </Card>
    </>
  );
};

export default MySurveys;

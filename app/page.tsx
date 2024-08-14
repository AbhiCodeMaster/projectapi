
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { DataTable } from "./data-table-components/data-table";
import { columns } from "./data-table-components/columns";
import { ChartComponent } from "./chart";
import { Chart2Component } from "./chart2";

export const metadata: Metadata = {
  title: "Expenses",
  description: "A Expense tracker build using Tanstack Table."
};

async function getData() {
  const filePath = path.join(
    process.cwd(),
    "app/data-table-components",
    "data.json"
  );
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

export default async function Page() {
  const data = await getData();
  console.log("data", data);

  return (
    <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
        {"Here's a list of today's sales"}
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-4" >
      <DataTable data={data} columns={columns} />
      <div className="grid grid-cols-1 gap-4"><ChartComponent/>
      <Chart2Component/>
      </div>
      </div>
    </div>
  );
}

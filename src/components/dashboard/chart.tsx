"use client";

import { Bar, BarChart } from "recharts";

import { ChartContainer } from "@/components/ui/chart";
import type { ChartConfig } from "../ui/chart";

const chartData = [
  { month: "January", energy: 186 },
  { month: "February", energy: 305 },
  { month: "March", energy: 237 },
  { month: "April", energy: 73 },
  { month: "May", energy: 209 },
  { month: "June", energy: 244 },
  { month: "March", energy: 337 },
  { month: "April", energy: 73 },
  { month: "May", energy: 109 },
  { month: "June", energy: 414 },
  { month: "June", energy: 244 },
  { month: "March", energy: 337 },
  { month: "April", energy: 73 },
  { month: "May", energy: 109 },
  { month: "June", energy: 414 },
];

const chartConfig = {
  energy: {
    label: "Energy",
    color: "#86BBD8",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full ">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="energy" fill="var(--color-energy)" radius={10} />
      </BarChart>
    </ChartContainer>
  );
}

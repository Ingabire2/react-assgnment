import "./chartBar.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Nyungwe",
    Income: 8000,
    tour: 2400,
    amt: 2400
  },
  {
    name: "Gishwati",
    Income: 3000,
    tour: 1398,
    amt: 2210
  },
  {
    name: "Muhazi",
    Income: 2000,
    tour: 9800,
    amt: 2290
  },
  {
    name: "Akagera",
    Income: 2780,
    tour: 3908,
    amt: 2000
  },
  {
    name: "Burera",
    Income: 1890,
    tour: 4800,
    amt: 2181
  },
  {
    name: "LacKivu",
    Income: 2390,
    tour: 3800,
    amt: 2500
  },
//   {
//     name: "Park G",
//     Income: 3490,
//     tour: 4300,
//     amt: 2100
//   }
];

export default function ChartBar() {
  return (
    <BarChart
      width={700}
      height={360}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 3
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="tour" fill="#8884d8" />
      <Bar dataKey="Income" fill="#82ca9d" />
    </BarChart>
  );
}

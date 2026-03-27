"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Area,
  AreaChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts"

// Sample data for charts
const salesData = [
  { month: "Jan", sales: 4000, profit: 2400 },
  { month: "Feb", sales: 3000, profit: 1398 },
  { month: "Mar", sales: 2000, profit: 9800 },
  { month: "Apr", sales: 2780, profit: 3908 },
  { month: "May", sales: 1890, profit: 4800 },
  { month: "Jun", sales: 2390, profit: 3800 },
]

const trafficData = [
  { day: "Mon", visitors: 120 },
  { day: "Tue", visitors: 180 },
  { day: "Wed", visitors: 150 },
  { day: "Thu", visitors: 280 },
  { day: "Fri", visitors: 220 },
  { day: "Sat", visitors: 350 },
  { day: "Sun", visitors: 310 },
]

const categoryData = [
  { name: "Desktop", value: 45 },
  { name: "Mobile", value: 35 },
  { name: "Tablet", value: 20 },
]

// Chart configuration with theme colors
const salesChartConfig = {
  sales: {
    label: "Sales",
    theme: {
      light: "var(--chart-1)",
      dark: "var(--chart-1)",
    },
  },
  profit: {
    label: "Profit",
    theme: {
      light: "var(--chart-2)",
      dark: "var(--chart-2)",
    },
  },
}

const trafficChartConfig = {
  visitors: {
    label: "Visitors",
    theme: {
      light: "var(--chart-1)",
      dark: "var(--chart-1)",
    },
  },
}

const deviceChartConfig = {
  Desktop: {
    label: "Desktop",
    theme: {
      light: "var(--chart-1)",
      dark: "var(--chart-1)",
    },
  },
  Mobile: {
    label: "Mobile",
    theme: {
      light: "var(--chart-2)",
      dark: "var(--chart-2)",
    },
  },
  Tablet: {
    label: "Tablet",
    theme: {
      light: "var(--chart-3)",
      dark: "var(--chart-3)",
    },
  },
}

const areaChartConfig = {
  sales: {
    label: "Sales",
    theme: {
      light: "var(--chart-1)",
      dark: "var(--chart-1)",
    },
  },
  profit: {
    label: "Profit",
    theme: {
      light: "var(--chart-2)",
      dark: "var(--chart-2)",
    },
  },
}

// Pie chart slice colors
const PIE_COLORS = [
  "var(--color-Desktop)",
  "var(--color-Mobile)",
  "var(--color-Tablet)",
]

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col gap-8 p-6">
      {/* Welcome Section */}
      <div className="flex max-w-md flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Sales vs Profit</CardTitle>
            <CardDescription>Monthly performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={salesChartConfig} className="h-[200px]">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="profit" fill="var(--color-profit)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Website Traffic</CardTitle>
            <CardDescription>Daily visitors</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={trafficChartConfig} className="h-[200px]">
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="var(--color-visitors)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-visitors)" }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Device Usage</CardTitle>
            <CardDescription>Traffic by device</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={deviceChartConfig} className="h-[200px]">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  {categoryData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index]} />
                  ))}
                </Pie>
                <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Area Chart */}
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Combined sales and profit trend</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={areaChartConfig} className="h-[250px]">
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stackId="1"
                  stroke="var(--color-sales)"
                  fill="var(--color-sales)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stackId="1"
                  stroke="var(--color-profit)"
                  fill="var(--color-profit)"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

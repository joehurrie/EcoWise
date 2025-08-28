'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CloudCog, Recycle, Droplets } from 'lucide-react';

const impactStats = [
  {
    title: 'CO₂ Saved',
    value: '125.5 kg',
    description: 'Equivalent to planting 2 trees',
    icon: <CloudCog className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: 'Plastic Avoided',
    value: '30.2 kg',
    description: 'Equivalent to 600 plastic bottles',
    icon: <Recycle className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: 'Water Saved',
    value: '1,500 L',
    description: 'Equivalent to 30 showers',
    icon: <Droplets className="h-6 w-6 text-muted-foreground" />,
  },
];

const chartData = [
  { month: 'Jan', saved: 12 },
  { month: 'Feb', saved: 19 },
  { month: 'Mar', saved: 15 },
  { month: 'Apr', saved: 25 },
  { month: 'May', saved: 22 },
  { month: 'Jun', saved: 32 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-headline tracking-tight">Your Impact Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Track your progress and see the difference you're making.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {impactStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold font-headline">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className='font-headline'>Monthly Savings (CO₂ kg)</CardTitle>
          <CardDescription>An overview of your CO₂ savings over the last 6 months.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                  }}
                />
                <Bar dataKey="saved" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

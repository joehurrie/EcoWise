'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar } from 'lucide-react';

const chartData = [
    { name: 'Week 1', impact: 12 },
    { name: 'Week 2', impact: 19 },
    { name: 'Week 3', impact: 15 },
    { name: 'Week 4', impact: 25 },
];

const categories = [
    { name: 'Food', value: 42 },
    { name: 'Fashion', value: 28 },
    { name: 'Home', value: 18 },
    { name: 'Other', value: 12 },
]

export function Insights() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-headline font-bold mb-6 text-primary">Insights & Trends</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 rounded-lg shadow-md">
            <CardHeader className="flex flex-row justify-between items-center mb-6 p-0">
                <CardTitle className="font-bold text-lg">Weekly Impact Summary</CardTitle>
                <div className="flex space-x-2">
                    <Button variant="secondary" size="sm" className="px-3 py-1 rounded-md text-sm">Week</Button>
                    <Button variant="ghost" size="sm" className="px-3 py-1 text-sm">Month</Button>
                    <Button variant="ghost" size="sm" className="px-3 py-1 text-sm">Year</Button>
                </div>
            </CardHeader>
            <CardContent className="h-64 p-0">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip
                            contentStyle={{
                                background: 'hsl(var(--background))',
                                border: '1px solid hsl(var(--border))',
                                borderRadius: 'var(--radius)',
                            }}
                        />
                        <Bar dataKey="impact" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

        <Card className="p-6 rounded-lg shadow-md">
            <CardHeader className="p-0 mb-6">
                <CardTitle className="font-bold text-lg">Category Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
                {categories.map(category => (
                    <div key={category.name}>
                        <div className="flex justify-between mb-1">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-accent font-medium">{category.value}%</span>
                        </div>
                        <Progress value={category.value} className="h-2" />
                    </div>
                ))}
                <div className="mt-8">
                    <h4 className="font-bold mb-3">Behavioral Insights</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm"><Calendar className="inline-block text-accent mr-2 h-4 w-4" /> You're most eco-conscious on weekends</p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}

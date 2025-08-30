'use client';

import type { GenerateSustainabilityReportOutput } from '@/ai/flows/generate-sustainability-report';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Leaf, Package, Handshake, Mountain, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SustainabilityReportCardProps {
  report: GenerateSustainabilityReportOutput;
}

const getScoreColor = (score: number) => {
  if (score >= 80) return 'bg-green-500';
  if (score >= 60) return 'bg-yellow-500';
  return 'bg-red-500';
};

const getRatingColor = (rating: 'Low' | 'Medium' | 'High') => {
  if (rating === 'Low') return 'text-green-600';
  if (rating === 'Medium') return 'text-yellow-600';
  return 'text-red-600';
};


export function SustainabilityReportCard({ report }: SustainabilityReportCardProps) {
  const { productName, summary, sustainabilityScore, report: details } = report;

  return (
    <Card>
      <CardHeader>
        <CardTitle className='font-headline text-2xl'>Sustainability Report: {productName}</CardTitle>
        <CardDescription>
          This report estimates the product's environmental and ethical impact.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center p-6 bg-muted rounded-lg">
          <p className="text-sm font-medium text-muted-foreground">Overall Sustainability Score</p>
          <p className={cn('text-6xl font-bold', getScoreColor(sustainabilityScore).replace('bg-', 'text-'))}>
            {sustainabilityScore}
          </p>
          <Progress value={sustainabilityScore} className={cn('h-2 mt-2', getScoreColor(sustainabilityScore))} />
        </div>

        <p className="text-foreground/90">{summary}</p>

        <div className="space-y-4">
          {/* CO2 Emissions */}
          <Card className="p-4">
            <CardHeader className="p-0 flex flex-row items-center gap-3 space-y-0">
              <div className="p-2 bg-primary/10 rounded-md">
                <Mountain className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">CO₂ Emissions</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <div className="flex justify-between items-baseline">
                <p className="text-2xl font-semibold">{details.co2Emissions.value}</p>
                <Badge variant={details.co2Emissions.rating === 'Low' ? 'default' : details.co2Emissions.rating === 'Medium' ? 'secondary' : 'destructive'}>
                  {details.co2Emissions.rating} Impact
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{details.co2Emissions.explanation}</p>
            </CardContent>
          </Card>

          {/* Packaging */}
          <Card className="p-4">
            <CardHeader className="p-0 flex flex-row items-center gap-3 space-y-0">
              <div className="p-2 bg-primary/10 rounded-md">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Packaging</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4">
               <div className="flex justify-between items-baseline mb-1">
                <p className="text-lg font-semibold">{details.packaging.material}</p>
                <p className="text-sm font-medium">{details.packaging.recyclability}% Recyclable</p>
              </div>
              <Progress value={details.packaging.recyclability} className="h-2" />
              <p className="text-sm text-muted-foreground mt-2">{details.packaging.explanation}</p>
            </CardContent>
          </Card>

          {/* Sourcing */}
          <Card className="p-4">
            <CardHeader className="p-0 flex flex-row items-center gap-3 space-y-0">
              <div className="p-2 bg-primary/10 rounded-md">
                <Handshake className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Sourcing & Ethics</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <div className="flex items-center gap-4">
                {details.sourcing.ethicalPractices ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100/80">
                      <CheckCircle className="mr-1 h-4 w-4" /> Ethical Practices
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      <XCircle className="mr-1 h-4 w-4" /> Ethical Concerns
                    </Badge>
                  )
                }
                <Badge variant="secondary">{details.sourcing.locality}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{details.sourcing.explanation}</p>
            </CardContent>
          </Card>
        </div>

      </CardContent>
    </Card>
  );
}

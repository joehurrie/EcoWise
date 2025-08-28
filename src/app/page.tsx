import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight, Building, Home as HomeIcon, Sprout } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const stats = [
  { label: 'Years of experience', value: '14' },
  { label: 'Happy customers', value: '12K' },
  { label: 'Capacity installed', value: '1GW' },
];

const categories = [
  {
    icon: <HomeIcon className="w-8 h-8 text-accent-foreground" />,
    title: 'House',
    description: 'Clean energy for residential buildings',
  },
  {
    icon: <Building className="w-8 h-8 text-accent-foreground" />,
    title: 'Office',
    description: 'Solutions for commercial spaces',
  },
  {
    icon: <Sprout className="w-8 h-8 text-accent-foreground" />,
    title: 'Garden',
    description: 'Solar panels for outdoor installations',
  },
];

const projects = [
  { id: '653', label: 'Project - 653', image: 'https://picsum.photos/600/400?random=1', hint: 'house solar' },
  { id: '848', label: 'Project - 848', image: 'https://picsum.photos/600/400?random=2', hint: 'garden solar' },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Wind turbines"
          fill
          className="object-cover -z-10"
          priority
          data-ai-hint="wind turbines"
        />
        <div className="absolute inset-0 bg-primary/70 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-headline tracking-tight">
              A Clean Future, Ready For You
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Transforming your carbon footprint into a story of positive impact. Discover sustainable alternatives and join a community dedicated to a greener planet.
            </p>
            <Link href="/scan">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Scan Your First Product
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 -mt-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold font-headline">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container px-4 md:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline">One Platform, Endless Impact</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            From your home to your office, EcoScan provides tailored insights and alternatives for a sustainable lifestyle everywhere.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <CardTitle className="font-headline">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="container px-4 md:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline">Our Projects in Action</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            See how we're helping communities and businesses transition to sustainable practices with our innovative projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.label}
                    fill
                    className="object-cover"
                    data-ai-hint={project.hint}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{project.label}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

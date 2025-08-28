import { Button } from '@/components/ui/button';
import { CalendarCheck, Code, BadgeCheck } from 'lucide-react';

export function FinalCta() {
  return (
    <section className="mb-16 text-center py-10">
      <h2 className="text-3xl font-headline font-bold mb-4 text-primary">
        Join the movement toward responsible retail
      </h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
        Our tools help institutions of all sizes make data-driven
        sustainability decisions.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="bg-accent text-primary px-6 py-3 rounded-md font-bold flex items-center hover:bg-accent/90 h-auto">
          <CalendarCheck className="mr-2 h-5 w-5" />
          Book a Consultation
        </Button>
        <Button className="bg-primary text-white px-6 py-3 rounded-md font-bold flex items-center hover:bg-primary/90 h-auto">
          <Code className="mr-2 h-5 w-5" />
          Access API Documentation
        </Button>
        <Button
          variant="outline"
          className="bg-white text-primary px-6 py-3 rounded-md font-bold flex items-center border-primary hover:bg-gray-100 h-auto"
        >
          <BadgeCheck className="mr-2 h-5 w-5" />
          Become a Verified Partner
        </Button>
      </div>
    </section>
  );
}

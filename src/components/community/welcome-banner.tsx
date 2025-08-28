import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function WelcomeBanner() {
  return (
    <section>
      <div className="bg-gradient-to-r from-primary to-[#1E4535] rounded-xl p-8 shadow-lg text-primary-foreground">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold font-headline">
              Welcome back, Joharie!
            </h1>
            <p className="text-primary-foreground/80 mt-2 max-w-lg">
              Ready to inspire change today? Share your latest eco-friendly discovery or ask the community a question.
            </p>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
            <Plus className="mr-2 h-4 w-4" /> Share Your Tip
          </Button>
        </div>
      </div>
    </section>
  );
}

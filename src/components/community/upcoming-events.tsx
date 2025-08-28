import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-headline text-primary">Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-foreground">June 2024</h3>
            <div className="flex space-x-1">
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground mb-2">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-sm">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/30 ${
                  [5, 10, 16].includes(i + 1)
                    ? 'bg-accent/50 font-bold text-primary'
                    : ''
                } ${[0, 1, 2, 3, 27, 28, 29].includes(i) ? 'text-muted-foreground' : ''}`}
              >
                {i > 2 ? i - 2 : ''}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-accent pl-4 py-1">
            <p className="font-semibold text-sm text-foreground">Beach Cleanup</p>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <MapPin className="h-3 w-3" /> Santa Monica Pier
            </p>
             <p className="text-xs text-muted-foreground flex items-center gap-2">
              <Calendar className="h-3 w-3" /> June 5, 9:00 AM
            </p>
          </div>
          <div className="border-l-4 border-accent pl-4 py-1">
            <p className="font-semibold text-sm text-foreground">Zero Waste Workshop</p>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <MapPin className="h-3 w-3" /> Online Webinar
            </p>
             <p className="text-xs text-muted-foreground flex items-center gap-2">
              <Calendar className="h-3 w-3" /> June 10, 2:00 PM
            </p>
          </div>
        </div>
        <Button variant="link" className="w-full mt-4 text-primary">View All Events</Button>
      </CardContent>
    </Card>
  );
}

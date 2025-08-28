import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function QuickPoll() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-headline text-primary">Quick Poll</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="font-medium mb-3 text-foreground">
            Would you switch to refillable shampoo if it saved 2kg CO₂ annually?
          </p>
          <RadioGroup className="space-y-2" defaultValue="maybe">
            <div className="flex items-center">
              <RadioGroupItem value="yes" id="poll-yes" />
              <Label htmlFor="poll-yes" className="ml-2 text-sm text-foreground/90">
                Yes, absolutely!
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="maybe" id="poll-maybe" />
              <Label htmlFor="poll-maybe" className="ml-2 text-sm text-foreground/90">
                Maybe, if price/quality is similar
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="no" id="poll-no" />
              <Label htmlFor="poll-no" className="ml-2 text-sm text-foreground/90">
                No, I prefer traditional packaging
              </Label>
            </div>
          </RadioGroup>
        </div>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          Vote & Earn 5 Points
        </Button>
        <div className="mt-3 text-center">
          <a href="#" className="text-sm text-primary hover:underline">
            View all surveys
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

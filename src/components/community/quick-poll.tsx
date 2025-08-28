import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export function QuickPoll() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-5">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Poll</h2>
      <div className="mb-3">
        <p className="font-medium mb-3">
          Would you switch to refillable shampoo if it saved 2kg CO₂ annually?
        </p>
        <RadioGroup className="space-y-2">
          <div className="flex items-center">
            <RadioGroupItem value="yes" id="poll-yes" />
            <Label htmlFor="poll-yes" className="ml-2 text-sm text-gray-700">
              Yes, absolutely!
            </Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem value="maybe" id="poll-maybe" />
            <Label htmlFor="poll-maybe" className="ml-2 text-sm text-gray-700">
              Maybe, if price/quality is similar
            </Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem value="no" id="poll-no" />
            <Label htmlFor="poll-no" className="ml-2 text-sm text-gray-700">
              No, I prefer traditional packaging
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-sm">
        Vote & Earn 5 Points
      </Button>
      <div className="mt-3 text-center">
        <a href="#" className="text-sm text-emerald-600 hover:text-emerald-800">
          View all surveys
        </a>
      </div>
    </section>
  );
}

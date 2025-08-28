import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../ui/button';

export function UpcomingEvents() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
        <a href="#" className="text-sm text-emerald-600 hover:text-emerald-800">
          View All
        </a>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">June 2023</h3>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-1">
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
              className={`h-8 rounded-full flex items-center justify-center cursor-pointer calendar-day ${
                [5, 10, 16].includes(i + 1)
                  ? 'event-day font-medium text-emerald-800'
                  : ''
              } ${[0,1,2,3].includes(i) ? 'text-transparent' : ''}`}
            >
              {i > 2 ? i - 2 : ''}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="border-l-4 border-emerald-500 pl-3 py-1">
          <p className="font-medium text-sm">June 5: Beach Cleanup</p>
          <p className="text-xs text-gray-500">9:00 AM - Santa Monica Pier</p>
          <div className="flex mt-1">
            <button className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full mr-2">
              RSVP
            </button>
            <button className="text-xs text-gray-500 hover:text-emerald-600">
              + 12 attending
            </button>
          </div>
        </div>
        <div className="border-l-4 border-emerald-500 pl-3 py-1">
          <p className="font-medium text-sm">June 10: Zero Waste Workshop</p>
          <p className="text-xs text-gray-500">2:00 PM - Online Webinar</p>
           <div className="flex mt-1">
            <button className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full mr-2">
              RSVP
            </button>
            <button className="text-xs text-gray-500 hover:text-emerald-600">
              + 34 attending
            </button>
          </div>
        </div>
        <div className="border-l-4 border-emerald-500 pl-3 py-1">
          <p className="font-medium text-sm">June 16: Community Garden Day</p>
          <p className="text-xs text-gray-500">
            10:00 AM - Downtown Community Center
          </p>
           <div className="flex mt-1">
            <button className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full mr-2">
              RSVP
            </button>
            <button className="text-xs text-gray-500 hover:text-emerald-600">
              + 21 attending
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <Button
          variant="outline"
          className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-sm"
        >
          Host Your Own Event
        </Button>
      </div>
    </section>
  );
}

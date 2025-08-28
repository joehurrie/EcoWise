import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, Shirt, Trophy, MapPin, Tag, Users, ChevronRight } from 'lucide-react';

const actions = [
    {
        title: "Try a refill store",
        reason: "Based on your plastic reduction goal",
        description: `Visit "GreenFill" downtown to refill your cleaning products and reduce packaging waste.`,
        details: "1.2 miles away",
        actionText: "Details",
        icon: <Store />,
        iconDetail: <MapPin className="text-accent mr-2 h-4 w-4"/>,
        isChallenge: false,
    },
    {
        title: "Ethical fashion brand",
        reason: "Matches your values",
        description: `"PureThread" uses organic cotton and pays fair wages. 15% off first order for EcoWise users.`,
        details: "Use code: ECOTHRIFT",
        actionText: "Shop Now",
        icon: <Shirt />,
        iconDetail: <Tag className="text-accent mr-2 h-4 w-4"/>,
        isChallenge: false,
    },
    {
        title: "Weekly Eco Challenge",
        reason: "New challenge starting",
        description: `"Meatless Monday" - Skip meat for one day and track your impact. Earn bonus points!`,
        details: "124 participants",
        actionText: "Join Challenge",
        icon: <Trophy />,
        iconDetail: <Users className="text-accent mr-2 h-4 w-4"/>,
        isChallenge: true,
    }
]

export function SuggestedActions() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-headline font-bold mb-6 text-primary">Suggested Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actions.map(action => (
            <Card key={action.title} className={`p-6 rounded-lg shadow-md ${action.isChallenge ? 'animate-pulse' : ''}`}>
                <CardContent className="p-0">
                    <div className="flex items-start mb-4">
                        <div className="bg-accent text-primary p-3 rounded-full mr-4">
                            {action.icon}
                        </div>
                        <div>
                            <h3 className="font-bold">{action.title}</h3>
                            <p className="text-sm text-gray-600">{action.reason}</p>
                        </div>
                    </div>
                    <p className="text-sm mb-4">{action.description}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm">
                            {action.iconDetail} {action.details}
                        </div>
                        <Button variant={action.isChallenge ? 'default' : 'link'} size="sm" className={`${action.isChallenge ? 'bg-[#4CAF50] hover:bg-[#45a049] text-white' : 'text-accent font-medium p-0 h-auto'}`}>
                            {action.actionText} {!action.isChallenge && <ChevronRight className="ml-1" />}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        ))}
      </div>
    </section>
  );
}

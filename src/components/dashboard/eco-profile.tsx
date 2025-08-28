import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { User, Leaf, Recycle, Zap, Trophy, Globe, Users } from 'lucide-react';

const badges = [
    { name: "Green Starter", description: "First scan", icon: <Leaf />, achieved: true },
    { name: "Plastic Fighter", description: "Avoided 10 plastics", icon: <Recycle />, achieved: true },
    { name: "Energy Saver", description: "Saved 100 kWh", icon: <Zap />, achieved: true },
    { name: "Zero Waste Hero", description: "Avoid 50 waste items", icon: <Trophy />, achieved: false },
    { name: "Global Citizen", description: "Support 5 ethical brands", icon: <Globe />, achieved: false },
    { name: "Community Leader", description: "Invite 3 friends", icon: <Users />, achieved: false },
]

export function EcoProfile() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-headline font-bold mb-6 text-primary">Eco Profile & Badges</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 rounded-lg shadow-md">
            <CardContent className="flex flex-col items-center text-center p-0">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-4">
                    <User className="text-primary text-4xl" />
                </div>
                <h3 className="font-bold text-xl">Joharie</h3>
                <p className="text-accent font-medium mb-4">Eco Explorer</p>
                <Progress value={45} className="w-full h-2 mb-6" />
                <p className="text-sm mb-6">Next level: Carbon Saver (55% more to go)</p>
                <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-4 py-2 rounded-md">
                    Share Profile
                </Button>
            </CardContent>
        </Card>
        
        <Card className="lg:col-span-2 p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-6">Your Badges</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {badges.map(badge => (
                    <div key={badge.name} className={`flex flex-col items-center p-4 ${!badge.achieved && 'opacity-50'}`}>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${badge.achieved ? 'bg-accent text-primary' : 'bg-gray-300'}`}>
                            {badge.icon}
                        </div>
                        <p className="text-sm font-medium text-center">{badge.name}</p>
                        <p className="text-xs text-gray-500 text-center">{badge.description}</p>
                    </div>
                ))}
            </div>
        </Card>
      </div>
    </section>
  );
}

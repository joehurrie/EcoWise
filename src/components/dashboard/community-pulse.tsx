import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, ChevronRight } from 'lucide-react';

const tips = [
    { text: "Use beeswax wraps instead of plastic", author: "EcoWarrior42" },
    { text: "Meat-free Mondays reduce footprint", author: "GreenChef" },
    { text: "Bulk buying reduces packaging waste", author: "ZeroWasteLife" },
];

const leaderboard = [
    { rank: 1, name: "GreenGuru", points: 1250, percentile: "Top 1%", color: "bg-green-50" },
    { rank: 2, name: "EcoExplorer", points: 980, percentile: "Top 5%", color: "" },
    { rank: 3, name: "SustainableSam", points: 875, percentile: "Top 10%", color: "" },
    { rank: 7, name: "You", points: 620, percentile: "Top 15%", color: "" },
]

export function CommunityPulse() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-headline font-bold mb-6 text-primary">Community Pulse</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 rounded-lg shadow-md">
            <CardHeader className="p-0 mb-6">
                <CardTitle className="font-bold text-lg">Trending Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
                {tips.map(tip => (
                    <div key={tip.text} className="flex items-start">
                        <div className="bg-accent text-primary p-2 rounded-full mr-3 mt-1">
                            <Lightbulb />
                        </div>
                        <div>
                            <p className="font-medium">{tip.text}</p>
                            <p className="text-xs text-gray-500">Shared by {tip.author}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
            <Button variant="link" className="mt-4 text-accent font-medium text-sm flex items-center p-0 h-auto">
                See all tips <ChevronRight className="ml-1" />
            </Button>
        </Card>
        
        <Card className="p-6 rounded-lg shadow-md">
            <CardHeader className="p-0 mb-6">
                <CardTitle className="font-bold text-lg">Local Leaderboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
                {leaderboard.map(player => (
                    <div key={player.rank} className={`flex items-center p-2 rounded-lg ${player.color}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold bg-gray-100 text-gray-800`}>
                            {player.rank}
                        </div>
                        <div className="flex-1">
                            <p className="font-medium">{player.name}</p>
                            <p className="text-xs text-gray-500">{player.points} points</p>
                        </div>
                        <div className="text-accent font-bold">{player.percentile}</div>
                    </div>
                ))}
            </CardContent>
            <Button variant="link" className="mt-4 text-accent font-medium text-sm flex items-center p-0 h-auto">
                View full leaderboard <ChevronRight className="ml-1" />
            </Button>
        </Card>

        <Card className="p-6 rounded-lg shadow-md">
            <CardHeader className="p-0 mb-6">
                <CardTitle className="font-bold text-lg">Current Challenges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
                <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">Plastic-Free Week</h4>
                        <span className="bg-accent text-primary px-2 py-1 rounded-full text-xs">Active</span>
                    </div>
                    <p className="text-sm mb-3">Avoid single-use plastics for 7 days</p>
                    <div className="flex justify-between items-center">
                        <div className="text-xs">342 participating</div>
                        <Button size="sm" className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-3 py-1 rounded-md text-sm">
                            Join
                        </Button>
                    </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">Scan & Save Sprint</h4>
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">Starts soon</span>
                    </div>
                    <p className="text-sm mb-3">Scan 20 sustainable products in 5 days</p>
                    <div className="flex justify-between items-center">
                        <div className="text-xs">Starts in 2 days</div>
                        <Button size="sm" variant="secondary" className="px-3 py-1 rounded-md text-sm" disabled>
                            Coming Soon
                        </Button>
                    </div>
                </div>
            </CardContent>
            <Button variant="link" className="mt-4 text-accent font-medium text-sm flex items-center p-0 h-auto">
                Browse all challenges <ChevronRight className="ml-1" />
            </Button>
        </Card>
      </div>
    </section>
  );
}

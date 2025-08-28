import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Download } from 'lucide-react';
import { Label } from '@/components/ui/label';

export function DataPrivacy() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-headline font-bold mb-6 text-primary">Data & Privacy</h2>
      <Card className="p-6 rounded-lg shadow-md">
        <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold text-lg mb-4">Export Data</h3>
                    <p className="text-sm mb-4">Download your complete impact report to share or for your records.</p>
                    <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-4 py-2 rounded-md flex items-center">
                        <Download className="mr-2" /> Export Impact Report
                    </Button>
                </div>
                
                <div>
                    <h3 className="font-bold text-lg mb-4">Privacy Settings</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="community-profile">Show my profile in community</Label>
                            <Switch id="community-profile" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <Label htmlFor="anon-research">Include in anonymous research</Label>
                            <Switch id="anon-research" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <Label htmlFor="promo-offers">Receive promotional offers</Label>
                            <Switch id="promo-offers" />
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
      </Card>
    </section>
  );
}

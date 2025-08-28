import {
  ClipboardList,
  Warehouse,
  LineChart,
  Users,
  Plug,
  Handshake,
  BarChart,
  ShoppingCart,
  Store,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ValuePropositions() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8">
          <div className="flex items-start mb-6">
            <div className="bg-primary text-white p-4 rounded-full mr-4">
              <ClipboardList className="text-2xl h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold mb-2">
                Inventory Sustainability Scoring
              </h3>
              <p className="text-gray-600">
                Analyze product catalogs for carbon footprint, packaging impact,
                and ethical sourcing
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">
              Your top 10 most impactful products
            </h4>
            <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Product impact visualization</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-green-600">
            <Plug className="mr-2 h-4 w-4" /> API integration with POS or stock
            systems
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex items-start mb-6">
            <div className="bg-primary text-white p-4 rounded-full mr-4">
              <Warehouse className="text-2xl h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold mb-2">
                Procurement Intelligence
              </h3>
              <p className="text-gray-600">
                Compare suppliers based on sustainability metrics and align
                with ESG targets
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-xs font-bold text-red-600">
                Deforestation Risk
              </p>
              <p className="text-sm">3 suppliers flagged</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs font-bold text-blue-600">
                Vision 2030 Aligned
              </p>
              <p className="text-sm">68% of purchases</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-xs font-bold text-yellow-600">
                Overfishing Risk
              </p>
              <p className="text-sm">2 suppliers flagged</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-xs font-bold text-green-600">
                Ethical Certified
              </p>
              <p className="text-sm">42% of purchases</p>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex items-start mb-6">
            <div className="bg-primary text-white p-4 rounded-full mr-4">
              <LineChart className="text-2xl h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold mb-2">
                Waste & Emissions Forecasting
              </h3>
              <p className="text-gray-600">
                Predict waste volumes and identify reduction opportunities
              </p>
            </div>
          </div>
          <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <p className="text-gray-400">Forecast visualization</p>
          </div>
          <div className="flex items-center text-sm text-green-600">
            <Handshake className="mr-2 h-4 w-4" /> Integrated with waste
            management partners
          </div>
        </Card>

        <Card className="p-8">
          <div className="flex items-start mb-6">
            <div className="bg-primary text-white p-4 rounded-full mr-4">
              <Users className="text-2xl h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold mb-2">
                Consumer Engagement Tools
              </h3>
              <p className="text-gray-600">
                Show sustainability scores and encourage eco-friendly choices
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-gray-200 p-3 rounded-lg text-center">
              <Store className="text-accent h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">In-store kiosks</p>
            </div>
            <div className="bg-white border border-gray-200 p-3 rounded-lg text-center">
              <ShoppingCart className="text-accent h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">E-commerce plugin</p>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm flex items-center">
              <BarChart className="text-accent mr-2 h-4 w-4" /> Track collective
              impact across all locations
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

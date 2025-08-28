import { Card } from '@/components/ui/card';

export function PartnerSpotlight() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-headline font-bold mb-6 text-primary">
        Trusted by Leading Institutions
      </h2>
      <Card className="p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="flex items-center justify-center">
            <div className="h-16 bg-gray-100 w-full rounded-lg flex items-center justify-center text-gray-400 font-medium">
              Naivas
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-16 bg-gray-100 w-full rounded-lg flex items-center justify-center text-gray-400 font-medium">
              Chandaria
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-16 bg-gray-100 w-full rounded-lg flex items-center justify-center text-gray-400 font-medium">
              GreenThing
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-16 bg-gray-100 w-full rounded-lg flex items-center justify-center text-gray-400 font-medium">
              UNEP
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start">
            <div className="text-4xl text-primary mr-4">&ldquo;</div>
            <div>
              <p className="text-lg italic mb-4">
                EcoWise helped us align our inventory with our sustainability
                goals and engage customers meaningfully.
              </p>
              <p className="font-bold">
                - Procurement Director, Naivas Supermarkets
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}

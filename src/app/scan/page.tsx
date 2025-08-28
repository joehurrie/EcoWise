import { ProductSearchForm } from './product-search-form';

export default function ScanPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-headline tracking-tight">
          Analyze a Product's Sustainability
        </h1>
        <p className="text-lg text-muted-foreground">
          Upload a picture of a product or enter its name to generate an AI-powered sustainability report. Discover its environmental impact, from sourcing to packaging.
        </p>
      </div>
      <div className="mt-12">
        <ProductSearchForm />
      </div>
    </div>
  );
}

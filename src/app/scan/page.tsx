import { ProductSearchForm } from './product-search-form';

export default function ScanPage() {
  return (
    <div className="container mx-auto max-w-3xl py-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-headline tracking-tight">
          Analyze Product Sustainability
        </h1>
        <p className="text-lg text-muted-foreground">
          Enter a product name to generate an AI-powered sustainability report. Discover its environmental impact, from sourcing to packaging.
        </p>
      </div>
      <div className="mt-12">
        <ProductSearchForm />
      </div>
    </div>
  );
}

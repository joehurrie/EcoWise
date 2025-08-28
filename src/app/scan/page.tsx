import { ProductSearchForm } from './product-search-form';

export default function ScanPage() {
  return (
    <div className="-m-8">
      <div className="bg-gradient-to-r from-primary to-[#1E4535] p-8 text-primary-foreground">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-headline tracking-tight">
            Analyze a Product's Sustainability
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-4">
            Upload a picture of a product or enter its name to generate an
            AI-powered sustainability report. Discover its environmental impact,
            from sourcing to packaging.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl py-12">
        <ProductSearchForm />
      </div>
    </div>
  );
}

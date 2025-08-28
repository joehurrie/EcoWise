'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { UploadCloud } from 'lucide-react';

const attributes = [
  'Plastic-Free',
  'Fair Trade',
  'Organic',
  'Vegan',
  'Carbon Neutral',
  'Recycled Materials',
];

export function SubmitProduct() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">
          Submit a Product for Review
        </CardTitle>
        <CardDescription>
          Help grow our database of sustainable products by submitting new items you've found.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="product-name">Product Name</Label>
              <Input id="product-name" placeholder="e.g. Bamboo Toothbrush" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Input id="brand" placeholder="e.g. EcoSmile" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="barcode">Barcode (optional)</Label>
            <Input id="barcode" placeholder="Scan or enter barcode number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Why is this product sustainable?</Label>
            <Textarea id="description" rows={3} placeholder="Describe its eco-friendly features, like materials, packaging, or certifications..." />
          </div>

          <div className="space-y-2">
            <Label>Upload Images</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 bg-background">
              <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, or WEBP up to 5MB</p>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-md font-medium text-foreground">
              Sustainability Attributes
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {attributes.map((attr) => (
                <Label key={attr} className="flex items-center gap-2 font-normal">
                  <Checkbox id={`attr-${attr}`} />
                  <span>{attr}</span>
                </Label>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              Submit for Review
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

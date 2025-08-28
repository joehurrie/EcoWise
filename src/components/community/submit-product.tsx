'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

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
    <section>
      <div className="bg-white rounded-xl shadow-sm p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Submit a Product for Review
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="product-name" className="mb-1">
                Product Name
              </Label>
              <Input id="product-name" />
            </div>
            <div>
              <Label htmlFor="brand" className="mb-1">
                Brand
              </Label>
              <Input id="brand" />
            </div>
          </div>

          <div className="mb-4">
            <Label htmlFor="barcode" className="mb-1">
              Barcode (optional)
            </Label>
            <Input id="barcode" />
          </div>

          <div className="mb-4">
            <Label htmlFor="description" className="mb-1">
              Why is this product sustainable?
            </Label>
            <Textarea id="description" rows={4} />
          </div>

          <div className="mb-6">
            <Label className="mb-1">Upload Images</Label>
            <div className="mt-1 flex items-center">
              <label
                htmlFor="file-upload"
                className="cursor-pointer rounded-md bg-white font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none"
              >
                <span>Upload</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  multiple
                />
              </label>
              <p className="pl-1 text-gray-500">or drag and drop</p>
            </div>
            <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 5MB</p>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Sustainability Attributes
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {attributes.map((attr) => (
                <Label key={attr} className="inline-flex items-center">
                  <Checkbox className="rounded text-emerald-600 focus:ring-emerald-500" />
                  <span className="ml-2 text-sm text-gray-700">{attr}</span>
                </Label>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">
                Your submission will be reviewed by the community and EcoWise
                team
              </p>
            </div>
            <Button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Submit for Review
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

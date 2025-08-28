'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateSustainabilityReport, type GenerateSustainabilityReportOutput } from '@/ai/flows/generate-sustainability-report';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, UploadCloud } from 'lucide-react';
import { Logo } from '@/components/icons';
import Image from 'next/image';
import { SustainabilityReportCard } from '@/components/scan/sustainability-report-card';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  productName: z.string().min(2, 'Product name must be at least 2 characters.'),
  productImage: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ProductSearchForm() {
  const [report, setReport] = useState<GenerateSustainabilityReportOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: '',
      productImage: '',
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setPreviewImage(dataUrl);
        form.setValue('productImage', dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setReport(null);

    try {
      const result = await generateSustainabilityReport(values);
      setReport(result);
    } catch (error) {
      console.error('Error generating report:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate sustainability report. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Analyze Product</CardTitle>
          <CardDescription>Upload an image or enter a product name.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label>Product Image (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 bg-background relative">
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    {previewImage ? (
                      <Image src={previewImage} alt="Product preview" width={150} height={150} className="mx-auto rounded-md" />
                    ) : (
                      <>
                        <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-muted-foreground">
                          <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, or WEBP up to 5MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Organic Cotton T-Shirt" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Report...
                  </>
                ) : (
                  'Generate Report'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
          <Logo className="w-12 h-12 text-primary animate-pulse" />
          <p className="text-muted-foreground">Analyzing sustainability data for {form.getValues('productName')}...</p>
          <p className="text-sm text-muted-foreground/80">This may take a moment.</p>
        </div>
      )}

      {report && <SustainabilityReportCard report={report} />}
    </div>
  );
}

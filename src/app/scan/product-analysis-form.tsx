
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  generateSustainabilityReport,
  type GenerateSustainabilityReportOutput,
} from '@/ai/flows/generate-sustainability-report';
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
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, UploadCloud, TextSearch, Image as ImageIcon } from 'lucide-react';
import { EcoWiseLogo } from '@/components/icons';
import NextImage from 'next/image';
import { SustainabilityReportCard } from '@/components/scan/sustainability-report-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AlternativesSection } from '@/components/products/alternatives-section';

const formSchema = z.object({
  productName: z.string().optional(),
  productImage: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ProductAnalysisForm() {
  const [report, setReport] =
    useState<GenerateSustainabilityReportOutput | null>(null);
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
        form.setValue('productName', form.getValues('productName') || 'Product from image');
        onSubmit(form.getValues());
      };
      reader.readAsDataURL(file);
    }
  };

  async function onSubmit(values: FormValues) {
    if (!values.productName && !values.productImage) {
      toast({
        variant: 'destructive',
        title: 'Missing Input',
        description: 'Please enter a product name or upload an image.',
      });
      return;
    }
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
        description:
          'Failed to generate sustainability report. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="w-full">
                <label htmlFor="file-upload" className="cursor-pointer">
              <AccordionTrigger className="p-6 w-full text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <ImageIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">Upload an Image</h3>
                    <p className="text-sm text-muted-foreground">
                      Analyze a photo of the product.
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              </label>
              <AccordionContent>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 bg-background relative">
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      {previewImage ? (
                        <NextImage
                          src={previewImage}
                          alt="Product preview"
                          width={150}
                          height={150}
                          className="mx-auto rounded-md"
                        />
                      ) : (
                        <>
                          <UploadCloud className="mx-auto h-10 w-10 text-gray-400" />
                          <p className="mt-2 text-sm text-muted-foreground">
                            <span className="font-semibold text-primary">
                              Click to upload
                            </span>
                          </p>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, up to 5MB
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </CardContent>
              </AccordionContent>
            </Card>

            <Card className="w-full">
              <AccordionTrigger className="p-6 w-full text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <TextSearch className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">Search by Name</h3>
                    <p className="text-sm text-muted-foreground">
                      Enter the product name to analyze.
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <CardContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="productName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only">
                              Product Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Organic Cotton T-Shirt"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          'Analyze Product Name'
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </AccordionContent>
            </Card>
          </div>
        </AccordionItem>
      </Accordion>

      {isLoading && (
        <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
          <EcoWiseLogo className="w-12 h-12 text-primary animate-pulse" />
          <p className="text-muted-foreground">
            Analyzing sustainability data for {form.getValues('productName')}
            ...
          </p>
          <p className="text-sm text-muted-foreground/80">
            This may take a moment.
          </p>
        </div>
      )}

      {report && (
        <div className="space-y-8">
          <SustainabilityReportCard report={report} />
          <AlternativesSection />
        </div>
      )}
    </div>
  );
}

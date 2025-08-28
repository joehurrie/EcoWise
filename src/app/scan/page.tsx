
'use client';
import { useState, useRef, useEffect } from 'react';
import { Barcode, Image as ImageIcon, TextSearch, CameraOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ProductAnalysisForm } from './product-analysis-form';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function ScanPage() {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const getCameraPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setHasCameraPermission(false);
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setHasCameraPermission(true);
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description:
            'Please enable camera permissions in your browser settings.',
        });
      }
    };

    getCameraPermission();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [toast]);

  return (
    <div className="-m-8">
      <div className="bg-primary p-8 text-primary-foreground">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-headline tracking-tight">
            Analyze a Product's Sustainability
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-4">
            Scan a product's barcode for an instant analysis, or use one of the alternative methods below.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl py-12">
        <Card className="overflow-hidden">
          <div className="relative aspect-[4/3] bg-background flex items-center justify-center">
            {hasCameraPermission === null && (
                <div className="text-muted-foreground">Initializing Camera...</div>
            )}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
            />
            {hasCameraPermission === true && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 pointer-events-none">
                <div className="w-3/4 max-w-md h-28 border-4 border-white/80 rounded-lg" />
                <Barcode className="w-16 h-16 text-white/80 mt-4" />
                <p className="text-white font-medium mt-2">Position barcode inside the frame</p>
              </div>
            )}
             {hasCameraPermission === false && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
                    <CameraOff className="w-16 h-16 text-muted-foreground" />
                    <p className="mt-4 text-muted-foreground">Camera access is required for barcode scanning.</p>
                </div>
            )}
          </div>
          <CardContent className="p-6 bg-muted/40">
            <Button size="lg" className="w-full" disabled={!hasCameraPermission}>
              <Barcode className="mr-2" />
              Scan Barcode
            </Button>
          </CardContent>
        </Card>

        {hasCameraPermission === false && (
            <Alert variant="destructive" className="mt-6">
                <AlertTitle>Camera Access Denied</AlertTitle>
                <AlertDescription>
                Please allow camera access in your browser settings to use the barcode scanning feature. You can still analyze products by uploading an image or entering a name.
                </AlertDescription>
            </Alert>
        )}

        <div className="mt-8">
          <ProductAnalysisForm />
        </div>
      </div>
    </div>
  );
}

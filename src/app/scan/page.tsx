
'use client';
import { useState, useRef, useEffect } from 'react';
import { Barcode, Camera, CameraOff, Loader2, Aperture } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ProductAnalysisForm } from './product-analysis-form';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import { EcoChatbot } from '@/components/scan/eco-chatbot';

export default function ScanPage() {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(
    null
  );
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const getCameraPermission = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      toast({
        variant: 'destructive',
        title: 'Camera Not Supported',
        description: 'Your browser does not support camera access.',
      });
      setHasCameraPermission(false);
      return;
    }

    setIsActivating(true);
    setCapturedImage(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setHasCameraPermission(true);
      setIsCameraActive(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasCameraPermission(false);
      toast({
        variant: 'destructive',
        title: 'Camera Access Denied',
        description: 'Please enable camera permissions in your browser settings.',
      });
    } finally {
        setIsActivating(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  }

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      setIsProcessing(true);
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setCapturedImage(dataUrl);
        stopCamera();
      } else {
        toast({
            variant: 'destructive',
            title: 'Capture Failed',
            description: 'Could not get image from camera.',
        });
        setIsProcessing(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <>
      <div className="-m-8">
        <canvas ref={canvasRef} className="hidden" />
        <div className="bg-primary p-8 text-primary-foreground">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-4xl font-headline tracking-tight">
              Analyze a Product's Sustainability
            </h1>
            <p className="text-lg text-primary-foreground/80 mt-4">
              Upload a product's photo for an instant analysis, or use one of the
              alternative methods below.
            </p>
          </div>
        </div>
        <div className="container mx-auto max-w-3xl py-12">
          <Card className="overflow-hidden">
            <div
              className={cn(
                'relative aspect-[4/3] flex items-center justify-center',
                isCameraActive ? 'bg-black' : 'bg-muted'
              )}
            >
              {!isCameraActive && !capturedImage && (
                <div className="text-center p-8">
                  <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Take A Photo</h3>
                  <p className="text-muted-foreground mb-6">
                    Position the product's photo or barcode in front of your camera for an
                    instant sustainability report.
                  </p>
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={getCameraPermission}
                    disabled={isActivating}
                  >
                    {isActivating ? (
                      <Loader2 className="mr-2 animate-spin" />
                    ) : (
                      <Barcode className="mr-2" />
                    )}
                    {isActivating ? 'Starting Camera...' : 'Scan'}
                  </Button>
                </div>
              )}
               {capturedImage && !isProcessing && (
                <img src={capturedImage} alt="Captured product" className="w-full h-full object-cover" />
              )}

              <video
                ref={videoRef}
                className={cn(
                  'w-full h-full object-cover',
                  !isCameraActive && 'hidden'
                )}
                autoPlay
                muted
                playsInline
              />

              {isCameraActive && hasCameraPermission && (
                <div className="absolute inset-0 flex flex-col items-center justify-between bg-black/40 p-4">
                  <div className="w-3/4 max-w-md h-28 border-4 border-white/80 rounded-lg pointer-events-none flex-shrink-0" />
                  <p className="text-white font-medium text-center pointer-events-none flex-1 mt-4">
                    Position image inside the frame
                  </p>
                  <Button
                      size="lg"
                      className="bg-white/80 text-black hover:bg-white"
                      onClick={handleCapture}
                      disabled={isProcessing}
                  >
                      {isProcessing ? (
                          <>
                              <Loader2 className="mr-2 animate-spin" />
                              Analyzing...
                          </>
                      ) : (
                          <>
                              <Aperture className="mr-2" />
                              Submit
                          </>
                      )}
                  </Button>
                </div>
              )}
              
              {hasCameraPermission === false && !isCameraActive && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
                      <CameraOff className="w-16 h-16 text-muted-foreground" />
                      <p className="mt-4 text-muted-foreground">Camera access is required for barcode scanning.</p>
                  </div>
              )}
            </div>
          </Card>

          {hasCameraPermission === false && (
              <Alert variant="destructive" className="mt-6">
                  <AlertTitle>Camera Access Denied</AlertTitle>
                  <AlertDescription>
                  You have denied camera access. To use the barcode scanner, please enable camera permissions in your browser settings and refresh the page.
                  </AlertDescription>
              </Alert>
          )}


          <div className="mt-8">
            <ProductAnalysisForm capturedImage={capturedImage} onAnalysisComplete={() => setIsProcessing(false)} />
          </div>
        </div>
      </div>
      <EcoChatbot />
    </>
  );
}

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { IconAppStore, IconGooglePlay } from '@/components/icons';

export function Cta() {
  return (
    <section className="py-12 px-6 bg-[#A6E22E]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-[#15332A]">
              Download EcoWise Today
            </h2>
            <p className="text-lg mb-6 text-[#333333]">Available for free on iOS and Android devices.</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="bg-[#15332A] hover:bg-[#1E4538] text-white font-medium py-3 px-6 rounded-md transition flex items-center justify-center">
                <IconAppStore className="h-6 w-6 mr-2" />
                App Store
              </Button>
              <Button className="bg-[#15332A] hover:bg-[#1E4538] text-white font-medium py-3 px-6 rounded-md transition flex items-center justify-center">
                <IconGooglePlay className="h-6 w-6 mr-2" />
                Google Play
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-48">
              <Image
                src="https://i.pinimg.com/1200x/89/7f/a9/897fa96f134afbad3414887e68c31a66.jpg"
                alt="Phone with app"
                width={200}
                height={400}
                className="w-full h-auto rounded-xl shadow-xl"
                data-ai-hint="phone app"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowsHorizontal } from '@/components/icons';

export function ProductImageSlider() {
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainer = useRef<HTMLDivElement>(null);
  const beforeImage = useRef<HTMLImageElement>(null);
  const sliderHandle = useRef<HTMLDivElement>(null);

  const onDrag = (clientX: number) => {
    if (!isDragging || !sliderContainer.current || !beforeImage.current || !sliderHandle.current) return;

    const containerRect = sliderContainer.current.getBoundingClientRect();
    let xPosition = clientX - containerRect.left;

    xPosition = Math.max(0, Math.min(xPosition, containerRect.width));
    const percentage = (xPosition / containerRect.width) * 100;

    sliderHandle.current.style.left = `${percentage}%`;
    if (beforeImage.current) {
        beforeImage.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }
  };
  
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => onDrag(e.clientX);
    const handleTouchEnd = () => setIsDragging(false);
    const handleTouchMove = (e: TouchEvent) => onDrag(e.touches[0].clientX);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div ref={sliderContainer} className="slider-container mb-4">
      <Image
        ref={beforeImage}
        src="https://picsum.photos/800/800?random=1"
        alt="Eco-friendly shampoo"
        className="slider-image"
        width={800}
        height={800}
        style={{ clipPath: 'inset(0 50% 0 0)'}}
      />
      <Image
        src="https://picsum.photos/800/800?random=2"
        alt="Traditional shampoo"
        className="slider-image"
        width={800}
        height={800}
      />
      <div 
        ref={sliderHandle}
        className="slider-handle"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        style={{ left: '50%'}}
      >
        <ArrowsHorizontal className="text-gray-600 w-5 h-5" />
      </div>
    </div>
  );
}

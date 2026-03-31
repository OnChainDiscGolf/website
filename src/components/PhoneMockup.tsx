"use client";

import Image from "next/image";

interface PhoneMockupProps {
  src?: string;
  alt?: string;
  placeholder?: string;
  placeholderIcon?: React.ReactNode;
  className?: string;
}

export default function PhoneMockup({
  src,
  alt = "App screenshot",
  placeholder,
  placeholderIcon,
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: 280, height: 560 }}>
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[3rem] border-4 border-white/10 bg-brand-surface/80 shadow-2xl shadow-brand-primary/10 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-brand-dark rounded-b-2xl z-10" />

        {/* Screen content */}
        <div className="absolute inset-2 top-3 rounded-[2.25rem] overflow-hidden bg-brand-dark">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="280px"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
              {placeholderIcon && (
                <div className="text-brand-primary/40">{placeholderIcon}</div>
              )}
              {placeholder && (
                <p className="text-sm text-white/30 text-center font-medium">
                  {placeholder}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

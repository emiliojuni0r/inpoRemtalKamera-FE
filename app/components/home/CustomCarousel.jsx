// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Image from "next/image";

// export default function CustomCarousel() {
//     return (
//         <div className="w-full max-w-5xl mx-auto">
//             <Carousel opts={{ align: "center", loop: true }}>
//                 <CarouselContent>
//                     <CarouselItem className="flex justify-center -ml-4">
//                         <Image className="" src="/example/example_carousel.jpg" width={800} height={400} alt="example_carousel" />
//                     </CarouselItem>
//                     <CarouselItem className="flex justify-center">
//                         <Image src="/example/example_carousel.jpg" width={800} height={400} alt="example_carousel" />
//                     </CarouselItem>
//                     <CarouselItem className="flex justify-center">
//                         <Image src="/example/example_carousel.jpg" width={800} height={400} alt="example_carousel" />
//                     </CarouselItem>
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     )
// }

"use client"; // Diperlukan untuk komponen interaktif dan plugin

import * as React from "react";
// 1. Impor plugin Autoplay
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Pastikan path ini benar

// 'next/image' tidak dapat di-resolve di lingkungan preview ini.
// Saya menggantinya dengan tag <img> standar agar kode bisa di-preview.
// Silakan ganti kembali ke 'import Image from "next/image";'
// dan gunakan komponen <Image /> di proyek Next.js Anda.
// import Image from "next/image";

// Saya buat array untuk data gambar agar lebih rapi
// Ganti path ini dengan path gambar Anda yang sebenarnya
const carouselImages = [
  { src: "/example/example_carousel.jpg", alt: "Carousel 1" },
  { src: "/example/example_carousel.jpg", alt: "Carousel 2" },
  { src: "/example/example_carousel.jpg", alt: "Carousel 3" },
];

export default function CustomCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <Carousel
        // 2. Tambahkan prop 'plugins' dan konfigurasikan Autoplay
        plugins={[
          Autoplay({
            delay: 3000, // Ganti durasi (dalam milidetik) sesuai kebutuhan
            stopOnInteraction: true, // Berhenti autoplay saat interaksi manual
            stopOnMouseEnter: true, // Berhenti autoplay saat mouse di atas carousel
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        {/* Catatan: Saya pindahkan '-ml-4' ke CarouselContent 
          sesuai standar shadcn/embla
        */}
        <CarouselContent className="-ml-4">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="pl-4 basis-full flex justify-center">
              {/* Ganti tag <img> di bawah ini dengan komponen <Image /> 
                dari 'next/image' saat digunakan di proyek Anda.
              */}
              <img
                className="rounded-lg shadow-lg object-cover" // Tambah sedikit style
                // src={`https://placehold.co/800x400/444444/FFFFFF?text=Slide+${index + 1}`}
                src={image.src} // <-- Gunakan ini untuk path asli Anda
                width={800}
                height={400}
                alt={image.alt}
                style={{ height: '400px', width: '800px', objectFit: 'cover' }} // Tambahkan inline style untuk memastikan dimensi
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Sembunyikan navigasi di layar kecil agar lebih bersih */}
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
    </div>
  );
}


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export default function CustomCarousel() {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <Carousel opts={{ align: "center", loop: true }}>
                <CarouselContent>
                    <CarouselItem className="flex justify-center -ml-4">
                        <Image className="" src="/example/example_carousel.jpg" width={800} height={400} alt="example_carousel" />
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <Image src="/example/example_carousel.jpg" width={800} height={400} alt="example_carousel" />
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <Image src="/example/example_carousel.jpg" width={800} height={400} alt="example_carousel" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
import ZoomImage from "@/components/zoom-image";
import Circles from "@/public/images/circles.png";
import DarkSun from "@/public/images/dark-sun.png";
import Eclipse from "@/public/images/eclipse.png";
import Fold from "@/public/images/fold.png";
import Giant from "@/public/images/giant.png";
import Wave from "@/public/images/wave.png";
import { StaticImageData } from "next/image";

const images: { src: StaticImageData; alt: string; aspectRatio: number }[] = [
  { src: Circles, alt: "Circles", aspectRatio: 16 / 9 },
  { src: Eclipse, alt: "Eclipse", aspectRatio: 16 / 9 },
  { src: Giant, alt: "Giant", aspectRatio: 16 / 9 },
  { src: DarkSun, alt: "Dark Sun", aspectRatio: 16 / 9 },
  { src: Fold, alt: "Fold", aspectRatio: 1 },
  { src: Wave, alt: "Wave", aspectRatio: 1 },
];

export default function ArtPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Art</h1>
      <p className="mt-6">
        Feel free to use these images however you like. No permission or credit
        needed.
      </p>
      <div className="flex flex-wrap gap-4 mt-4">
        {images.map((image) => (
          <ZoomImage
            key={image.src.src}
            src={image.src}
            alt={image.alt}
            unoptimized
            placeholder="blur"
            aspectRatio={image.aspectRatio}
            className="h-34.5 w-auto"
          />
        ))}
      </div>
    </div>
  );
}

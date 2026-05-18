import Image from "next/image";

export function StayGallery({ slug }: { slug: string }) {
  const shots = ["main", "angle", "setup", "detail"] as const;

  return (
    <div className="grid gap-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_16px_30px_rgba(15,28,27,0.15)]">
        <Image
          src={`/images/stays/${slug}-main.svg`}
          alt="Главное фото объекта"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 65vw"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {shots.slice(1).map((shot) => (
          <div key={shot} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={`/images/stays/${slug}-${shot}.svg`}
              alt={`Фото объекта: ${shot}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 33vw, 20vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

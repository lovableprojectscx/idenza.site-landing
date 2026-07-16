import logoTinta from "@/assets/brand/cropped_logo_tinta_amber.png";
import logoHueso from "@/assets/brand/cropped_logo_hueso_amber.png";

export function Logo({ small = false, light = false }: { small?: boolean; light?: boolean }) {
  const logoSrc = light ? logoHueso : logoTinta;
  return (
    <img
      src={logoSrc}
      alt="idenza"
      className={`${small ? "h-6" : "h-7 sm:h-8"} w-auto object-contain block`}
    />
  );
}

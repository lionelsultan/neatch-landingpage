import Image from "next/image";

const logoVariants = {
  lockup: {
    src: "/neatch-logo.png",
    width: 950,
    height: 650,
  },
  mark: {
    src: "/neatch-logo-mark.png",
    width: 420,
    height: 380,
  },
  wordmark: {
    src: "/neatch-logo-wordmark.png",
    width: 850,
    height: 220,
  },
} as const;

type BrandLogoProps = {
  className?: string;
  variant?: keyof typeof logoVariants;
  priority?: boolean;
};

export default function BrandLogo({
  className = "",
  variant = "wordmark",
  priority = false,
}: BrandLogoProps) {
  const logo = logoVariants[variant];

  return (
    <Image
      data-brand-logo="neatch"
      data-logo-variant={variant}
      src={logo.src}
      alt="Neatch"
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={`block object-contain ${className}`}
    />
  );
}

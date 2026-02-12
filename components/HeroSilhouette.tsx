interface HeroSilhouetteProps {
  variant: "residential" | "commercial";
}

export default function HeroSilhouette({ variant }: HeroSilhouetteProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <svg
        viewBox="0 0 1440 200"
        fill="currentColor"
        className="w-full h-auto text-white opacity-[0.03]"
        preserveAspectRatio="none"
      >
        {variant === "residential" ? (
          /* Residential skyline: houses, smaller buildings, trees */
          <path d="M0 200V160h60v-20h30v-30h20v30h30v20h40v-40l20-20 20 20v40h50v-30h20v-10h10v10h20v30h60v-50h30v-20h20v20h30v50h80v-35l15-15 15 15v35h40v-25h20v-15h10v15h20v25h50v-40h30v-20h20v20h30v40h60v-30l20-20 20 20v30h40v-45h30v-25h20v25h30v45h60v-35h20v-15h10v15h20v35h80v-40l15-15 15 15v40h50v-30h20v-10h10v10h20v30h110V200z" />
        ) : (
          /* Commercial skyline: office towers, skyscrapers */
          <path d="M0 200V140h40v-60h25v-30h15v30h25v60h30v-80h20v-40h15v40h20v80h40v-100h30v-50h20v50h30v100h25v-70h15v-30h10v30h15v70h50v-120h25v-40h20v40h25v120h30v-90h20v-50h15v50h20v90h40v-110h30v-60h20v60h30v110h25v-80h15v-30h10v30h15v80h50v-130h25v-50h20v50h25v130h30v-70h20v-40h15v40h20v70h40v-100h30v-60h20v60h30v100h25v-85h15v-35h10v35h15v85h60V200z" />
        )}
      </svg>
    </div>
  );
}

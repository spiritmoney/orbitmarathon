export function LiveTrackerMap() {
  return (
    <div className="bg-deep-blue aspect-video relative overflow-hidden flex items-center justify-center">
      <div
        className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-br from-forest to-volt opacity-80"
        style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />
      <p className="relative z-10 font-display text-2xl uppercase text-white">
        Live course map
      </p>
      <span className="sr-only">
        Interactive map showing athlete positions along the Lagos coastal course
      </span>
    </div>
  );
}

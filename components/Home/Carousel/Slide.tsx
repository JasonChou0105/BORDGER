function Slide({ s, i }) {
  return (
    <div className="min-w-full rounded-lg overflow-hidden h-full relative bg-black">
      <img
        alt={"slide-" + i}
        className="absolute inset-0 w-full h-full object-cover"
        src={s}
      />
    </div>
  );
}

export default Slide;

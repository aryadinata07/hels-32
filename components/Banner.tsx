function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Hels Universe Blog</h1>
        <h2 className="mt-5 md:mt-5">
            Welcome to {" "}
            <span className="underline decoration-4 decoration-[#F7AB0A]">
                Hels Universe
            </span>{" "}
            designed with professional ui/ux
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | The latest in technology | the weekly debugging
        nightmares
      </p>
    </div>
  );
}

export default Banner;

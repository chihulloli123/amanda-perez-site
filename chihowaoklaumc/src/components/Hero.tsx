export default function Hero() {
  return (
    <section className="bg-gray-100 py-32 text-center">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-6xl font-bold text-[#6F408A]">
          Chihowa Okla United Methodist Church
        </h1>

        <p className="mt-6 text-3xl text-gray-700">
          Durant, Oklahoma
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
          Love God. Love People. Serve the Community.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-lg bg-[#6F408A] px-6 py-3 font-semibold text-white hover:opacity-90">
            Plan Your Visit
          </button>

          <button className="rounded-lg border border-[#6F408A] px-6 py-3 font-semibold text-[#6F408A]">
            View Events
          </button>
        </div>
      </div>
    </section>
  );
}
import { homeContent } from "../content/home";
import { siteContent } from "../content/site";
export default function Hero() {
  return (
    <section className="bg-gray-100 py-32 text-center">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-6xl font-bold text-[#6F408A]">
          {homeContent.hero.title}
        </h1>

        <p className="mt-6 text-3xl text-gray-700">
          Durant, Oklahoma
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
          {homeContent.hero.subtitle}
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          {homeContent.hero.description}
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-lg bg-[#6F408A] px-6 py-3 font-semibold text-white hover:opacity-90">
            {homeContent.hero.primaryButton}
          </button>

          <button className="rounded-lg border border-[#6F408A] px-6 py-3 font-semibold text-[#6F408A]">
            {homeContent.hero.secondaryButton}

          </button>
<p className="mt-6 text-3xl text-gray-700">
  {siteContent.city}
</p>

        </div>
      </div>
    </section>
  );
}
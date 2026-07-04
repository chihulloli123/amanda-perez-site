import { church } from "../data/church";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-5xl text-center">

        <h1 className="mb-6 text-6xl font-bold text-gray-900">
          {church.name}
        </h1>

        <p className="mb-3 text-2xl text-gray-700">
          {church.address}
        </p>

        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          {church.mission}
        </p>

      </div>
    </section>
  );
}
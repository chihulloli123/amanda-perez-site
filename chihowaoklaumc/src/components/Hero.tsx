import { church } from "../data/church";

export default function Hero() {
  return (
    <section>
      <h1>{church.name}</h1>

      <p>
        {church.city}, {church.state}
      </p>

      <p>{church.mission}</p>
    </section>
  );
}
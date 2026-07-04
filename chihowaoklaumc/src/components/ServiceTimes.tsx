import { serviceTimes } from "../data/serviceTimes";

export default function ServiceTimes() {
  return (
    <section>
      <h2>Service Times</h2>

      {serviceTimes.map((service) => (
        <div key={service.id}>
          <h3>{service.name}</h3>
          <p>{service.day}</p>
          <p>{service.time}</p>
        </div>
      ))}
    </section>
  );
}
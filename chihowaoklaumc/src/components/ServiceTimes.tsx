import { serviceTimes } from "../data/serviceTimes";
import Card from "./ui/Card";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

export default function ServiceTimes() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionTitle
          title="Service Times"
          subtitle="Join us for worship and fellowship."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {serviceTimes.map((service) => (
            <Card key={service.id}>
              <h3 className="mb-3 text-2xl font-bold text-[#6F408A]">
                {service.name}
              </h3>

              <p className="text-gray-600">{service.day}</p>

              <p className="mt-2 text-xl font-semibold">
                {service.time}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
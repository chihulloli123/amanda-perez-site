import { events } from "../data/events";
import Card from "./ui/Card";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

export default function EventsList() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Upcoming Events"
          subtitle="Come worship and grow with us."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id}>
              <h3 className="text-2xl font-bold text-[#6F408A]">
                {event.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {event.date}
              </p>

              <p>{event.time}</p>

              <p>{event.location}</p>

              <p className="mt-4 text-gray-600">
                {event.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
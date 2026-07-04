import EventsList from "../components/EventsList";

export default function EventsPage() {
  return (
    <>
      <section className="bg-church-purple text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Events</h1>
        <p className="mt-4 text-xl">
          Join us for worship, fellowship, and community events.
        </p>
      </section>

      <EventsList />
    </>
  );
}
import PageHero from "../components/PageHero";
import EventsList from "../components/EventsList";

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="Join us for worship, fellowship, and special events throughout the year."
      />

      <EventsList />
    </>
  );
}
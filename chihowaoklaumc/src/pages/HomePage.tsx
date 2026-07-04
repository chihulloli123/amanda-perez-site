import Hero from "../components/Hero";
import Mission from "../components/Mission";
import ServiceTimes from "../components/ServiceTimes";
import EventsList from "../components/EventsList";
import PastorMessage from "../components/PastorMessage";
import CalendarPreview from "../components/CalendarPreview";
import Map from "../components/Map";
import MinistriesList from "../components/MinistriesList";

function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <ServiceTimes />
      <EventsList />
      <MinistriesList />
      <PastorMessage />
      <CalendarPreview />
      <Map />
    </>
  );
}

export default HomePage;
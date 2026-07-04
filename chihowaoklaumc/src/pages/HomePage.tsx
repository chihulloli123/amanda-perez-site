import Hero from "../components/Hero";
import Mission from "../components/Mission";
import ServiceTimes from "../components/ServiceTimes";
import EventsList from "../components/EventsList";
import PastorMessage from "../components/PastorMessage";
import CalendarPreview from "../components/CalendarPreview";
import Map from "../components/Map";


function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <ServiceTimes />
      <EventsList />
      <PastorMessage />
      <CalendarPreview />
      <Map />
    </>
  );
}

export default HomePage;
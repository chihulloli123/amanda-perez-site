import Hero from "../components/Hero";
import Mission from "../components/Mission";
import ServiceTimes from "../components/ServiceTimes";
import PastorMessage from "../components/PastorMessage";
import CalendarPreview from "../components/CalendarPreview";
import Map from "../components/Map";

function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <ServiceTimes />
      <PastorMessage />
      <CalendarPreview />
      <Map />
    </>
  );
}

export default HomePage;
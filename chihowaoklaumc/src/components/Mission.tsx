import Card from "./ui/Card";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { church } from "../data/church";

export default function Mission() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle title="Our Mission" />

        <Card>
          <p className="text-center text-xl text-gray-700">
            {church.mission}
          </p>
        </Card>
      </Container>
    </section>
  );
}
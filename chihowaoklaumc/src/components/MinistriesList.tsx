import { ministries } from "../data/ministries";
import Card from "./ui/Card";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

export default function MinistriesList() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Our Ministries"
          subtitle="There's a place for every generation at Chihowa Okla UMC."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {ministries.map((ministry) => (
            <Card key={ministry.id}>
              <h3 className="text-2xl font-bold text-[#6F408A]">
                {ministry.name}
              </h3>

              <p className="mt-4 text-gray-600">
                {ministry.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
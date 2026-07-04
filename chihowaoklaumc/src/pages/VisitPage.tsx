import PageHero from "../components/PageHero";
import { visitContent } from "../content/visit";
import Container from "../components/ui/Container";

export default function VisitPage() {
  return (
    <>
      <PageHero
        title={visitContent.hero.title}
        subtitle={visitContent.hero.subtitle}
      />

      <section className="py-20">
        <Container>
          <p className="text-lg leading-8 text-gray-700">
            {visitContent.welcome}
          </p>

          <ul className="mt-8 list-disc space-y-3 pl-6">
            {visitContent.expectations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
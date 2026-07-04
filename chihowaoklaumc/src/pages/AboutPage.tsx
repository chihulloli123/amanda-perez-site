import Mission from "../components/Mission";
import MinistriesList from "../components/MinistriesList";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import PageHero from "../components/PageHero";
import { aboutContent } from "../content/about";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={aboutContent.hero.title}
        subtitle={aboutContent.hero.subtitle}
      />

      <Mission />

      <section className="py-20">
        <Container>
          <SectionTitle
            title={aboutContent.beliefs.title}
            subtitle={aboutContent.beliefs.subtitle}
          />

          <div className="space-y-6 text-lg leading-8 text-gray-700">
            {aboutContent.beliefs.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <MinistriesList />
    </>
  );
}
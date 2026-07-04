import Container from "./ui/Container";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({
  title,
  subtitle,
}: PageHeroProps) {
  return (
    <section className="bg-[#6F408A] py-20 text-white">
      <Container>
        <h1 className="text-5xl font-bold">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-xl">
          {subtitle}
        </p>
      </Container>
    </section>
  );
}
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { historyContent } from "../content/history";

export default function HistoryPage() {
  return (
    <>
      <section className="bg-[#6F408A] py-20 text-white">
        <Container>
          <h1 className="text-5xl font-bold">
            {historyContent.hero.title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl">
            {historyContent.hero.subtitle}
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            title="Our Journey"
            subtitle="Key milestones in the life of our congregation."
          />

          <p className="mb-12 text-lg leading-8 text-gray-700">
            {historyContent.introduction}
          </p>

          <div className="space-y-10">
            {historyContent.timeline.map((item) => (
              <div
                key={item.year}
                className="rounded-xl border-l-4 border-[#6F408A] bg-white p-6 shadow"
              >
                <h3 className="text-2xl font-bold text-[#6F408A]">
                  {item.year}
                </h3>

                <h4 className="mt-2 text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-3 text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
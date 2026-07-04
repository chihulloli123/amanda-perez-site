import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

export default function HistoryPage() {
  return (
    <>
      <section className="bg-[#6F408A] py-20 text-white">
        <Container>
          <h1 className="text-5xl font-bold">
            Our History
          </h1>

          <p className="mt-6 max-w-3xl text-xl">
            Honoring our past while faithfully serving future generations.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            title="Chihowa Okla United Methodist Church"
            subtitle="A history of worship, fellowship, and service."
          />

          <div className="space-y-6 text-lg leading-8 text-gray-700">
            <p>
              Chihowa Okla United Methodist Church has faithfully served the
              Durant community for generations. Our congregation continues to
              be a place where people gather to worship, learn, and serve.
            </p>

            <p>
              Through changing times, our commitment to Christ and our
              neighbors has remained constant.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-20">
        <Container>
          <SectionTitle
            title="Oklahoma Indian Missionary Conference"
            subtitle="Our connection to Native Methodist ministry."
          />

          <div className="space-y-6 text-lg leading-8 text-gray-700">
            <p>
              Chihowa Okla United Methodist Church is part of the Oklahoma
              Indian Missionary Conference, whose ministries have served Native
              communities across Oklahoma for generations.
            </p>

            <p>
              The conference continues to support churches through worship,
              leadership development, and community outreach.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            title="United Methodist Heritage"
            subtitle="Part of a worldwide connection."
          />

          <div className="space-y-6 text-lg leading-8 text-gray-700">
            <p>
              As a United Methodist congregation, we share in a tradition of
              grace, discipleship, and service that reaches communities around
              the world.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
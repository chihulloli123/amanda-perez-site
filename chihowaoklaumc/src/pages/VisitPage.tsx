import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceTimes from "../components/ServiceTimes";

export default function VisitPage() {
  return (
    <>
      <section className="bg-[#6F408A] py-20 text-white">
        <Container>
          <h1 className="text-5xl font-bold">
            Plan Your Visit
          </h1>

          <p className="mt-6 max-w-3xl text-xl">
            Whether this is your first visit or you've been here before,
            we're excited to welcome you.
          </p>
        </Container>
      </section>

      <ServiceTimes />

      <section className="py-20">
        <Container>
          <SectionTitle
            title="What to Expect"
            subtitle="Everyone is welcome."
          />

          <div className="space-y-8 text-lg leading-8 text-gray-700">

            <div>
              <h3 className="text-2xl font-semibold text-[#6F408A]">
                Worship
              </h3>

              <p className="mt-2">
                Our worship services are centered on Christ through
                Scripture, prayer, music, and fellowship.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#6F408A]">
                Dress
              </h3>

              <p className="mt-2">
                Come as you are. Some attend in jeans while others wear
                traditional Sunday attire.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#6F408A]">
                Children
              </h3>

              <p className="mt-2">
                Children are welcome. We offer opportunities for children
                and youth to learn and grow in faith.
              </p>
            </div>

          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-20">
        <Container>
          <SectionTitle
            title="Location"
            subtitle="We look forward to meeting you."
          />

          <div className="rounded-xl border bg-white p-10 shadow">
            <p className="text-lg">
              Chihowa Okla United Methodist Church
            </p>

            <p className="mt-2">
              Durant, Oklahoma
            </p>

            <button className="mt-8 rounded-lg bg-[#6F408A] px-6 py-3 text-white hover:opacity-90">
              Get Directions
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}
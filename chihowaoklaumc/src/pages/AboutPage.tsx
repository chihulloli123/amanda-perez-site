import Mission from "../components/Mission";
import MinistriesList from "../components/MinistriesList";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#6F408A] py-20 text-center text-white">
        <Container>
          <h1 className="text-5xl font-bold">
            About Chihowa Okla United Methodist Church
          </h1>

          <p className="mt-6 text-xl">
            A welcoming congregation rooted in faith, community, and service.
          </p>
        </Container>
      </section>

      <Mission />

      <section className="py-20">
        <Container>
          <SectionTitle
            title="Our Beliefs"
            subtitle="What guides our faith and ministry."
          />

          <div className="space-y-6 text-lg leading-8 text-gray-700">
            <p>
              We believe in the grace of Jesus Christ, the love of God,
              and the fellowship of the Holy Spirit.
            </p>

            <p>
              We welcome all people and strive to serve our community
              through worship, discipleship, and outreach.
            </p>

            <p>
              As a United Methodist congregation, we seek to grow in
              faith while sharing God's love with others.
            </p>
          </div>
        </Container>
      </section>

      <MinistriesList />
    </>
  );
}
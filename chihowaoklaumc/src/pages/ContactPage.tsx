import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#6F408A] py-20 text-white">
        <Container>
          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 max-w-3xl text-xl">
            We'd love to hear from you. Reach out with questions, prayer
            requests, or if you'd like to learn more about our church.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            title="Church Information"
            subtitle="We're here to help."
          />

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-xl border bg-white p-8 shadow">
              <h2 className="text-2xl font-bold text-[#6F408A]">
                Contact Information
              </h2>

              <div className="mt-6 space-y-4 text-lg">
                <p><strong>Address:</strong> Durant, Oklahoma</p>
                <p><strong>Phone:</strong> (580) XXX-XXXX</p>
                <p><strong>Email:</strong> info@chihowaokla.org</p>
              </div>
            </div>

            <div className="rounded-xl border bg-white p-8 shadow">
              <h2 className="text-2xl font-bold text-[#6F408A]">
                Office Hours
              </h2>

              <div className="mt-6 space-y-4 text-lg">
                <p>Monday - Thursday</p>
                <p>8:00 AM – 4:30 PM</p>

                <p className="pt-4">
                  Office hours may vary during holidays and church events.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-20">
        <Container>
          <SectionTitle
            title="Prayer Requests"
            subtitle="We would be honored to pray for you."
          />

          <div className="rounded-xl border bg-white p-10 shadow">
            <p className="text-lg leading-8">
              If you have a prayer request, please contact us during worship
              services or through the church office. An online prayer request
              form will be available in a future update.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
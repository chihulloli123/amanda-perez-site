import PageHero from "../components/PageHero";
import Container from "../components/ui/Container";
import { contactContent } from "../content/contact";
import { siteContent } from "../content/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={contactContent.hero.title}
        subtitle={contactContent.hero.subtitle}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#6F408A]">
                Contact Information
              </h2>

              <div className="mt-6 space-y-4 text-lg">
                <p>
                  <strong>Church:</strong> {siteContent.churchName}
                </p>

                <p>
                  <strong>Location:</strong> {siteContent.city}
                </p>

                <p>
                  <strong>Phone:</strong> {siteContent.phone}
                </p>

                <p>
                  <strong>Email:</strong> {siteContent.email}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#6F408A]">
                Office Hours
              </h2>

              <div className="mt-6 space-y-2 text-lg">
                {contactContent.officeHours.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <p className="mt-8 text-gray-700">
                {contactContent.prayer}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
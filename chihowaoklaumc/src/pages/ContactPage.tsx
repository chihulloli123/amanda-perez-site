export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-[#6F408A]">
        Contact Us
      </h1>

      <div className="mt-12 space-y-8 text-lg">
        <div>
          <h2 className="text-2xl font-semibold">
            Address
          </h2>

          <p className="mt-2">
            Durant, Oklahoma
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Worship Times
          </h2>

          <p className="mt-2">
            Sunday School — 9:30 AM
          </p>

          <p>
            Morning Worship — 10:30 AM
          </p>

          <p>
            Wednesday Bible Study — 6:00 PM
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Need Prayer?
          </h2>

          <p className="mt-2">
            We would be honored to pray with you. Please reach out to our
            church family during any service or ministry event.
          </p>
        </div>
      </div>
    </main>
  );
}
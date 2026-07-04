export default function VisitPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-[#6F408A]">
        Plan Your Visit
      </h1>

      <p className="mt-8 text-lg">
        We'd love to welcome you to Chihowa Okla United Methodist Church.
      </p>

      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">
            Sunday Worship
          </h2>

          <p className="mt-2">
            Sunday School — 9:30 AM
          </p>

          <p>
            Morning Worship — 10:30 AM
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Wednesday Bible Study
          </h2>

          <p className="mt-2">
            Wednesdays at 6:00 PM
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            What Should I Wear?
          </h2>

          <p className="mt-2">
            Come as you are. Whether you prefer jeans or your Sunday best,
            you'll find a welcoming church family.
          </p>
        </div>
      </div>
    </main>
  );
}
export default function CTABanner() {
  return (
    <section className="bg-[#1D4ED8] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-4 text-lg text-blue-200">
          Join 10,000+ companies already using CorpDash to drive smarter decisions.
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-block bg-white text-[#2563EB] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-md"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  );
}

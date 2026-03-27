const testimonials = [
  {
    quote:
      'CorpDash transformed the way our operations team tracks KPIs. We cut reporting time by 60% in the first month alone.',
    initials: 'SL',
    name: 'Sarah Lewis',
    title: 'COO, NovaTech Solutions',
    color: 'bg-blue-500',
  },
  {
    quote:
      'The real-time analytics and smart notifications have made it effortless to keep our entire company aligned and moving fast.',
    initials: 'MR',
    name: 'Marcus Reid',
    title: 'VP of Engineering, Foundry Labs',
    color: 'bg-emerald-500',
  },
  {
    quote:
      "Best decision we made for our SaaS business. The integrations are seamless and the security features gave our clients confidence.",
    initials: 'AK',
    name: 'Aisha Khan',
    title: 'CEO, Clarity Analytics',
    color: 'bg-violet-500',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937]">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            See what professionals from leading companies say about CorpDash.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F9FAFB] rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <p className="text-gray-600 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#1F2937]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

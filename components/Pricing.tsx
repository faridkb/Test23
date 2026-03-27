const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for individuals and small teams getting started.',
    features: ['Up to 3 users', '5 dashboards', 'Basic analytics', 'Email support', '1 integration'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'Ideal for growing businesses that need more power.',
    features: [
      'Up to 25 users',
      'Unlimited dashboards',
      'Advanced analytics',
      'Priority support',
      '25 integrations',
      'Custom reports',
      'Smart notifications',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations at scale.',
    features: [
      'Unlimited users',
      'Unlimited dashboards',
      'Full analytics suite',
      'Dedicated support',
      '50+ integrations',
      'SSO & advanced security',
      'SLA guarantee',
      'Custom onboarding',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937]">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Choose the plan that fits your team. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 flex flex-col border shadow-sm transition-shadow duration-200 hover:shadow-lg ${
                plan.highlighted
                  ? 'bg-[#2563EB] border-[#2563EB] text-white scale-105'
                  : 'bg-white border-gray-200 text-[#1F2937]'
              }`}
            >
              {plan.highlighted && (
                <span className="self-start mb-3 bg-white text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Recommended
                </span>
              )}
              <h3 className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#1F2937]'}`}>
                {plan.name}
              </h3>
              <div className="mt-2 flex items-end gap-1">
                <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-[#1F2937]'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-base mb-1 ${plan.highlighted ? 'text-blue-200' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`mt-2 text-sm ${plan.highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-blue-200' : 'text-[#2563EB]'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? 'text-blue-50' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 block text-center py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-[#2563EB] hover:bg-blue-50'
                    : 'bg-[#2563EB] text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

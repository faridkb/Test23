const features = [
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description:
      'Monitor your key metrics live with interactive charts and dashboards that update in real time.',
  },
  {
    icon: '👥',
    title: 'Team Collaboration',
    description:
      'Invite teammates, assign roles, and collaborate on projects seamlessly within a unified workspace.',
  },
  {
    icon: '🔒',
    title: 'Secure Access',
    description:
      'Enterprise-grade security with SSO, two-factor authentication, and granular permission controls.',
  },
  {
    icon: '📈',
    title: 'Custom Reports',
    description:
      'Build and schedule custom reports tailored to your business needs and share them with stakeholders.',
  },
  {
    icon: '🔔',
    title: 'Smart Notifications',
    description:
      'Stay ahead with intelligent alerts that notify your team about critical events and threshold breaches.',
  },
  {
    icon: '🔗',
    title: 'Integrations',
    description:
      'Connect with 50+ popular tools including Slack, Salesforce, HubSpot, and your existing tech stack.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#F9FAFB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937]">Why Choose CorpDash?</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Everything your business needs to operate smarter, faster, and more securely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

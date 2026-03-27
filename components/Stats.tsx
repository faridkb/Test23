const stats = [
  { value: '10,000+', label: 'Companies' },
  { value: '99.9%', label: 'Uptime' },
  { value: '50+', label: 'Integrations' },
  { value: '24/7', label: 'Support' },
];

export default function Stats() {
  return (
    <section className="bg-[#2563EB] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl sm:text-5xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-2 text-blue-200 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

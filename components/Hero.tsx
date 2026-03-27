export default function Hero() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F2937] leading-tight">
            Manage Your Business{' '}
            <span className="text-[#2563EB]">with Confidence</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto lg:mx-0">
            CorpDash gives your team real-time analytics, seamless collaboration tools, and enterprise-grade
            security — all in one powerful dashboard built for modern businesses.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#pricing"
              className="bg-[#2563EB] text-white px-7 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
            >
              Get Started for Free
            </a>
            <a
              href="#features"
              className="border-2 border-[#2563EB] text-[#2563EB] px-7 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              See Demo
            </a>
          </div>
        </div>

        {/* Decorative Graphic */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <svg
            viewBox="0 0 520 400"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-md lg:max-w-lg drop-shadow-xl"
            aria-hidden="true"
          >
            {/* Dashboard card background */}
            <rect x="20" y="20" width="480" height="360" rx="16" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" />

            {/* Top bar */}
            <rect x="20" y="20" width="480" height="48" rx="16" fill="#2563EB" />
            <circle cx="52" cy="44" r="8" fill="white" fillOpacity="0.4" />
            <circle cx="76" cy="44" r="8" fill="white" fillOpacity="0.4" />
            <circle cx="100" cy="44" r="8" fill="white" fillOpacity="0.4" />
            <rect x="130" y="36" width="200" height="16" rx="8" fill="white" fillOpacity="0.2" />

            {/* Stat cards */}
            <rect x="40" y="88" width="130" height="70" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1" />
            <rect x="185" y="88" width="130" height="70" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1" />
            <rect x="330" y="88" width="130" height="70" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1" />

            {/* Stat labels */}
            <rect x="52" y="100" width="60" height="8" rx="4" fill="#9CA3AF" />
            <rect x="52" y="118" width="90" height="16" rx="4" fill="#2563EB" />
            <rect x="197" y="100" width="60" height="8" rx="4" fill="#9CA3AF" />
            <rect x="197" y="118" width="90" height="16" rx="4" fill="#10B981" />
            <rect x="342" y="100" width="60" height="8" rx="4" fill="#9CA3AF" />
            <rect x="342" y="118" width="90" height="16" rx="4" fill="#F59E0B" />

            {/* Chart area */}
            <rect x="40" y="174" width="290" height="140" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1" />
            <rect x="52" y="186" width="80" height="10" rx="4" fill="#1F2937" />
            {/* Bar chart bars */}
            <rect x="60" y="255" width="28" height="44" rx="4" fill="#BFDBFE" />
            <rect x="100" y="230" width="28" height="69" rx="4" fill="#93C5FD" />
            <rect x="140" y="215" width="28" height="84" rx="4" fill="#60A5FA" />
            <rect x="180" y="200" width="28" height="99" rx="4" fill="#3B82F6" />
            <rect x="220" y="210" width="28" height="89" rx="4" fill="#2563EB" />
            <rect x="260" y="195" width="28" height="104" rx="4" fill="#1D4ED8" />

            {/* Sidebar list */}
            <rect x="346" y="174" width="114" height="140" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1" />
            <rect x="358" y="190" width="60" height="8" rx="4" fill="#1F2937" />
            {[210, 228, 246, 264, 282].map((y, i) => (
              <g key={i}>
                <circle cx="366" cy={y} r="5" fill={['#2563EB', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][i]} />
                <rect x="376" y={y - 4} width="60" height="8" rx="4" fill="#E5E7EB" />
              </g>
            ))}

            {/* Bottom row */}
            <rect x="40" y="328" width="130" height="36" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
            <rect x="185" y="328" width="130" height="36" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
            <rect x="330" y="328" width="130" height="36" rx="8" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}

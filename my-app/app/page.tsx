export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            TechSolve
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Services
            </a>
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Features
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Contact
            </a>
          </nav>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition font-medium text-sm">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Enterprise IT Solutions for Modern Businesses
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          From cloud infrastructure to cybersecurity, we provide comprehensive IT services to drive your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition font-semibold">
            Schedule Consultation
          </button>
          <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-900 transition font-semibold">
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 dark:bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "☁️",
                title: "Cloud Services",
                desc: "Migrate and manage your infrastructure on AWS, Azure, or Google Cloud with expert guidance. 123"
              },
              {
                icon: "🔒",
                title: "Cybersecurity",
                desc: "Protect your business with advanced threat detection, compliance audits, and security assessments.123465"
              },
              {
                icon: "💻",
                title: "IT Consulting",
                desc: "Strategic technology planning and digital transformation for your organization."
              },
              {
                icon: "🛠️",
                title: "Managed Services",
                desc: "24/7 monitoring, maintenance, and support for your critical systems and infrastructure."
              },
              {
                icon: "📊",
                title: "Data Analytics",
                desc: "Transform raw data into actionable insights with our advanced analytics solutions."
              },
              {
                icon: "🔗",
                title: "Integration Services",
                desc: "Seamlessly integrate your business applications and systems for optimal efficiency."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Why Choose TechSolve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { feature: "Expert Team", detail: "10+ years of industry experience with certified professionals" },
            { feature: "24/7 Support", detail: "Round-the-clock customer support for peace of mind" },
            { feature: "Scalable Solutions", detail: "Grow your IT infrastructure as your business expands" },
            { feature: "Security First", detail: "Enterprise-grade security and compliance standards" },
            { feature: "Cost Effective", detail: "Optimize your IT budget without compromising quality" },
            { feature: "Custom Solutions", detail: "Tailored services designed for your unique needs" }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="text-3xl text-blue-600 dark:text-blue-400 flex-shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.feature}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-blue-600 dark:bg-blue-900 py-24">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us today to discuss how TechSolve can help your business thrive in the digital age.
          </p>
          <button className="bg-white text-blue-600 dark:bg-gray-100 px-8 py-4 rounded-lg hover:bg-gray-100 dark:hover:bg-white transition font-semibold">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>&copy; 2024 TechSolve. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
}

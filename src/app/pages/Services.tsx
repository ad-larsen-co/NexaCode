import { motion } from "motion/react";
import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  BarChart3,
  Shield,
  Layers,
  Zap,
  ArrowRight,
  Search,
  FileText,
  Rocket,
  LifeBuoy,
  Check,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Web Development",
      description:
        "Custom web applications built with React, Next.js, and modern technologies. Responsive, fast, and optimized for performance.",
      features: ["React & Next.js", "Full-stack Development", "API Integration", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzM5NjMwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Development",
      description:
        "Native iOS and Android apps, or cross-platform solutions with React Native. Beautiful interfaces that users love.",
      features: ["iOS & Android", "React Native", "App Store Deployment", "Push Notifications"],
      image: "https://images.unsplash.com/photo-1646737554389-49329965ef01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzbWFydHBob25lJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDAwMjg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure on AWS, Azure, or Google Cloud. DevOps, CI/CD, and infrastructure as code.",
      features: ["AWS & Azure", "DevOps & CI/CD", "Auto-scaling", "Load Balancing"],
      image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0MDAyODY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI & Machine Learning",
      description:
        "Integrate AI capabilities into your products. From natural language processing to computer vision and predictive analytics.",
      features: ["NLP Integration", "Computer Vision", "Predictive Models", "AI Automation"],
      image: "https://images.unsplash.com/photo-1674027444484-cf52149ea050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW4lMjBuZXR3b3JrfGVufDF8fHx8MTc3Mzk2NTk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description:
        "User-centered design that delights. We create intuitive interfaces backed by research and best practices.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      image: "https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwc2tldGNoJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc3NDAwMjg2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Data Analytics",
      description:
        "Turn data into insights. Custom dashboards, reporting tools, and data visualization solutions.",
      features: ["Custom Dashboards", "Data Visualization", "Real-time Analytics", "Business Intelligence"],
      image: "https://images.unsplash.com/photo-1748439281934-2803c6a3ee36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZ3JhcGhzJTIwY2hhcnRzfGVufDF8fHx8MTc3Mzk4MzAyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security & Compliance",
      description:
        "Secure your applications with industry best practices. GDPR, SOC2, and other compliance requirements.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Data Protection"],
      image: "https://images.unsplash.com/photo-1696013910376-c56f76dd8178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbG9jayUyMHNoaWVsZCUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzc0MDAyODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "API Development",
      description:
        "RESTful and GraphQL APIs that are robust, well-documented, and easy to integrate with.",
      features: ["REST & GraphQL", "API Documentation", "Rate Limiting", "Authentication"],
      image: "https://images.unsplash.com/photo-1514070706115-47c142769603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBjb2RlJTIwaW50ZWdyYXRpb24lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzQwMDI4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Performance Optimization",
      description:
        "Speed up your applications. Code optimization, caching strategies, and infrastructure improvements.",
      features: ["Code Optimization", "Caching Strategy", "CDN Setup", "Database Tuning"],
      image: "https://images.unsplash.com/photo-1598566135435-e81a1ba6c6b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMHNwZWVkJTIwb3B0aW1pemF0aW9uJTIwcm9ja2V0fGVufDF8fHx8MTc3NDAwMjg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#4a9d2e]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#4a9d2e]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-[#4a9d2e]/10 rounded-full">
              <span className="text-[#4a9d2e] font-semibold text-sm">Premium Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 font-bold leading-tight">
              Our <span className="italic text-[#4a9d2e]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Comprehensive software solutions tailored to your business needs. We combine technical excellence with creative innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#4a9d2e]/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Banner Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#4a9d2e] shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-3">
                        <div className="w-5 h-5 bg-[#4a9d2e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#4a9d2e]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-10 w-72 h-72 bg-[#4a9d2e]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#4a9d2e]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-4 font-bold">
              Our <span className="italic text-[#4a9d2e]">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: <Search className="w-7 h-7" />,
                title: "Discovery",
                description: "We dive deep into understanding your business, goals, and challenges",
                features: ["Initial consultation", "Requirements gathering", "Market research", "Competitor analysis"],
              },
              {
                step: "02",
                icon: <FileText className="w-7 h-7" />,
                title: "Planning",
                description: "Strategic roadmap and technical architecture design tailored to your needs",
                features: ["Project timeline", "Resource allocation", "Tech stack selection", "Design mockups"],
              },
              {
                step: "03",
                icon: <Code2 className="w-7 h-7" />,
                title: "Development",
                description: "Agile development with regular updates, feedback, and transparency",
                features: ["Sprint cycles", "Code reviews", "Continuous integration", "Weekly demos"],
              },
              {
                step: "04",
                icon: <Rocket className="w-7 h-7" />,
                title: "Launch & Support",
                description: "Seamless deployment with ongoing monitoring and maintenance",
                features: ["Production deployment", "Performance monitoring", "Bug fixes", "Feature updates"],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                {/* Content Card */}
                <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#4a9d2e]/10 hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4a9d2e] to-[#3a7d1e] text-white mb-6 shadow-lg">
                    {phase.icon}
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-bold text-[#4a9d2e] tracking-wider">STEP {phase.step}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{phase.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{phase.description}</p>

                  <ul className="space-y-3">
                    {phase.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#4a9d2e]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#4a9d2e]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow - Desktop */}
                {index < 3 && (
                  <div className="hidden lg:flex absolute top-20 -right-4 z-20 items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-200 shadow-sm">
                    <ArrowRight className="w-4 h-4 text-[#4a9d2e]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#4a9d2e] to-[#3a7d1e] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6 text-white font-bold">
              Let's discuss <span className="italic">your project</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule a free consultation to explore how we can help bring your vision to life
            </p>
            <a
              href="/contact"
              className="bg-white text-[#4a9d2e] px-10 py-5 rounded-full hover:bg-gray-100 transition-all hover:scale-105 inline-block text-lg font-semibold shadow-xl"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
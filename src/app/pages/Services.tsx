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
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl mb-6">
              Our <span className="italic text-[#4a9d2e]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Comprehensive software solutions tailored to your business needs. We combine technical excellence with creative innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-[#4a9d2e]/50 transition-all group"
              >
                {/* Banner Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-[#4a9d2e]">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#c4ff61] rounded-full" />
                        {feature}
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
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Our <span className="italic text-[#4a9d2e]">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results every time
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-32 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-[#4a9d2e]/20 via-[#4a9d2e]/60 to-[#4a9d2e]/20 rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                {
                  step: "01",
                  icon: <Search className="w-8 h-8" />,
                  title: "Discovery",
                  description: "We dive deep into understanding your business, goals, and challenges",
                  features: ["Initial consultation", "Requirements gathering", "Market research", "Competitor analysis"],
                },
                {
                  step: "02",
                  icon: <FileText className="w-8 h-8" />,
                  title: "Planning",
                  description: "Strategic roadmap and technical architecture design tailored to your needs",
                  features: ["Project timeline", "Resource allocation", "Tech stack selection", "Design mockups"],
                },
                {
                  step: "03",
                  icon: <Code2 className="w-8 h-8" />,
                  title: "Development",
                  description: "Agile development with regular updates, feedback, and transparency",
                  features: ["Sprint cycles", "Code reviews", "Continuous integration", "Weekly demos"],
                },
                {
                  step: "04",
                  icon: <Rocket className="w-8 h-8" />,
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
                  className="relative group"
                >
                  {/* Step Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4a9d2e] to-[#3a7d1e] flex items-center justify-center z-10 relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {phase.icon}
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-[#4a9d2e] flex items-center justify-center shadow-md">
                        <span className="text-[#4a9d2e] text-xs font-bold">{phase.step}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#4a9d2e] hover:shadow-xl transition-all duration-300 h-full">
                    <h3 className="text-2xl font-semibold mb-3 text-center text-gray-900">{phase.title}</h3>
                    <p className="text-gray-600 text-center mb-6 leading-relaxed">{phase.description}</p>
                    <div className="pt-4 border-t border-gray-200">
                      <ul className="space-y-2">
                        {phase.features.map((feature, i) => (
                          <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-[#4a9d2e] rounded-full mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Arrow - Desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-32 -right-3 z-20">
                      <ArrowRight className="w-6 h-6 text-[#4a9d2e]" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">
              Let's discuss <span className="italic text-[#4a9d2e]">your project</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a free consultation to explore how we can help
            </p>
            <a
              href="/contact"
              className="bg-[#4a9d2e] text-white px-10 py-5 rounded-full hover:bg-[#3a7d1e] transition-all hover:scale-105 inline-block text-lg font-semibold"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
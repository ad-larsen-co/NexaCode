import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export function Work() {
  const projects = [
    {
      title: "FinanceFlow",
      category: "FinTech Platform",
      description: "A comprehensive financial management platform with AI-powered insights and real-time analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3Mzg4ODMzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React", "Node.js", "PostgreSQL", "AI/ML"],
      url: "https://finlygo.com/",
    },
    {
      title: "ShopNow",
      category: "E-Commerce",
      description: "Modern e-commerce platform with seamless checkout and inventory management.",
      image: "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHBob25lfGVufDF8fHx8MTc3Mzk2NjQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Next.js", "Stripe", "MongoDB"],
      url: "https://shopnowstores.com/",
    },
    {
      title: "HealthTrack",
      category: "Healthcare App",
      description: "Mobile health tracking application with wearable device integration.",
      image: "https://images.unsplash.com/photo-1772971919689-c216435a5899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvZGluZ3xlbnwxfHx8fDE3NzM5NzcwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React Native", "Firebase", "HealthKit"],
      url: "https://www.htsw.net/",
    },
    {
      title: "CloudSync",
      category: "SaaS Platform",
      description: "Enterprise cloud storage and collaboration platform with end-to-end encryption.",
      image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczODg4NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Vue.js", "AWS", "WebRTC"],
      url: "https://www.cloudsynctech.com/",
    },
    {
      title: "AIWriter",
      category: "AI Tool",
      description: "AI-powered content generation platform for marketers and creators.",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzM5MTYxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React", "OpenAI", "Python"],
      url: "https://www.docuwriter.ai/",
    },
    {
      title: "TravelHub",
      category: "Travel Platform",
      description: "Comprehensive travel booking and itinerary planning application.",
      image: "https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzczOTI1NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Angular", "GraphQL", "Microservices"],
      url: "https://www.travelhubworld.com/",
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
              Our <span className="italic text-[#4a9d2e]">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Explore our portfolio of successful projects. From startups to enterprises, we've delivered exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="group cursor-pointer block"
              >
                <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-[#4a9d2e]/50 transition-all h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 bg-[#c4ff61] text-[#0a1f1a] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              What our <span className="italic text-[#4a9d2e]">clients say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "NexaCode transformed our vision into a scalable platform that exceeded all expectations. Their technical expertise is unmatched.",
                author: "Sarah Johnson",
                position: "CEO, FinanceFlow",
              },
              {
                quote: "The team's attention to detail and commitment to quality made all the difference. Our app launch was a huge success.",
                author: "Michael Chen",
                position: "Founder, HealthTrack",
              },
              {
                quote: "Working with NexaCode was seamless. They understood our needs and delivered a solution that our users absolutely love.",
                author: "Emily Rodriguez",
                position: "CTO, CloudSync",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-[#0a1f1a] border border-gray-200 rounded-2xl p-8"
              >
                <div className="text-[#4a9d2e] text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">
              Ready to start <span className="italic text-[#4a9d2e]">your project?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create something extraordinary together
            </p>
            <a
              href="/contact"
              className="bg-[#4a9d2e] text-white px-10 py-5 rounded-full hover:bg-[#3a7d1e] transition-all hover:scale-105 inline-block text-lg font-semibold"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

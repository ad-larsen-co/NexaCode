import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";

export function Home() {
  const workImages = [
    {
      url: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzczOTU0NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "FinTech App",
      span: "row-span-2",
    },
    {
      url: "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHBob25lfGVufDF8fHx8MTc3Mzk2NjQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "E-Commerce",
      span: "",
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3Mzg4ODMzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Analytics",
      span: "",
    },
    {
      url: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzM5MTYxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "AI Platform",
      span: "col-span-2",
    },
    {
      url: "https://images.unsplash.com/photo-1637502875124-eb4a9843a2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzczOTI1NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "SaaS Dashboard",
      span: "",
    },
    {
      url: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczODg4NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Cloud Portal",
      span: "",
    },
  ];

  return (
    <div className="bg-[#0a1f1a] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1761319659795-543075eaeaad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzQyOTk2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Abstract technology background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f1a]/60 via-[#0a1f1a]/80 to-[#0a1f1a]" />
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(196, 255, 97, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(196, 255, 97, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-96 h-96 bg-[#c4ff61]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -70, 0],
              y: [0, 80, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#c4ff61]/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#0a4f3a]/30 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl leading-tight">
                <span className="text-white">Engineering excellence.</span>{" "}
                <span className="italic text-[#c4ff61]">AI-powered</span>
                <br />
                <span className="text-white">innovation. Your</span>
                <br />
                <span className="text-white">software advantage.</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl">
                Transform your vision into reality. Partner with our team of expert developers who blend cutting-edge technology with innovative design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-[#c4ff61] text-[#0a1f1a] px-8 py-4 rounded-full hover:bg-[#b5f052] transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  Start a Project
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/work"
                  className="border border-white/20 text-white px-8 py-4 rounded-full hover:border-[#c4ff61] hover:text-[#c4ff61] transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4 auto-rows-[180px]">
              {workImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`${item.span} rounded-2xl overflow-hidden relative group cursor-pointer`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-semibold">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-[#051410]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              What we <span className="italic text-[#c4ff61]">create</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              From concept to deployment, we deliver software solutions that scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Web Development",
                description: "Custom web applications built with modern frameworks and best practices",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Mobile Solutions",
                description: "Native and cross-platform mobile apps that users love",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Cloud & AI",
                description: "Scalable cloud infrastructure with AI-powered features",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-[#0a1f1a] border border-white/10 rounded-2xl p-8 hover:border-[#c4ff61]/50 transition-all group"
              >
                <div className="text-[#c4ff61] mb-4 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#c4ff61] hover:gap-4 transition-all"
            >
              Explore all services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-[#0a1f1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "8+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#c4ff61] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#051410]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">
              Ready to build something <span className="italic text-[#c4ff61]">amazing?</span>
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Let's discuss your project and turn your ideas into reality
            </p>
            <Link
              to="/contact"
              className="bg-[#c4ff61] text-[#0a1f1a] px-10 py-5 rounded-full hover:bg-[#b5f052] transition-all hover:scale-105 inline-flex items-center gap-2 text-lg"
            >
              Get in Touch
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { motion } from "motion/react";
import { Target, Users, Lightbulb, Award } from "lucide-react";

export function About() {
  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1630487656049-6db93a53a7e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc3MzkyOTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Jordan Lee",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1772971919689-c216435a5899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvZGluZ3xlbnwxfHx8fDE3NzM5NzcwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Maya Patel",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzczOTE5OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Sam Kim",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1771189956777-575006b6b145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMGFic3RyYWN0fGVufDF8fHx8MTc3Mzg2NzczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven",
      description: "We're committed to delivering software that makes a real impact on businesses and users.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships based on trust and results.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We stay ahead of the curve, embracing new technologies and methodologies.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Obsessed",
      description: "Excellence in every line of code, every pixel, and every interaction.",
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
              About <span className="italic text-[#4a9d2e]">NexaCode</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              We're a team of passionate developers, designers, and innovators dedicated to building exceptional software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Our <span className="italic text-[#4a9d2e]">Story</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Founded in 2018, NexaCode started with a simple mission: to help businesses leverage technology to achieve their goals. What began as a small team of developers has grown into a full-service software agency.
              </p>
              <p>
                Today, we work with clients ranging from innovative startups to established enterprises, delivering custom software solutions that drive real business value. Our expertise spans web and mobile development, cloud infrastructure, AI integration, and more.
              </p>
              <p>
                We believe in the power of collaboration, continuous learning, and staying at the forefront of technology. Every project is an opportunity to create something exceptional.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="italic text-[#4a9d2e]">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-[#0a1f1a] border border-gray-200 rounded-2xl p-8 hover:border-[#c4ff61]/50 transition-all"
              >
                <div className="text-[#4a9d2e] mb-4">{value.icon}</div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Meet the <span className="italic text-[#4a9d2e]">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                </div>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-[#4a9d2e] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "8+", label: "Years in Business" },
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "25+", label: "Team Members" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#4a9d2e] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
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
              Want to <span className="italic text-[#4a9d2e]">join us?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented people to join our team
            </p>
            <a
              href="/contact"
              className="bg-[#4a9d2e] text-white px-10 py-5 rounded-full hover:bg-[#3a7d1e] transition-all hover:scale-105 inline-block text-lg font-semibold"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "motion/react";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Let's <span className="italic text-[#4a9d2e]">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Have a project in mind? We'd love to hear from you. Get in touch and let's build something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-8">
                Get in <span className="italic text-[#4a9d2e]">Touch</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-[#c4ff61] text-[#0a1f1a] p-3 rounded-full h-fit">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <a
                      href="mailto:hello@nexacode.com"
                      className="text-gray-600 hover:text-[#4a9d2e] transition-colors"
                    >
                      hello@nexacode.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#c4ff61] text-[#0a1f1a] p-3 rounded-full h-fit">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-gray-600 hover:text-[#4a9d2e] transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4a9d2e] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4a9d2e] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4a9d2e] transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#4a9d2e] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#c4ff61] text-[#0a1f1a] px-8 py-4 rounded-full hover:bg-[#b5f052] transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Frequently Asked <span className="italic text-[#4a9d2e]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. A simple web app might take 6-8 weeks, while a complex enterprise solution could take 4-6 months. We provide detailed timelines during our discovery phase.",
              },
              {
                question: "What is your development process?",
                answer: "We follow an agile methodology with regular sprints, continuous feedback, and iterative development. You'll have full visibility into progress with weekly updates and demos.",
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! We offer maintenance and support packages to keep your application running smoothly. This includes bug fixes, updates, and feature enhancements as needed.",
              },
              {
                question: "What technologies do you work with?",
                answer: "We specialize in modern tech stacks including React, Node.js, Python, and cloud platforms like AWS and Azure. We choose technologies based on your specific needs and goals.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white border border-gray-200 rounded-2xl p-8"
              >
                <h3 className="text-xl mb-3 text-[#4a9d2e]">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

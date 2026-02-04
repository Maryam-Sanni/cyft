import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
    {
      question: "What services does your company offer?",
      answer:
        "We provide professional services in events management, facility management, and human capacity development, delivering tailored solutions to meet client needs.",
    },
    {
      question: "Do you manage both small and large-scale events?",
      answer:
        "Yes, we handle events of all sizes, from corporate meetings and trainings to large conferences, exhibitions, and social events.",
    },
    {
      question: "Can your services be customized?",
      answer:
        "Absolutely. All our services are tailored to your objectives, budget, and timeline to ensure the best possible outcomes.",
    },
    {
      question: "What types of facilities do you manage?",
      answer:
        "We manage corporate offices, commercial buildings, educational institutions, and event facilities, ensuring efficiency, safety, and functionality.",
    },
    {
      question: "How do you ensure quality service delivery?",
      answer:
        "We follow industry best practices, clear operational procedures, and continuous quality checks, supported by open communication with our clients.",
    },
    {
      question: "What does human capacity development include?",
      answer:
        "Our programs include professional training, workshops, seminars, and skill development initiatives designed to improve performance and productivity.",
    },
    {
      question: "Do you provide post-event or post-training support?",
      answer:
        "Yes, we provide post-event evaluations, reports, and post-training assessments to measure impact and guide improvements.",
    },
    {
      question: "How early should we book your services?",
      answer:
        "We recommend early booking, especially for large projects, but we also accommodate urgent requests based on availability.",
    },
    {
      question: "How can we request a quotation?",
      answer:
        "You can request a quotation by contacting us via email, phone, or our website contact form with details of your requirements.",
    },
    {
      question: "Why should we choose your company?",
      answer:
        "We combine experience, professionalism, and innovation to deliver reliable services with a strong focus on client satisfaction.",
    },
  ];
  
export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-10 bg-white mb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Find answers to common questions about our services and processes.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-gray-500">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

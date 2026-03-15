// components/FAQ.jsx
"use client";

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
  {
    question: "What exactly is Tether?",
    answer:
      "Tether is a SaaS platform designed to help teams build stronger connections through real-time collaboration, guided team-building exercises, and meaningful rituals. It keeps everyone aligned and engaged, whether working remotely or in person.",
  },
  {
    question: "How does Tether improve team collaboration?",
    answer:
      "Tether provides structured workflows, async check-ins, and team rituals that keep everyone in sync. It surfaces blockers early and celebrates wins together, making collaboration feel natural regardless of timezone or location.",
  },
  {
    question: "Can Tether work with remote or hybrid teams?",
    answer:
      "Absolutely. Tether was built with distributed teams in mind. Whether your team is fully remote, hybrid, or co-located, Tether adapts to your working style and time zones.",
  },
  {
    question: "What makes Tether different from other collaboration tools?",
    answer:
      "Unlike task managers or chat tools, Tether focuses on the human side of teamwork — relationships, rituals, and culture. It's not just about getting work done; it's about building teams that actually thrive.",
  },
  {
    question: "Does Tether integrate with the tools we already use?",
    answer:
      "Yes. Tether integrates with Slack, Notion, Google Workspace, Jira, and more. You can plug it into your existing stack without disrupting your current workflows.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl w-full md:w-4xl px-6 py-8 cursor-pointer select-none" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between gap-4">
        <span className="text-lg md:text-[25px] font-normal text-gray-900">{question}</span>
        <button
          className="shrink-0 size-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-all duration-300"
          aria-label={open ? "Collapse" : "Expand"}
        >
          <div className="relative w-5 h-5">
            <HiPlus 
              className="absolute inset-0 w-5 h-5 transition-all duration-300"
              style={{
                transform: open ? 'rotate(90deg) scale(0)' : 'rotate(0deg) scale(1)',
                opacity: open ? 0 : 1,
              }}
            />
            <HiMinus 
              className="absolute inset-0 w-5 h-5 transition-all duration-300"
              style={{
                transform: open ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0)',
                opacity: open ? 1 : 0,
              }}
            />
          </div>
        </button>
      </div>

      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open ? '500px' : '0',
          opacity: open ? 1 : 0,
        }}
      >
        <p className="mt-7 text-lg text-gray-900 leading-relaxed pr-10">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="flex items-center px-4 md:px-10 py-16 md:py-30">
      <div className="w-full md:w-[85%] flex flex-col md:flex-row items-start justify-between mx-auto gap-10 md:gap-0">
        {/* Left */}
        <div className="lg:pt-4 w-full md:w-auto flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-[2.6rem] font-light leading-tight text-gray-900 tracking-tight">
            Everything you<br className="hidden md:block" />need to know
          </h2>
          <button className="mt-4 px-7 py-2.5 bg-gray-900 text-white text-sm md:text-lg rounded-full hover:bg-gray-700 transition-colors">
            Contact us
          </button>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3 bg-gray-400/10 p-3 rounded-2xl w-full md:w-auto">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }
  
  const FAQList: FAQProps[] = [
    {
      question: "What is included in the Free Plan?",
      answer: "The Free Plan gives you access to one preview video per course and basic course materials. You can also join our community forum to engage with other learners.",
      value: "item-1",
    },
    {
      question: "How does the Monthly Subscription work?",
      answer:
        "The Monthly Subscription provides unlimited access to all our courses, including new courses added every month. You can participate in assignments, quizzes, and download course resources. You will also receive certificates of completion for each course and have access to priority customer support.",
      value: "item-2",
    },
    {
      question:
        "What are the benefits of the Full Course Subscription?",
      answer:
        "The Full Course Subscription gives you lifetime access to the purchased course, including all future updates. You can access all course materials, participate in assignments and quizzes, and receive a certificate of completion. Additionally, you get exclusive access to course-specific webinars and priority customer support.",
      value: "item-3",
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade or downgrade your subscription plan at any time. For specific instructions, please contact our customer support team.",
      value: "item-4",
    },
    {
      question:
        "What payment methods do you accept?",
      answer:
        "We accept all major credit cards and PayPal. For any other payment methods, please contact our customer support team.",
      value: "item-5",
    },
    {
      question:
        "Is there a refund policy?",
      answer:
        "Yes, we offer a 14-day money-back guarantee for the Monthly Subscription plan if you are not satisfied with the courses. For the Full Course Subscription, refunds are provided within 30 days of purchase if less than 20% of the course has been completed.",
      value: "item-6",
    },
    {
      question:
        "How often are new courses added?",
      answer:
        "New courses are added whenever a teacher creates a new course. Monthly subscribers will have immediate access to any new courses.",
      value: "item-7",
    },
    {
      question:
        "Can I access the courses offline?",
      answer:
        "Yes, downloadable course resources are available for both the Monthly and Full Course Subscription plans, allowing you to study offline.",
      value: "item-8",
    },
    {
      question:
        "Who can I contact for further questions?",
      answer:
        "For any additional questions, you can reach out to our customer support team via email at support@sardarofphysics.com or through our contact form on the website.",
      value: "item-9",
    },
  ];
  
  export const FAQ = () => {
    return (
      <section
        id="faq"
        className="container py-24 sm:py-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Questions
          </span>
        </h2>
  
        <Accordion
          type="single"
          collapsible
          className="w-full AccordionRoot"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
            >
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
  
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
  
        <h3 className="font-medium mt-4">
          Still have questions?{" "}
          <a
            rel="noreferrer noopener"
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Contact us
          </a>
        </h3>
      </section>
    );
  };
import { HelpCircle, MessageCircle, Mail, ExternalLink } from 'lucide-react';

/**
 * Help page.
 *
 * Provides support resources and frequently asked questions.
 */
export default function HelpPage() {
  const faqs = [
    {
      question: 'How do I get started?',
      answer:
        'Visit the Documentation page to find getting started guides and tutorials that will help you learn the basics.',
    },
    {
      question: 'Where can I find technical documentation?',
      answer:
        'The Documentation section contains API references, developer guides, and detailed technical information.',
    },
    {
      question: 'How do I report a bug or issue?',
      answer:
        'You can report issues through our support channels. Use the contact options below to reach our team.',
    },
    {
      question: 'How do I customize my settings?',
      answer:
        'Navigate to the Settings page using the sidebar to configure notifications, appearance, and other preferences.',
    },
  ];

  const supportOptions = [
    {
      icon: <MessageCircle size={24} />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time.',
      action: 'Start Chat',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours.',
      action: 'Send Email',
    },
    {
      icon: <ExternalLink size={24} />,
      title: 'Knowledge Base',
      description: 'Browse our extensive library of help articles.',
      action: 'Browse Articles',
    },
  ];

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-3 mb-2">
        <HelpCircle size={32} className="text-secondary" />
        <h1 className="text-4xl font-bold text-primary">Help & Support</h1>
      </div>
      <p className="text-text-secondary mb-8">
        Find answers to common questions and get in touch with our support team.
      </p>

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details key={index} className="card group cursor-pointer">
              <summary className="font-medium list-none flex items-center justify-between">
                {faq.question}
                <span className="text-secondary transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-text-secondary text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Support Options */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {supportOptions.map((option, index) => (
            <div key={index} className="card text-center">
              <div className="text-secondary mb-3 flex justify-center">{option.icon}</div>
              <h3 className="font-medium mb-1">{option.title}</h3>
              <p className="text-text-secondary text-sm mb-4">{option.description}</p>
              <button className="btn btn-outline w-full">{option.action}</button>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 p-4 bg-gray-50 border border-gray-200">
        <p className="text-sm text-text-secondary">
          <strong>Note:</strong> This is a template page. Connect these support options to your actual support systems.
        </p>
      </div>
    </div>
  );
}

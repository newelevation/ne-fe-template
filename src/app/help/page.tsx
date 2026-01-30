import { HelpCircle, TestTube2, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/app/components/ui';

/**
 * Help page.
 *
 * Provides frequently asked questions and support information.
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
        'Contact your administrator or use the appropriate support channel for your organization.',
    },
    {
      question: 'How do I customize my settings?',
      answer:
        'Navigate to the Settings page using the sidebar to configure notifications, appearance, and other preferences.',
    },
  ];

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-3 mb-2">
        <HelpCircle size={32} className="text-secondary" />
        <h1 className="text-4xl font-bold text-primary">Help & Support</h1>
      </div>
      <p className="text-text-secondary mb-8">
        Find answers to common questions.
      </p>

      {/* Testing Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Testing</h2>
        <Card>
          <div className="flex items-start gap-4">
            <div className="text-secondary flex-shrink-0">
              <TestTube2 size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-2">Test Reports</h3>
              <p className="text-text-secondary text-sm mb-3">
                View the latest E2E test results. Run{' '}
                <code className="bg-gray-100 px-1 py-0.5 text-xs">npm run test:e2e</code>{' '}
                to generate updated reports.
              </p>
              <Link
                href="/test-reports/index.html"
                target="_blank"
                className="inline-flex items-center gap-2 text-secondary hover:underline text-sm"
              >
                View E2E Test Report
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Card key={index} className="group cursor-pointer" padding="md">
              <details>
                <summary className="list-none flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                  <span className="text-secondary transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-text-secondary text-sm">{faq.answer}</p>
              </details>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

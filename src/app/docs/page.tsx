import { FileText, Book, Code, Terminal } from 'lucide-react';

/**
 * Documentation page.
 *
 * Provides an overview of the application documentation and resources.
 */
export default function DocsPage() {
  const sections = [
    {
      icon: <Book size={24} />,
      title: 'Getting Started',
      description: 'Learn the basics of using this application and get up and running quickly.',
    },
    {
      icon: <Code size={24} />,
      title: 'API Reference',
      description: 'Detailed documentation of available APIs, endpoints, and data structures.',
    },
    {
      icon: <Terminal size={24} />,
      title: 'Developer Guide',
      description: 'Technical documentation for developers building on this platform.',
    },
    {
      icon: <FileText size={24} />,
      title: 'Release Notes',
      description: 'View the latest updates, new features, and bug fixes in each release.',
    },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-2">Documentation</h1>
      <p className="text-text-secondary mb-8">
        Explore guides, references, and resources to help you get the most out of this application.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section, index) => (
          <div key={index} className="card hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="text-secondary flex-shrink-0">{section.icon}</div>
              <div>
                <h3 className="text-lg font-medium mb-1">{section.title}</h3>
                <p className="text-text-secondary text-sm">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 border border-gray-200">
        <p className="text-sm text-text-secondary">
          <strong>Note:</strong> This is a template page. Replace this content with your actual documentation.
        </p>
      </div>
    </div>
  );
}

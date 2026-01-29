'use client';

import { useState } from 'react';
import { Settings, Bell, Shield, Palette, User } from 'lucide-react';

/**
 * Settings page.
 *
 * Provides configuration options for the application.
 */
export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const settingsSections = [
    {
      icon: <User size={20} />,
      title: 'Profile',
      description: 'Manage your account information and preferences.',
    },
    {
      icon: <Bell size={20} />,
      title: 'Notifications',
      description: 'Configure how and when you receive notifications.',
      toggle: {
        enabled: notifications,
        onChange: () => setNotifications(!notifications),
        label: 'Enable notifications',
      },
    },
    {
      icon: <Palette size={20} />,
      title: 'Appearance',
      description: 'Customize the look and feel of the application.',
      toggle: {
        enabled: darkMode,
        onChange: () => setDarkMode(!darkMode),
        label: 'Dark mode',
      },
    },
    {
      icon: <Shield size={20} />,
      title: 'Security',
      description: 'Manage security settings and access controls.',
    },
  ];

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-2">
        <Settings size={32} className="text-secondary" />
        <h1 className="text-4xl font-bold text-primary">Settings</h1>
      </div>
      <p className="text-text-secondary mb-8">
        Configure your application preferences and account settings.
      </p>

      <div className="space-y-4">
        {settingsSections.map((section, index) => (
          <div key={index} className="card">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="text-secondary flex-shrink-0 mt-1">{section.icon}</div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{section.title}</h3>
                  <p className="text-text-secondary text-sm">{section.description}</p>
                </div>
              </div>
              {section.toggle && (
                <label className="flex items-center cursor-pointer">
                  <span className="text-sm text-text-secondary mr-3">{section.toggle.label}</span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={section.toggle.enabled}
                      onChange={section.toggle.onChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-10 h-6 rounded-full transition-colors ${
                        section.toggle.enabled ? 'bg-secondary' : 'bg-gray-300'
                      }`}
                    />
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        section.toggle.enabled ? 'translate-x-4' : ''
                      }`}
                    />
                  </div>
                </label>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 border border-gray-200">
        <p className="text-sm text-text-secondary">
          <strong>Note:</strong> This is a template page. Connect these settings to your application logic.
        </p>
      </div>
    </div>
  );
}

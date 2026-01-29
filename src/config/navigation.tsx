import { ReactNode } from 'react';
import { Home, Settings, FileText, HelpCircle } from 'lucide-react';

/**
 * Navigation item definition.
 */
export interface NavItem {
  /** Unique identifier */
  id: string;
  /** Link destination */
  href: string;
  /** Icon to display */
  icon: ReactNode;
  /** Label (shown on hover in sidebar, displayed in header) */
  label: string;
}

/**
 * Sidebar navigation items.
 * Edit this array to customize the left navigation.
 */
export const sidebarNavItems: NavItem[] = [
  { id: 'home', href: '/', icon: <Home size={24} />, label: 'Home' },
  { id: 'docs', href: '/docs', icon: <FileText size={24} />, label: 'Documentation' },
  { id: 'settings', href: '/settings', icon: <Settings size={24} />, label: 'Settings' },
  { id: 'help', href: '/help', icon: <HelpCircle size={24} />, label: 'Help' },
];

/**
 * Header navigation items.
 * Edit this array to customize the top navigation links.
 */
export const headerNavItems: NavItem[] = [
  { id: 'home', href: '/', icon: <Home size={16} />, label: 'Home' },
  { id: 'about', href: '/about', icon: <FileText size={16} />, label: 'About' },
];

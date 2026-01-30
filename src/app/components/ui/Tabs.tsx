'use client';

import { useState, ReactNode, createContext, useContext } from 'react';
import { cn } from '@/app/utils';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export interface TabsProps {
  /** Default active tab ID */
  defaultTab: string;
  /** Tab content */
  children: ReactNode;
  /** Additional className */
  className?: string;
}

export interface TabListProps {
  /** Tab buttons */
  children: ReactNode;
  /** Additional className */
  className?: string;
}

export interface TabProps {
  /** Unique tab ID */
  id: string;
  /** Tab label */
  children: ReactNode;
  /** Disabled state */
  disabled?: boolean;
}

export interface TabPanelProps {
  /** Tab ID this panel belongs to */
  id: string;
  /** Panel content */
  children: ReactNode;
  /** Additional className */
  className?: string;
}

/**
 * Tabs container component.
 *
 * @example
 * ```tsx
 * <Tabs defaultTab="tab1">
 *   <TabList>
 *     <Tab id="tab1">Tab 1</Tab>
 *     <Tab id="tab2">Tab 2</Tab>
 *   </TabList>
 *   <TabPanel id="tab1">Content 1</TabPanel>
 *   <TabPanel id="tab2">Content 2</TabPanel>
 * </Tabs>
 * ```
 */
export function Tabs({ defaultTab, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

/**
 * Container for tab buttons.
 */
export function TabList({ children, className }: TabListProps) {
  return (
    <div
      className={cn('flex border-b border-border', className)}
      role="tablist"
    >
      {children}
    </div>
  );
}

/**
 * Individual tab button.
 */
export function Tab({ id, children, disabled = false }: TabProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('Tab must be used within Tabs');

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === id;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
      disabled={disabled}
      onClick={() => setActiveTab(id)}
      className={cn(
        'px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors',
        isActive
          ? 'border-primary text-primary'
          : 'border-transparent text-text-secondary hover:text-text-primary hover:border-gray-light',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      {children}
    </button>
  );
}

/**
 * Tab panel content.
 */
export function TabPanel({ id, children, className }: TabPanelProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabPanel must be used within Tabs');

  const { activeTab } = context;
  const isActive = activeTab === id;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      className={cn('py-4', className)}
    >
      {children}
    </div>
  );
}

export default Tabs;

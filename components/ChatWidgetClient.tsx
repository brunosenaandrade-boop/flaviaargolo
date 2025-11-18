'use client';

import dynamic from 'next/dynamic';

// Lazy load ChatWidget only on client side
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), {
  loading: () => null // Don't show placeholder
});

export default function ChatWidgetClient() {
  return <ChatWidget />;
}

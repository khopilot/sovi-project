'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import ChatWindow with SSR disabled to prevent hydration issues
const ChatWindow = dynamic(() => import('./ChatWindow'), { 
  ssr: false,
  loading: () => null
})

export default function ChatWindowWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything on the server
  if (!mounted) {
    return null
  }

  return <ChatWindow />
} 
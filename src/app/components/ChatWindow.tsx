'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect, useRef } from 'react'
import styles from './ChatWindow.module.css'
import Image from 'next/image'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content: 'Hello! 👋 I\'m your Naga Balm assistant. How can I help you today? Feel free to ask about our products, their uses, or any other questions you might have.'
}

// Update to use the renamed logo file
const LOGO_ICON_PATH = '/images/Naga Balm__SecondaryLogomark_Black.png'

// Create a client-only chat interface
const ChatInterface = dynamic(() => Promise.resolve(({
  isOpen,
  onClose,
  messages,
  onSendMessage,
  isLoading,
  isTyping
}: {
  isOpen: boolean
  onClose: () => void
  messages: Message[]
  onSendMessage: (message: string) => void
  isLoading: boolean
  isTyping: boolean
}) => {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    onSendMessage(input)
    setInput('')
  }

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle escape key to close chat
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      const inputElement = document.querySelector<HTMLInputElement>(`.${styles.input}`)
      inputElement?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <Image 
          src={LOGO_ICON_PATH}
          alt="Naga Balm Assistant"
          width={30}
          height={30}
          className={styles.assistantLogo}
        />
        <span>Naga Balm Assistant</span>
        <button 
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close chat"
        >
          ×
        </button>
      </div>
      <div className={styles.messageList}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.role === 'user' ? styles.userMessage : styles.botMessage
            }`}
          >
            {message.role === 'assistant' && (
              <Image 
                src={LOGO_ICON_PATH}
                alt="Assistant"
                width={24}
                height={24}
                className={styles.messageAvatar}
              />
            )}
            <div className={styles.messageContent}>
              {message.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className={`${styles.message} ${styles.botMessage}`}>
            <Image 
              src={LOGO_ICON_PATH}
              alt="Assistant"
              width={24}
              height={24}
              className={styles.messageAvatar}
            />
            <div className={styles.typingIndicator}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Naga Balm products..."
          className={styles.input}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className={styles.sendButton} 
          disabled={isLoading || !input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  )
}), {
  ssr: false,
  loading: () => null
})

// Main component
export default function ChatWindow() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [hasShownWelcome, setHasShownWelcome] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Add welcome message when chat is first opened
  useEffect(() => {
    if (isOpen && !hasShownWelcome && messages.length === 0) {
      setIsTyping(true)
      // Simulate typing delay for welcome message
      setTimeout(() => {
        setMessages([WELCOME_MESSAGE])
        setIsTyping(false)
        setHasShownWelcome(true)
      }, 1000)
    }
  }, [isOpen, hasShownWelcome, messages.length])

  const handleSendMessage = async (content: string) => {
    const newMessage: Message = { role: 'user', content }
    setMessages(prev => [...prev, newMessage])
    setIsLoading(true)
    setIsTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, newMessage] })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }

      await new Promise(resolve => setTimeout(resolve, 500))
      setIsTyping(false)

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.content
      }
      
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      setIsTyping(false)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className={`${styles.container}`}>
      <button
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
        data-open={isOpen}
      >
        <Image 
          src={LOGO_ICON_PATH}
          alt="Naga Balm Chat"
          width={40}
          height={40}
          className={styles.logo}
          priority
        />
        {messages.length > 0 && !isOpen && (
          <span className={styles.unreadIndicator}>
            {messages.filter(m => m.role === 'assistant').length}
          </span>
        )}
      </button>

      <ChatInterface
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
        isTyping={isTyping}
      />
    </div>
  )
} 
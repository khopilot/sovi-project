'use client'

import { useState } from 'react'
import styles from './ChatWindow.module.css'

export default function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button
      className={styles.chatButton}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle chat"
    >
      Chat
    </button>
  )
} 
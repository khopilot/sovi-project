'use client'

import Image from 'next/image'
import styles from './ChatWindow.module.css'

interface ChatButtonProps {
  isOpen: boolean
  onClick: () => void
  unreadCount?: number
}

export function ChatButton({ isOpen, onClick, unreadCount = 0 }: ChatButtonProps) {
  return (
    <div className={styles.chatButtonContainer}>
      <button
        className={styles.chatButton}
        onClick={onClick}
        aria-label="Toggle chat"
      >
        <Image 
          src="/images/png/Naga Balm__SecondaryLogomark_Primary.png"
          alt="Naga Balm Chat"
          width={40}
          height={40}
          className={styles.logo}
          priority
        />
        {unreadCount > 0 && !isOpen && (
          <span className={styles.unreadIndicator}>
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  )
} 
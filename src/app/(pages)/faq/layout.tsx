import { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
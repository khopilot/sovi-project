import { Viewport } from 'next'
import { redirect } from 'next/navigation'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function RootPage() {
  redirect('/home')
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SuperMetro | Moving beyond boundaries, one ride at a time!',
  description: 'SuperMetro is a premium transport service provider offering transit, courier, charter, and insurance services across Nairobi and beyond. Book airport shuttles, track parcels, and explore our extensive travel network easily.',
  keywords: [
    'SuperMetro',
    'Transport Nairobi',
    'Transit services Kenya',
    'Courier services Nairobi',
    'Bus charter Kenya',
    'Airport shuttle booking',
    'SuperMetro Insurance',
    'Nairobi Transport Company',
    'Kenya Buses',
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

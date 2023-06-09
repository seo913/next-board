import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div>
        <Link href="/">SEOJAEMIN</Link>
        <Link href="/list" className='ml-3'>List</Link>
      </div>
        {children}</body>
    </html>
  )
}

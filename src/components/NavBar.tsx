// app/components/NavBar.tsx or wherever it lives
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav>
      <Link href="/" className={pathname === '/' ? 'current' : ''}>Home</Link>
      <Link href="/blog" className={pathname === '/blog' ? 'current' : ''}>Blog</Link>
      <Link href="/games" className={pathname === '/game' ? 'current' : ''}>Games</Link>
      <Link href="/projects" className={pathname === '/projects' ? 'current' : ''}>Projects</Link>
    </nav>
  )
}

// components/Header.tsx
'use client';  // Client Component because it handles navigation events

import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul style={styles.navList}>
          <li>
            <Link href="/" style={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" style={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" style={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  navList: {    
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    padding: '10px',
  },
  navLink: {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
    color: 'blue',
  },
};

import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ahammed Ali Shaik | Software Engineer',
  description: 'Portfolio of Ahammed Ali Shaik, a backend engineer focused on distributed systems, data-heavy APIs, and production reliability.',
}

const themeInitScript = `
(() => {
  try {
    const storedTheme = window.localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : systemPrefersDark
        ? 'dark'
        : 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  } catch (error) {}
})();
`

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

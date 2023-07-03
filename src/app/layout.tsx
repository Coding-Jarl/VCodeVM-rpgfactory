import font from '@/utils/font'
import { Header } from '@/components/Layout/Header'
import ThemeProviderWrapper from '@/providers/themeProvider'
import type { FC, ReactNode } from 'react'
import '@/styles/globals.scss'

export const metadata = {
  title: 'RPG Factory',
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProviderWrapper>
          <Header />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}

export default RootLayout

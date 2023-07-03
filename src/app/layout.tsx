import font from '@/utils/font'
import type { FC, ReactNode } from 'react'
import '@/styles/globals.scss'
import ThemeProviderWrapper from '@/providers/themeProvider'

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
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}

export default RootLayout

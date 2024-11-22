import { Inter } from "next/font/google"
import "./globals.css"
import { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Atieh Hamidi - Portfolio",
  description: "Personal portfolio and blog of Atieh Hamidi - Full Stack Developer",
  openGraph: {
    title: "Atieh Hamidi - Portfolio",
    description: "Personal portfolio and blog of Atieh Hamidi - Full Stack Developer",
    url: "https://atiehamidi.com",
    siteName: "Atieh Hamidi",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


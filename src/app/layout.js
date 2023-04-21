import './globals.css'

export const metadata = {
  title: 'Baldufa',
  description: 'Baldufa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

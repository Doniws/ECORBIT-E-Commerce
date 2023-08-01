
import { Inter } from 'next/font/google'
import "./styles/all.scss"
import "./styles/main.scss"
import "./styles/card.scss"

import "./assets/FontAwesome6Pro/pro/css/all.css"
import 'swiper/css/pagination';
import "swiper/css/navigation"
import 'swiper/css/scrollbar';
// Import Swiper styles
import { Roboto } from 'next/font/google'
import "swiper/css";
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export const metadata = {
  title: 'Eco Orbit',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
import React from 'react'
import "../styles/product.scss"

export const metadata = {
    title : 'Product Name',
    description : 'Product Description'
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
        <body>
            {children}
        </body>
    </html>
  )
}

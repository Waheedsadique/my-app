"use client" 
import './globals.css'


import Header from 'components/header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <head />
      <body >
       <div className='bg-[rgb(36,36,36)] text-white'> 
<Header/>
</div>
      
        {children}
        </body>
        
    </html>
  )
}

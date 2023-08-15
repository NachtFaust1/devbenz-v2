import './globals.css'
import toast, { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Nacht Faust - Full Stack Developer',
  description: 'Hey there, I\'m Nacht Faust, a 19 year old developer working for Omega Studios.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"></link>
        <link rel="icon" href="https://i.imgur.com/yU9FMcP.png"/>
      </head>
      <body>
        <Toaster position='bottom-right' reverseOrder={false} />
        {children}
      </body>
    </html>
  )
}

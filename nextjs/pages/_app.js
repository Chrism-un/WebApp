import App from 'next/app'
import { CookiesProvider } from "react-cookie"

import 'react-notifications/lib/notifications.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}
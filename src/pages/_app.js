import '../index.css'
import LayoutShell from '../components/LayoutShell'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <LayoutShell>{page}</LayoutShell>)
  return getLayout(<Component {...pageProps} />)
}

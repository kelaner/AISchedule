import '@/styles/globals.css'
import Head from 'next/head'
import { ConfigProvider, App as Ap } from 'antd'
import 'antd/dist/reset.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>AISchedule Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ConfigProvider>
                <Ap>
                    <Component {...pageProps} />
                </Ap>
            </ConfigProvider>
        </>
    )
}

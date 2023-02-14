import '@/styles/globals.css'
import Head from 'next/head'
import { ConfigProvider,Menu,Breadcrumb, App as Ap } from 'antd'
import 'antd/dist/reset.css'
import MenuProps from '@/components/MenuProps'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>AISchedule System</title>
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
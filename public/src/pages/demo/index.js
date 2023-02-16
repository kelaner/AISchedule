import Head from 'next/head'
import { ConfigProvider, App as Ap } from 'antd';
import dayjs from 'dayjs';
import zhCN from 'antd/locale/zh_CN';
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'
// avoid dynamic error
const TimeCTable = dynamic(() => import('@/components/TimeCTable'), {
    ssr: false,
})
dayjs.locale('zh-cn');

export default function Home() {
    return (
        <>
            <Head>
                <title>AISchedule Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <ConfigProvider locale={zhCN}>
                    <Ap>
                        
                            <div className={styles.byday}>
                                <TimeCTable />
                            </div>
                        
                        
                    </Ap>
                </ConfigProvider>
            </ main>
        </>
    )
}

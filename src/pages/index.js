import Head from 'next/head'
import { ConfigProvider, App as Ap } from 'antd';
import dayjs from 'dayjs';
import zhCN from 'antd/locale/zh_CN';
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
// import StoreSelect from "@/components/StoreSelect";
// import MainRadio from '@/components/MainRadio';
// import WeekRadio from "@/components/WeekRadio"

// avoid dynamic error
const StoreSelect = dynamic(() => import('../components/StoreSelect'), {
    ssr: false,
})

const MainRadio = dynamic(() => import('../components/MainRadio'), {
    ssr: false,
})

const WeekRadio = dynamic(() => import('../components/WeekRadio'), {
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
                        <div className={styles.storeSelect}><StoreSelect /></div>
                        <div className={styles.radio}>

                            <MainRadio />
                        </div>


                        <div className={styles.week}>
                            <WeekRadio />
                        </div>




                    </Ap>
                </ConfigProvider>
            </ main>
        </>
    )
}

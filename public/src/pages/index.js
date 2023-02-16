import Head from 'next/head'
import { ConfigProvider, App as Ap } from 'antd';
import dayjs from 'dayjs';
import zhCN from 'antd/locale/zh_CN';
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
// import TimeCTable from '@/components/TimeCTable';
// import StoreSelect from "@/components/StoreSelect";
// import MainRadio from '@/components/MainRadio';
// import WeekRadio from "@/components/WeekRadio"

// avoid dynamic error
const StoreSelect = dynamic(() => import('../components/StoreSelect'), {
    ssr: false,
})
const ThreeSelect = dynamic(() => import('../components/ThreeSelect'), {
    ssr: false,
})
const MainRadio = dynamic(() => import('../components/MainRadio'), {
    ssr: false,
})
const WeekRadio = dynamic(() => import('../components/WeekRadio'), {
    ssr: false,
})
const ScheduleTable = dynamic(() => import('@/components/ScheduleTable'), {
    ssr: false,
})

const DeleteButton = dynamic(() => import('@/components/DeleteButton'), {
    ssr: false,
})

const EditButton = dynamic(() => import('@/components/EditButton'), {
    ssr: false,
})
const TimeCTable = dynamic(() => import('@/components/TimeCTable'), {
    ssr: false,
})
dayjs.locale('zh-cn');

export default function Home() {
    const now = dayjs();
    const yearmonth = now.format('YYYY年MM月');
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
                        <div className={styles.yearMonth}>
                            {yearmonth}
                        </div>
                        <div className={styles.secondcom}>
                            <MainRadio />
                            <div className={styles.none}>&emsp;</div>
                            <div className={styles.week}>
                                <WeekRadio />
                            </div>
                        </div>
                        <div className={styles.three}>
                            <ThreeSelect />
                        </div>
                        
                        <div className={styles.edit}>
                            <DeleteButton /> <EditButton />
                        </div>
                        <div className={styles.table}>
                            <ScheduleTable />
                        </div>
                        
                    </Ap>
                </ConfigProvider>
            </ main>
        </>
    )
}

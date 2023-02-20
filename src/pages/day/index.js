import Head from 'next/head'
import { ConfigProvider, App as Ap } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import styles from '@/styles/Home.module.css'
import dayjs from 'dayjs';
dayjs.locale('zh-cn');

// avoid dynamic error
import dynamic from 'next/dynamic'
const StoreSelect = dynamic(() => import('@/components/StoreSelect'), { ssr: false })
const ThreeSelect = dynamic(() => import('@/components/ThreeSelect'), { ssr: false })
const MainRadio = dynamic(() => import('@/components/MainRadio'), { ssr: false })
const WeekRadio = dynamic(() => import('@/components/WeekRadio'), { ssr: false })
const DaySchedule = dynamic(() => import('@/components/DaySchedule'), { ssr: false })
const DeleteButton = dynamic(() => import('@/components/DeleteButton'), { ssr: false })
const EditButton = dynamic(() => import('@/components/EditButton'), { ssr: false })


export default function Home() {
    const now = dayjs();
    const yearmonth = now.format('YYYY年MM月');

    const data = [
        {
            personName: '张三',
            schedule: [
                { start: '2023-02-16 06:00', end: '2023-02-16 08:00' },
                { start: '2023-02-16 12:00', end: '2023-02-16 13:00' },
                // ...
            ],
        },
        {
            personName: '李四',
            schedule: [
                { start: '2023-02-16 07:00', end: '2023-02-16 09:00' },
                { start: '2023-02-16 14:00', end: '2023-02-16 15:00' },
                // ...
            ],
        },
        // ...
    ];


    return (
        <>

            <DaySchedule data={data} />

        </>
    )
}

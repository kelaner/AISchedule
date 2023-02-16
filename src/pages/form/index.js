import React from "react";
import dayjs from 'dayjs';
import zhCN from 'antd/locale/zh_CN';
import ScheduleForm from "@/components/ScheduleForm";
import { ConfigProvider, App as Ap } from 'antd';


import dynamic from 'next/dynamic'

const ScheduleTable = dynamic(() => import('@/components/ScheduleTable'), {
    ssr: false,
})

dayjs.locale('zh-cn');


export default function Home() {
    return (
        <>
            <div>
                <ConfigProvider locale={zhCN}>
                    <Ap>
                        <ScheduleTable />
                    </Ap>
                </ConfigProvider>
            </div>
        </>
    )
}
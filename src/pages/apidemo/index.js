import React from "react";
import dayjs from 'dayjs';
dayjs.locale('zh-cn');
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider, App as Ap } from 'antd';
import dynamic from 'next/dynamic'
const ScheduleForm = dynamic(() => import('@/components/ScheduleForm'), {
    ssr: false,
})

import request from '@/lib/request';
export async function getServerSideProps() {
    const stores = await request.get('/api/stores?populate=*');
    const data = stores.data;

    return {
        props: {
            data
        }
    };
}

export default function Home({ data }) {
    console.log(data)

    return (
        <>
            <div>
                <ConfigProvider locale={zhCN}>
                    <Ap>
                        <div>
                            {JSON.stringify(data)}
                        </div>
                    </Ap>
                </ConfigProvider>
            </div>
        </>
    )
}
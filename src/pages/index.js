import Head from 'next/head'
import { useEffect, useState } from 'react';
import { ConfigProvider, App as Ap } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import styles from '@/styles/Home.module.css'
import dayjs from 'dayjs';
dayjs.locale('zh-cn');

// avoid dynamic error
import dynamic from 'next/dynamic'
const StoreSelect = dynamic(() => import('@/components/group/StoreSelect'), { ssr: false })
const ThreeSelect = dynamic(() => import('@/components/group/ThreeSelect'), { ssr: false })
const MainRadio = dynamic(() => import('@/components/MainRadio'), { ssr: false })
const WeekRadio = dynamic(() => import('@/components/WeekRadio'), { ssr: false })
const ScheduleTable = dynamic(() => import('@/components/ScheduleTable'), { ssr: false })
const DeleteButton = dynamic(() => import('@/components/DeleteButton'), { ssr: false })
const EditButton = dynamic(() => import('@/components/EditButton'), { ssr: false })
const YearMonth = dynamic(() => import('@/components/YearMonth'), { ssr: false })
const NameSelect = dynamic(() => import('@/components/group/NameSelect'), { ssr: false })
const PositionSelect = dynamic(() => import('@/components/group/PositionSelect'), { ssr: false })
const SkillSelect = dynamic(() => import('@/components/group/SkillSelect'), { ssr: false })




export default function Home() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleThreeSelectChange = (value) => {
        setSelectedOption(value);
    };

    let selectComponent;

    switch (selectedOption) {
        case 'name':
            selectComponent = <NameSelect />;
            break;
        case 'position':
            selectComponent = <PositionSelect />;
            break;
        case 'skill':
            selectComponent = <SkillSelect />;
            break;
        default:
            selectComponent = null;
            break;
    }

    const [valueToDelete, setValueToDelete] = useState(false);
    const [isDanger, setIsDanger] = useState(false);

    const handleDelete = () => {
        if (valueToDelete == false) {
            setValueToDelete(true);
            setIsDanger(true)
            console.log('触发删除');
        } else {
            setValueToDelete(false);
            setIsDanger(false)
            console.log('关闭删除');
        }
    }

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
                            <YearMonth />
                        </div>
                        <div className={styles.secondcom}>
                            <MainRadio />
                            <div className={styles.none}>&emsp;</div>
                            <div className={styles.week}>
                                <WeekRadio />
                            </div>
                        </div>
                        <div className={styles.three}>
                            <ThreeSelect onChange={handleThreeSelectChange} />
                            {selectComponent}
                        </div>
                        <div className={styles.edit}>
                            <DeleteButton
                                isDanger={isDanger}
                                onClick={handleDelete}
                            />
                            <EditButton

                            />
                        </div>
                        <div className={styles.table}>
                            <ScheduleTable
                                valueToDelete={valueToDelete}
                            />
                        </div>
                    </Ap>
                </ConfigProvider>
            </ main>
        </>
    )
}

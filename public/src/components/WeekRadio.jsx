import dayjs from 'dayjs';
import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

function WeekRadio() {
    const [start, setStart] = useState(dayjs().startOf('week'));
    const [end, setEnd] = useState(dayjs().endOf('week'));

    const prevWeek = () => {
        setStart(start.subtract(1, 'week'));
        setEnd(end.subtract(1, 'week'));
    };

    const nextWeek = () => {
        setStart(start.add(1, 'week'));
        setEnd(end.add(1, 'week'));
    };

    return (
        <>
            <div className={styles.weekRadio}>
                <Button
                    type='text'
                    size='large'
                    onClick={prevWeek}
                ><strong>&lt;</strong></Button>
                <div>
                    周一 -- 周日<br />
                    {start.subtract(1, 'week').format('MM月DD日')} -- {end.subtract(1, 'week').format('MM月DD日')}
                </div>
                <div>
                    周一 -- 周日<br />
                    {start.format('MM月DD日')} -- {end.format('MM月DD日')}
                </div>
                <div>
                    周一 -- 周日<br />
                    {start.add(1, 'week').format('MM月DD日')} -- {end.add(1, 'week').format('MM月DD日')}
                </div>

                <Button
                    type='text'
                    size='large'
                    onClick={nextWeek}
                ><strong>&gt;</strong></Button>
            </div>
        </>
    )
};

export default WeekRadio;
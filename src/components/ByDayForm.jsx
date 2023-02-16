import React from 'react';
import styles from '../styles/Byday.module.css';
import dayjs from 'dayjs';

const today=dayjs().day();
const timeInterval = (start, end) => {
    const t1 = new Date(`2023-02-16${start}`);
    const t2 = new Date(`2023-02-16${end}`);
    const interval = t2.getTime() - t1.getTime();
    if (interval < 0) return 0;
    return (interval / 1000 / 60 / 60).toFixed(2)
}

const ByDayForm = (props) => {

    const staffRows = [
        { key: 'A' },
        { key: 'B' },
        { key: 'C' },
        { key: 'D' },
        { key: 'E' },
        { key: 'F' },
        { key: 'G' },
    ];

    const { dataSource = [
        {
            staff: 'A',
            data: [{
                key: 1,
                title: '123',
                start: '09:00:00',
                end: '10:00:00'
            }],
        },
        {
            staff: 'B',
            data: [{
                key: "C",
                title: '123',
                start: '11:00:00',
                end: '13:00:00'
            }],
        }

    ] } = props;

    return (
        <div className={styles.meetingCard}>
            <div className={styles.rowHead}>
                <div className={styles.staff}>A</div>
                <div className={styles.staff}>B</div>
                <div className={styles.staff}>C</div>
                <div className={styles.staff}>D</div>
                <div className={styles.staff}>E</div>
                <div className={styles.staff}>F</div>
                <div className={styles.staff}>G</div>
            </div>
            <div className={styles.rowBody} >
                <table className={styles.table}>
                    {staffRows.map(weekday => (
                        <tr key={weekday.key} className={styles.tr}>
                            <td className={styles.td}></td><td className={styles.td}></td><td className={styles.td}></td>
                            <td className={styles.td}></td><td className={styles.td}></td><td className={styles.td}></td>
                            <td className={styles.td}></td><td className={styles.td}></td><td className={styles.td}></td>
                            <td className={styles.td}></td><td className={styles.td}></td><td className={styles.td}></td>
                            {dataSource.find(data => data.day === weekday.key) ?
                                dataSource.find(data => data.day === weekday.key).data.map(
                                    (task) => (
                                        <div key={task.key} className={styles.meetingSpan}
                                            style={{
                                                width: `${100 / 12 * timeInterval(task.start, task.end)}%`,
                                                left: `${100 / 12 * timeInterval('08:00:00', task.start)}%`,
                                            }} />
                                    )
                                ) : <></>}
                        </tr>
                    ))}
                </table>
                <div className={styles.timeCard}>
                    <span className={styles.timeSpan}>8:00</span>
                    <span className={styles.timeSpan}>10:00</span>
                    <span className={styles.timeSpan}>12:00</span>
                    <span className={styles.timeSpan}>14:00</span>
                    <span className={styles.timeSpan}>16:00</span>
                    <span className={styles.timeSpan}>18:00</span>
                </div>
            </div>
        </div>
    );
};

export default ByDayForm
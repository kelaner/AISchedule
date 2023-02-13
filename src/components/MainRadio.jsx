import { Radio } from 'antd';
import dayjs from 'dayjs';
import styles from '../styles/Home.module.css';

dayjs.locale('zh-cn');

const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
};

const now = dayjs();
const yearMonth = now.format('YYYY年MM月');

const MainRadio = () => (
    <div className={styles.yearMonth}>
        {yearMonth}
        <Radio.Group onChange={onChange} defaultValue="week">
            <div className={styles.radioButton}>
            <Radio.Button value="day">按日查看</Radio.Button>
            <Radio.Button value="week">按周查看</Radio.Button>
            </div>
        </Radio.Group>
    </div>
);
export default MainRadio;
import dayjs from 'dayjs';

const now = dayjs();
const yearmonth = now.format('YYYY年M月');

const YearMonth = () => {
    return (
        <>
            {yearmonth}
        </>
    )
}

export default YearMonth;

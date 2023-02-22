import React, { useEffect, useState } from 'react';
import { Table, Input } from 'antd';
import dayjs from 'dayjs';

const today = dayjs().day();

const start = dayjs().startOf('week');
const end = dayjs().endOf('week');

const columns = [
    {
        title: <div> 周一<br />{start.format('M月D日')}</div>,
        dataIndex: 'mon',
        key: 'mon',
        align: 'center',
        onHeaderCell: () => {
            return {
                style: {
                    backgroundColor: 1 === today ? '#69aed0' : '',
                    border: `1px solid ${1 === today ? 'darkblue' : '#f0f0f0'}`,
                    color: 1 === today ? 'white' : 'black',
                },
            };
        },
    },
    {
        title: <div> 周二<br />{start.add(1, 'day').format('M月D日')}</div>,
        dataIndex: 'tue',
        key: 'tue',
        align: 'center',
        onHeaderCell: () => {
            return {
                style: {
                    backgroundColor: 2 === today ? '#69aed0' : '',
                    border: `1px solid ${2 === today ? 'darkblue' : '#f0f0f0'}`,
                    color: 2 === today ? 'white' : 'black',
                },
            };
        },
    },
    {
        title: <div> 周三<br />{start.add(2, 'day').format('M月D日')}</div>,
        dataIndex: 'wed',
        key: 'wed',
        align: 'center',
        onHeaderCell: () => {
            return {
                style: {
                    backgroundColor: 3 === today ? '#69aed0' : '',
                    border: `1px solid ${3 === today ? 'darkblue' : '#f0f0f0'}`,
                    color: 3 === today ? 'white' : 'black',
                },
            };
        },
    },
    {
        title: <div> 周四<br />{start.add(3, 'day').format('M月D日')}</div>,
        dataIndex: 'thu',
        key: 'thu',
        align: 'center',
        onHeaderCell: () => {
            return {
                style: {
                    backgroundColor: 4 === today ? '#69aed0' : '',
                    border: `1px solid ${4 === today ? 'darkblue' : '#f0f0f0'}`,
                    color: 4 === today ? 'white' : 'black',
                },
            };
        },
    },
    {
        title: <div> 周五<br />{start.add(4, 'day').format('M月D日')}</div>,
        dataIndex: 'fri',
        key: 'fri',
        align: 'center',
        onHeaderCell: () => {
            return {
                style: {
                    backgroundColor: 5 === today ? '#69aed0' : '',
                    border: `1px solid ${5 === today ? 'darkblue' : '#f0f0f0'}`,
                    color: 5 === today ? 'white' : 'black',
                },
            };
        },
    },
    {
        title: <div> 周六<br />{start.add(5, 'day').format('M月D日')}</div>,
        dataIndex: 'sat',
        key: 'sat',
        align: 'center',
        onHeaderCell: () => {
            return {
                style: {
                    backgroundColor: 6 === today ? '#69aed0' : '',
                    border: `1px solid ${6 === today ? 'darkblue' : '#f0f0f0'}`,
                    color: 6 === today ? 'white' : 'black',
                },
            };
        },
    },
    {
        title: <div> 周日<br />{end.format('M月D日')}</div>,
        dataIndex: 'sun',
        key: 'sun',
        align: 'center',
        onHeaderCell: () => {
            return {
                style: {
                    backgroundColor: 0 === today ? '#69aed0' : '',
                    border: `1px solid ${0 === today ? 'darkblue' : '#f0f0f0'}`,
                    color: 0 === today ? 'white' : 'black',
                },
            };
        },
    },
];


const TableRow = ({ workTime, name, position, toDelete }) => {
    const [w, setW] = useState(workTime);
    const [n, setN] = useState(name);
    const [p, setP] = useState(position);

    const onDelete = () => {
        console.log(toDelete)
        if (toDelete) {
            console.log('delete:' + name);
            setN(null)
        }
    };

    return (
        <>
            {n ? (
                <div style={{
                    cursor: "pointer",
                }}
                >
                    <Input
                        placeholder="工作时间"
                        value={w}
                        onClick={onDelete}
                        // onChange={(e) => setW(e.target.value)}
                        style={{
                            textAlign: 'center',
                            cursor: "pointer",
                            caretColor: 'transparent'
                        }}
                        bordered={false}
                    />
                    <br />
                    <Input
                        placeholder="姓名"
                        value={n}
                        onClick={onDelete}
                        // onChange={(e) => setN(e.target.value)}
                        style={{
                            textAlign: 'center',
                            cursor: "pointer",
                            caretColor: 'transparent'
                        }}
                        bordered={false}
                    />
                    <br />
                    <Input
                        placeholder="职位"
                        value={p}
                        onClick={onDelete}
                        // onChange={(e) => setP(e.target.value)}
                        style={{
                            textAlign: 'center',
                            cursor: "pointer",
                            caretColor: 'transparent'
                        }}
                        bordered={false}
                    />
                </div>
            ) : (
                <div style={{
                    textAlign: 'center',
                    cursor: "pointer",
                }}
                // onClick={() => console.log('change')}
                >
                    开放班次
                </div>
            )}
        </>
    );
};
const ScheduleTable = ({ valueToDelete }) => {
    useEffect(() => {
        setTableData([
            {
                key: '1',
                mon: <TableRow workTime="9:00-17:00" name="张三" position="经理" toDelete={valueToDelete} />,
                tue: <TableRow workTime="9:00-17:00" name={null} />,
                wed: <TableRow workTime="9:00-17:00" name="王五" position="员工" toDelete={valueToDelete} />,
                thu: <TableRow workTime="9:00-17:00" name="赵六" position="员工" toDelete={valueToDelete} />,
                fri: <TableRow workTime="9:00-17:00" name="孙七" position="主管" toDelete={valueToDelete} />,
                sat: <TableRow workTime="9:00-17:00" name={null} />,
                sun: <TableRow workTime="9:00-17:00" name="吴九" position="经理" toDelete={valueToDelete} />,
            },
            {
                key: '2',
                mon: <TableRow workTime="9:00-17:00" name="张三" position="经理" toDelete={valueToDelete} />,
                tue: <TableRow workTime="9:00-17:00" name="李四" position="主管" toDelete={valueToDelete} />,
                wed: <TableRow workTime="9:00-17:00" name={null} />,
                thu: <TableRow workTime="9:00-17:00" name="赵六" position="员工" toDelete={valueToDelete} />,
                fri: <TableRow workTime="9:00-17:00" name={null} />,
                sat: <TableRow workTime="9:00-17:00" name="周八" position="员工" toDelete={valueToDelete} />,
                sun: <TableRow workTime="9:00-17:00" name="吴九" position="经理" toDelete={valueToDelete} />,
            },
            {
                key: '3',
                mon: <TableRow workTime="9:00-17:00" name="张三" position="经理" toDelete={valueToDelete} />,
                tue: <TableRow workTime="9:00-17:00" name={null} />,
                wed: <TableRow workTime="9:00-17:00" name="王五" position="员工" toDelete={valueToDelete} />,
                thu: <TableRow workTime="9:00-17:00" name="赵六" position="员工" toDelete={valueToDelete} />,
                fri: <TableRow workTime="9:00-17:00" name="孙七" position="主管" toDelete={valueToDelete} />,
                sat: <TableRow workTime="9:00-17:00" name={null} />,
                sun: <TableRow workTime="9:00-17:00" name="吴九" position="经理" toDelete={valueToDelete} />,
            },
        ])
    }, [valueToDelete])


    const [tableData, setTableData] = useState(null);

    return (
        <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
            bordered={true}
        />
    );
};

export default ScheduleTable;

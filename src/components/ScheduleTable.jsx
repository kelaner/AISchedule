import React, { useState } from 'react';
import { Table, Input, Button, Select } from 'antd';

const columns = [
    {
        title: '周一',
        dataIndex: 'mon',
        key: 'mon',
        align: 'center'
    },
    {
        title: '周二',
        dataIndex: 'tue',
        key: 'tue',
        align: 'center'
    },
    {
        title: '周三',
        dataIndex: 'wed',
        key: 'wed',
        align: 'center'
    },
    {
        title: '周四',
        dataIndex: 'thu',
        key: 'thu',
        align: 'center'
    },
    {
        title: '周五',
        dataIndex: 'fri',
        key: 'fri',
        align: 'center'
    },
    {
        title: '周六',
        dataIndex: 'sat',
        key: 'sat',
        align: 'center'
    },
    {
        title: '周日',
        dataIndex: 'sun',
        key: 'sun',
        align: 'center'
    },
];


const TableRow = ({ workTime, name, position }) => {
    const [w, setW] = useState(workTime);
    const [n, setN] = useState(name);
    const [p, setP] = useState(position);

    return (
        <>
            {name ? (
                <>
                    <Input
                        placeholder="工作时间"
                        value={w}
                        onChange={(e) => setW(e.target.value)}
                        style={{ textAlign: 'center' }}
                        bordered={false}
                    />
                    <Input
                        placeholder="姓名"
                        value={n}
                        onChange={(e) => setN(e.target.value)}
                        style={{ textAlign: 'center' }}
                        bordered={false}
                    />
                    <Input
                        placeholder="职位"
                        value={p}
                        onChange={(e) => setP(e.target.value)}
                        style={{ textAlign: 'center' }}
                        bordered={false}
                    />
                </>
            ) : (
                <div style={{
                    textAlign: 'center',
                    cursor: "pointer",
                }}
                    onClick={() => console.log('change')}
                >
                    开放班次
                </div>
            )}
        </>
    );
};
const ScheduleTable = () => {
    const [tableData, setTableData] = useState([
        {
            key: '1',
            mon: <TableRow workTime="9:00-17:00" name="张三" position="经理" />,
            tue: <TableRow workTime="9:00-17:00" name={null} />,
            wed: <TableRow workTime="9:00-17:00" name="王五" position="员工" />,
            thu: <TableRow workTime="9:00-17:00" name="赵六" position="员工" />,
            fri: <TableRow workTime="9:00-17:00" name="孙七" position="主管" />,
            sat: <TableRow workTime="9:00-17:00" name={null} />,
            sun: <TableRow workTime="9:00-17:00" name="吴九" position="经理" />,
        },
        {
            key: '2',
            mon: <TableRow workTime="9:00-17:00" name="张三" position="经理" />,
            tue: <TableRow workTime="9:00-17:00" name="李四" position="主管" />,
            wed: <TableRow workTime="9:00-17:00" name={null} />,
            thu: <TableRow workTime="9:00-17:00" name="赵六" position="员工" />,
            fri: <TableRow workTime="9:00-17:00" name={null} />,
            sat: <TableRow workTime="9:00-17:00" name="周八" position="员工" />,
            sun: <TableRow workTime="9:00-17:00" name="吴九" position="经理" />,
        },
        {
            key: '3',
            mon: <TableRow workTime="9:00-17:00" name="张三" position="经理" />,
            tue: <TableRow workTime="9:00-17:00" name={null} />,
            wed: <TableRow workTime="9:00-17:00" name="王五" position="员工" />,
            thu: <TableRow workTime="9:00-17:00" name="赵六" position="员工" />,
            fri: <TableRow workTime="9:00-17:00" name="孙七" position="主管" />,
            sat: <TableRow workTime="9:00-17:00" name={null} />,
            sun: <TableRow workTime="9:00-17:00" name="吴九" position="经理" />,
        },
    ]);

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

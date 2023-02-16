import { Select, Space } from 'antd';

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const ThreeSelect = () => (
    <Space wrap>
        <Select
            defaultValue="按职位分组"
            style={{
                width: 130,
                textAlign: 'center',                
            }}
            onChange={handleChange}
            options={[
                {
                    value: '按职位分组',
                    label: '按职位分组',
                },
                {
                    value: '按技能分组',
                    label: '按技能分组',
                },
                {
                    value: '按员工分组',
                    label: '按员工分组',
                },
            ]}
        />
    </Space>
);

export default ThreeSelect;
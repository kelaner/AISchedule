import { Select, Space } from 'antd';

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const StoreSelect = () => (
    <Space wrap>
        <Select
            defaultValue="1号门店"
            size='large'
            style={{
                width: 130,
                textAlign: 'center',
            }}
            onChange={handleChange}
            options={[
                {
                    value: '1号门店',
                    label: '1号门店',
                },
                {
                    value: '2号门店',
                    label: '2号门店',
                },
                {
                    value: '3号门店',
                    label: '3号门店',
                },
            ]}
        />
    </Space>
);

export default StoreSelect;
import { Select, Space } from 'antd';


function ThreeSelect({ onChange }) {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        onChange(value);
    };

    return (
        <>
            <Space wrap>
                <Select
                    placeholder="选择分组方式"
                    style={{
                        width: 130,
                        textAlign: 'center',
                    }}
                    allowClear='true'
                    onChange={handleChange}
                    options={[
                        {
                            value: 'position',
                            label: '按职位分组',
                        },
                        {
                            value: 'skill',
                            label: '按技能分组',
                        },
                        {
                            value: 'name',
                            label: '按员工分组',
                        },
                    ]}
                />
            </Space>

        </>
    )

}

export default ThreeSelect;
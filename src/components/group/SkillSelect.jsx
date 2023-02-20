import { Select } from 'antd';
const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};
const SkillSelect = () => (
    <Select
        showSearch
        placeholder="选择技能"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
            {
                value: 'cashier',
                label: '收银',
            },
            {
                value: 'guide',
                label: '导购',
            },
            {
                value: 'storehouse',
                label: '库房',
            },
        ]}
    />
);
export default SkillSelect;
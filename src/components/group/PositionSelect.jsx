import { Select } from 'antd';
const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};
const NameSelect = () => (
    <Select
        showSearch
        placeholder="选择职位"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
            {
                value: 'manager',
                label: '门店经理',
            },
            {
                value: 'assistantManager',
                label: '副经理',
            },
            {
                value: 'leader',
                label: '小组长',
            },
            {
                value: 'staff',
                label: '员工',
            }
        ]}
    />
);
export default NameSelect;
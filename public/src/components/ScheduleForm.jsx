import React, { useState } from 'react';
import { Form, Input, DatePicker, TimePicker, Button } from 'antd';

const ScheduleForm = () => {
    const [formData, setFormData] = useState({
        date: null,
        timePeriod: null,
        employeeName: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleDateChange = (date, dateString) => {
        setFormData({
            ...formData,
            date: dateString
        });
    };

    const handleTimeChange = (time, timeString) => {
        setFormData({
            ...formData,
            timePeriod: timeString
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        // 发送 API 请求到 Strapi 
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item label="日期">
                <DatePicker onChange={handleDateChange} />
            </Form.Item>
            <Form.Item label="时间段">
                <TimePicker onChange={handleTimeChange} />
            </Form.Item>
            <Form.Item label="员工姓名">
                <Input
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleInputChange}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ScheduleForm;

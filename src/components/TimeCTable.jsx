import { Tabs,TabPane } from "antd";
import React from "react";
const TimeCTable = () => {
    return (
        <>
         <Tabs size='large' defaultActiveKey="4">
            <TabPane tab="周日" key="1">周日</TabPane>
            <TabPane tab="周一" key="2">周一</TabPane>
            <TabPane tab="周二" key="3">周二</TabPane>
            <TabPane tab="周三" key="4">周三</TabPane>
            <TabPane tab="周四" key="5">周四</TabPane>
            <TabPane tab="周五" key="6">周五</TabPane>
            <TabPane tab="周六" key="7">周六</TabPane>
            {/* 此处利用antdesign组件，将一周的日期进行了罗列，从此处可以替换表格 */}

          </Tabs>
        </>
    )
}

export default TimeCTable;
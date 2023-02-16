import { Tabs,TabPane } from "antd";
import React from "react";
import ByDayForm from "./ByDayForm";
const TimeCTable = () => {
    return (
        <>
         <Tabs size='large' defaultActiveKey="4">
            <TabPane tab="周日" key="1"><ByDayForm /></TabPane>
            <TabPane tab="周一" key="2"><ByDayForm /></TabPane>
            <TabPane tab="周二" key="3"><ByDayForm /></TabPane>
            <TabPane tab="周三" key="4"><ByDayForm /></TabPane>
            <TabPane tab="周四" key="5"><ByDayForm /></TabPane>
            <TabPane tab="周五" key="6"><ByDayForm /></TabPane>
            <TabPane tab="周六" key="7"><ByDayForm /></TabPane>

          </Tabs>
        </>
    )
}

export default TimeCTable;
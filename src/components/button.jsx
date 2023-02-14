import React from "react";
import 'antd/dist/reset.css'
import { Space,Button } from 'antd'
const Wbutton = () => {
    return (
        <>
            <Space wrap className='beprimary'>
                
                {/* <Button>Default Button</Button> */}
                <Button type="dashed">删除</Button>
                <Button type="primary">编辑</Button>
                {/* <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button> */}
                {/* 此处是几种按钮的组件，如需使用，可以直接改变注释，同时，此处应预留有onclick功能，该功能将会实现页面的切换与改变 */}
            </Space>
        </>
    )
}

export default Wbutton;

import React from 'react'
import { Layout as AntdLayout, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, ProductOutlined } from '@ant-design/icons';

const { Header: AntdHeader } = AntdLayout;

const menuItems = [
    {
        key: "/",
        label: <Link to="/">Home</Link>,
        icon: <HomeOutlined />
    },
    {
        key: "/products",
        label: <Link to="/products">Products</Link>,
        icon: <ProductOutlined />
    },
]

export default function Header() {

    return (
        <AntdHeader
            style={{
                display: 'flex',
                alignItems: 'center',
                background: '#E5CCFF'
            }}
        >
            <div className="demo-logo" />
            <Menu
                mode="horizontal"
                items={menuItems}
                style={{
                    flex: 1,
                    minWidth: 0,
                    background: '#E5CCFF'
                }}
            >
            </Menu>
        </AntdHeader>
    )
}
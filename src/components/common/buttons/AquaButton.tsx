import React from 'react';
import { LoginOutlined, LogoutOutlined, FormOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface ButtonProps {
    title: string

}

let icons: { [key: string]: JSX.Element } = {
    "Sign Up" : <FormOutlined />,
    "Sign In" : <LoginOutlined />,
    "Sign Out" : <LogoutOutlined />,
}

/**
 * A component that renders a button with the given title.
 * The button will use the corresponding icon from the icons object.
 * @param title The title of the button
 * @returns A button with the given title and icon
 */
const AquaButton: React.FC<ButtonProps> = ({ title }) => {

    const icon = icons[title as keyof typeof icons];

    return (
        <Button type="primary" size="middle" icon={icon}>
            {title}
        </Button>
    );
};

export default AquaButton;
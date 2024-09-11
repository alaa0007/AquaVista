import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import classes from './errorPage.module.css';
const ErrorPages: React.FC = () => (
    <div className={classes.container}>
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={
                <Button type="primary"> 
                    <Link to="/">Back Home </Link>
                </Button>
            }
        />
    </div>
);

export default ErrorPages;
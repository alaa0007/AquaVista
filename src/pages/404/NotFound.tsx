import React from 'react';
import { Button, Result } from 'antd';
import classes from './notFound.module.css';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
    <div className={classes.container}>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary"> 
                    <Link to="/">Back Home </Link>
                </Button>
            }
        />
    </div>
);

export default NotFound;
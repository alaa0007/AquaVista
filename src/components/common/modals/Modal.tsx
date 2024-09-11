import React from 'react';
import {  Modal } from 'antd';

interface ModalProps {
    title: string
    toggle: boolean
    loading: boolean
    handleSubmit: () => void
    handleCancel: () => void
    childreen: React.ReactNode
}

const AquaModal: React.FC<ModalProps> = ({title, toggle,loading, handleSubmit, handleCancel , childreen}) => {

    return (
        <>
        <Modal
            title={title}
            open={toggle}
            onOk={handleSubmit}
            confirmLoading={loading}
            onCancel={handleCancel}
        >
            {childreen}
        </Modal>
        </>
    );
};

export default AquaModal;
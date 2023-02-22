import { Button } from 'antd';

const DeleteButton = ({ isDanger,onClick }) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <>
            <Button
                danger={isDanger}
                size={'large'}
                onClick={handleClick}
            >
                删除
            </Button>
        </>
    );
};
export default DeleteButton;
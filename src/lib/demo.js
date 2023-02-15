import request from '@/lib/request';

export async function getServerSideProps() {
    const stores = await request.get('/api/stores');
    const data = stores.data;

    return {
        props: {
            data
        }
    };
}

function Store({ data }) {
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
}

export default Store;
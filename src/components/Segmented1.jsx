
import { Button, Segmented, Space } from 'antd';
import { useState } from 'react';
const Segmented1 = () => {
  const [options, setOptions] = useState(['Daily', 'Weekly']);
  const [moreLoaded, setMoreLoaded] = useState(false);
  const handleLoadOptions = () => {
    setOptions((prev) => [...prev, 'Monthly', 'Quarterly', 'Yearly']);
    setMoreLoaded(true);
  };
  return (
    <Space direction='left-right'>
      <Segmented options={options} />
      <Button type="primary" disabled={moreLoaded} onClick={handleLoadOptions}>
        Load more options
      </Button>
    </Space>
  );
};
export default Segmented1;
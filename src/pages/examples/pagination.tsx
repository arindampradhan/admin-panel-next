import type { NextPage } from 'next';
import Background from '@/components/Background';
import Pagination from '@/components/Pagination';

const DesignSystem: NextPage = () => {
  return (
    <Background background="white ">
      <Pagination
        defaultSelectedIndex={3}
        pages={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      />
    </Background>
  );
};

export default DesignSystem;

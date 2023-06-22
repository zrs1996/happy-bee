import { Link, useLocation } from 'dumi';
import * as React from 'react';



const Logo: React.FC = () => {
  return (
    <h1>
      <Link to='/'>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
        <span>Happy Bee</span>
      </Link>
    </h1>
  );
};

export default Logo;

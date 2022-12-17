import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { message, Space, Button } from 'antd';

function Auth() {
  const [searchParams] = useSearchParams();
  localStorage.setItem(
    'redirect',
    searchParams.get('redirect') == null ? '/' : searchParams.get('redirect')
  );
  if (localStorage.getItem('redirect') != '/') {
    message.error('請先登入');
  }
  const is_gms = searchParams.get('gms') == null ? false : true;

  return (
    <div>
      <Space wrap>
        <Link to="/auth/google">
          <Button type="primary">Login with Google</Button>
        </Link>
        {is_gms ? '請使用 @gms.ndhu.edu.tw 結尾的帳號登入。' : ''}
      </Space>
    </div>
  );
}

export default Auth;

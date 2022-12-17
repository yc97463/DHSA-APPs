import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { message } from 'antd';

function Auth() {
  const [searchParams] = useSearchParams();
  localStorage.setItem(
    'redirect',
    searchParams.get('redirect') == null ? '/' : searchParams.get('redirect')
  );
  if (localStorage.getItem('redirect') != '/') {
    message.error('請先登入');
  }
  return <Link to="/auth/google">Login with Google</Link>;
}

export default Auth;

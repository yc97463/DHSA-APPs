import React from 'react';
import { Outlet } from 'react-router';
import { Layout, Menu } from 'antd';
import { Link, useSearchParams } from 'react-router-dom';
import '../style.css';

const { Header, Footer, Content } = Layout;

function App() {
  let hasToken = localStorage.getItem('token') != null ? true : false;
  const [searchParams] = useSearchParams();
  const is_fullscreen = searchParams.get('fs') == null ? false : true;
  if (is_fullscreen) {
    return (
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            // items={items1}
            className="nav"
          >
            <Link to="/">Home</Link>
            <Link to={hasToken ? '/auth?logout' : '/auth'}>
              {hasToken ? 'Logout' : 'Login'}
            </Link>
          </Menu>
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
export default App;

import React from 'react';
import { Outlet } from 'react-router';
import { Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
export default App;

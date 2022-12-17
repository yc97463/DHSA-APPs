import React from 'react';
import { Card } from 'antd';

function SaCard() {
  return (
    <div>
      <h1>This is a card.</h1>
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card
        size="small"
        title="Small size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

function checkStatus() {
  if (localStorage.getItem('token')) {
    return <SaCard />;
  } else {
    // <Navigate replace to="/auth?redirect=/card" />;
    // <Redirect to="/auth?redirect=/card" />;
    // return (window.location = '/auth?redirect=/card');
    return window.location.replace('/auth?gms&redirect=/card');
  }
}

export default checkStatus;

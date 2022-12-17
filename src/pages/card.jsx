import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

const endpoint = 'https://api.dhsa.ndhu.edu.tw';

function SaCard() {
  const [userInfo, setUserInfo] = useState('');
  useEffect(() => {
    async function getUserInfo() {
      const res = await fetch(endpoint + '/auth/token', {
        headers: {
          token: localStorage.getItem('token'),
        },
      }).then((res) => res.json());
      setUserInfo(res);
    }
    if (!userInfo) {
      getUserInfo();
    }
  }, []);
  const [membership, setMembership] = useState('');
  useEffect(() => {
    async function getMembership() {
      const res = await fetch(
        endpoint + '/card/membership/' + userInfo.email
      ).then((res) => res.json());
      setMembership(res);
    }
    if (!membership) {
      getMembership();
    }
  }, []);
  const [schoolStatus, setSchoolStatus] = useState('');
  useEffect(() => {
    async function getSchoolStatus() {
      const res = await fetch(endpoint + '/auth/ndhuLDAP', {
        headers: {
          token: localStorage.getItem('token'),
        },
      }).then((res) => res.json());
      setSchoolStatus(res);
    }
    if (!schoolStatus) {
      getSchoolStatus();
    }
  }, []);

  return (
    <div>
      <h1>This is a card.</h1>
      <Card
        title={userInfo.name}
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Name: {userInfo.name}</p>
        <p>ID: {userInfo.email}</p>
        <p>Membership: {membership.membership}</p>
        <p>Status: {schoolStatus.status}</p>
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

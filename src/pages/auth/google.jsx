import React from 'react';
import { useSearchParams } from 'react-router-dom';

// const params = new URLSearchParams(paramsString);
// const code = params.get('code');
// const endpoint = 'https://api.dhsa.ndhu.edu.tw';
const endpoint = 'http://localhost:8080';
const currentUrl =
  (location.host == 'localhost:3000' ? 'http://' : 'https://') +
  location.host +
  '/auth/google';
console.log(currentUrl);

function Authing() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const loginInfo = fetch(
    endpoint +
      '/auth/google?' +
      new URLSearchParams({
        code: code,
        redirect: currentUrl,
      })
  )
    .then((res) => res.json())
    .then((res) => localStorage.setItem('token', res.token));
  setTimeout(() => {
    window.location.replace(localStorage.getItem('redirect'));
  }, 2000);
  return <div>Authing...</div>;
}

function Guest() {
  const loginInfo = fetch(
    endpoint + '/auth/google?' + new URLSearchParams({ redirect: currentUrl })
  )
    .then((response) => response.json())
    .then((response) => window.location.replace(response.url));
  return;
}

function AuthGoogle() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  if (code) {
    return <Authing />;
  } else {
    return <Guest />;
  }
}

export default AuthGoogle;

import React, { useEffect, useState } from 'react';

function redirectToRpage() {
  return window.location.replace(
    'https://dhsa.ndhu.edu.tw/app/index.php?Plugin=school&Action=schoolresapp&Res=78'
  );
}
export default redirectToRpage;

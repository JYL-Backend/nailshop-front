import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };

    let map = new window.kakao.maps.Map(container, options);
  }, []);
  return <div className={'w-full flex-1'} id={'map'}></div>;
};

export default KakaoMap;

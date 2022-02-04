import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    try {
      const kakao = (window as any).kakao;
      let container = document.getElementById('map');
      let options = {
        center: new kakao.maps.LatLng(35.85133, 127.734086),
        level: 13,
      };

      let map = new kakao.maps.Map(container, options);
    } catch (e) {}
  }, []);
  return <div className={'w-full flex-1'} id={'map'}></div>;
};

export default KakaoMap;

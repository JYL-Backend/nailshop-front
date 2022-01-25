import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { notiStackAtom } from '../atom/snackbarAtom';
import { useSnackbar } from 'notistack';

const SnackbarHelper = () => {
  const [noti, setNoti] = useRecoilState(notiStackAtom);
  const snack = useSnackbar();
  useEffect(() => {
    snack.enqueueSnackbar(noti.msg, { variant: noti.variant, preventDuplicate: true });
  }, [noti]);
  return <></>;
};

export default SnackbarHelper;

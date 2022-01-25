import React from 'react';
import { useSnackbar } from 'notistack';

function useNoti(snackbar) {
  const notiSuccess = (msg: string) => {
    snackbar.enqueueSnackbar(msg, {
      variant: 'success',
      preventDuplicate: true,
    });
  };
  const notiError = (msg: string) => {
    snackbar.enqueueSnackbar(msg, { variant: 'error', preventDuplicate: true });
  };

  return [notiSuccess, notiError];
}

export default useNoti;

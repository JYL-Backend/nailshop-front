import { useRecoilState } from 'recoil';
import { notiStackAtom } from '../atom/snackbarAtom';

export function useNoti() {
  const [noti, setNoti] = useRecoilState(notiStackAtom);
  const snackbarSuccess = (msg: string) => {
    setNoti({
      msg: msg,
      variant: 'success',
    });
  };

  const snackbarError = (msg: string) => {
    setNoti({
      msg: msg,
      variant: 'error',
    });
  };

  const snackbarWarning = (msg: string) => {
    setNoti({
      msg: msg,
      variant: 'warning',
    });
  };

  const snackbarInfo = (msg: string) => {
    setNoti({
      msg: msg,
      variant: 'info',
    });
  };

  return [snackbarSuccess, snackbarError, snackbarInfo, snackbarWarning];
}

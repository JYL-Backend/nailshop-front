import { atom } from 'recoil';

export const notiStackAtom = atom({
  key: 'notiStackAtom',
  default: {
    msg: '',
    variant: '',
  },
});

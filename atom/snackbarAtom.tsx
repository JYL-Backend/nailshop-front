import { atom } from 'recoil';
import { VariantType } from 'notistack';

interface notiInterface {
  msg: string;
  variant: VariantType;
}

export const notiStackAtom = atom<notiInterface>({
  key: 'notiStackAtom',
  default: {
    msg: '',
    variant: 'default',
  },
});

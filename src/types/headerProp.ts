import { IconsType } from './iconsType';

export type HeaderProp = {
  leftIcon?: IconsType;
  rightIcon?: IconsType;
  leftIconPress?: () => void;
  rightIconPress?: () => void;
};

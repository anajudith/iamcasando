export interface IProps {
  onClick?: () => void;
  color?: string;
  size?: number[];
}

//   export interface IHelperProps extends IProps {
//     onMouseEnter?: () => void;
//     onMouseLeave?: () => void;
//   }

export interface IIconProps extends IProps {
  name: keyof IIcons;
}

//   export interface ICloseIcon extends IProps {
//     isAbsolute?: boolean;
//   }

export interface IIcons {
  chevronDownIcon: JSX.Element;
  chevronUpIcon: JSX.Element;
}

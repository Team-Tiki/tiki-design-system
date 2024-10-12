import { HTMLAttributes, ReactNode } from "react";

import { MenuVariant } from "../MenuList/MenuList";
import {
  containerStyle,
  textStyle,
  variantStyle,
} from "./MenuItem.style";

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  variant?: MenuVariant;
  onSelect: () => void;
  LeftIcon?: ReactNode;
}

const MenuItem = ({
  variant = "primary",
  LeftIcon,
  onSelect,
  children,
  ...props
}: MenuItemProps) => {
  return (
    <li
      role="button"
      tabIndex={0}
      css={[containerStyle, variantStyle(variant)]}
      onKeyDown={(e: React.KeyboardEvent<HTMLLIElement>) => {
        if (e.key === "Enter") onSelect;
      }}
      onClick={onSelect}
      {...props}
    >
      {LeftIcon}
      <p css={textStyle(variant)}>{children}</p>
    </li>
  );
};

export default MenuItem;

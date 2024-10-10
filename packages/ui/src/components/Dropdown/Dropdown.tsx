import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";

import Label from "../Label/Label";
import { containerStyle } from "./Dropdown.style";

interface DropdownContainerProps extends ComponentPropsWithoutRef<"div"> {
  label?: string;
}

const Dropdown = (
  { children, label, ...props }: DropdownContainerProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div ref={ref} css={containerStyle} {...props}>
      {label && <Label id={label}>{label}</Label>}
      {children}
    </div>
  );
};

export default forwardRef(Dropdown);

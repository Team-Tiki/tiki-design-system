import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";

import { containerStyle } from "ui/components/Dropdown/Dropdown.style";
import Label from "ui/components/Label/Label";

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

import { ComponentPropsWithoutRef } from "react";

import { textStyle } from "ui/components/Label/Label.style";

interface LabelProps extends ComponentPropsWithoutRef<"label"> {
  id: string;
}

const Label = ({ id, children }: LabelProps) => {
  return (
    <label css={textStyle} htmlFor={id}>
      {children}
    </label>
  );
};

export default Label;

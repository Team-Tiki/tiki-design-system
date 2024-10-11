import { ComponentPropsWithRef, ForwardedRef, forwardRef } from "react";

import { Dropdown, DropdownItem, DropdownList, DropdownTrigger } from "components/Dropdown";
import { itemStyle, overlayStyle } from "./Select.style";
import { scrollStyle } from "./style";

interface SelectProps extends Omit<ComponentPropsWithRef<"div">, "onSelect"> {
  isOpen?: boolean;
  trigger: JSX.Element;
  label?: string;
  onSelect?: (id: string) => void;
  options: string[];
}

const Select = (
  { isOpen, trigger, label, onSelect, options, ...props }: SelectProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <Dropdown ref={ref} role="listbox" label={label} {...props}>
      <DropdownTrigger as={trigger} />
      <DropdownList css={[overlayStyle, scrollStyle]} isOpen={isOpen}>
        {options.map((item) => (
          <DropdownItem
            key={item}
            css={itemStyle}
            onSelect={() => onSelect?.(item)}
          >
            {item}
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
};

export default forwardRef(Select);

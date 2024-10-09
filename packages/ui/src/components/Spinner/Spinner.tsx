import { colors } from "color";
import { IcSpinner } from "icon";
import { rotate } from "ui/animation";

interface SpinnerProps {
  size: number;
}

const Spinner = ({ size = 20 }: SpinnerProps) => {
  return (
    <IcSpinner
      width={size}
      height={size}
      css={{ animation: `${rotate} 1s linear infinite`, fill: `${colors.blue_900}` }}
    />
  );
};

export default Spinner;

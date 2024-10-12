import { IcArrowLeftWhite, IcArrowRightWhite } from '@tiki/icon';

import { arrowStyle } from './Carousel.style';

type ArrowProps = {
  position: 'left' | 'right';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Arrow = ({ position, onClick }: ArrowProps) => {
  return (
    <button type="button" onClick={onClick} css={arrowStyle(position)}>
      {position === 'left' ? (
        <IcArrowLeftWhite width="16px" height="16px" />
      ) : (
        <IcArrowRightWhite width="16px" height="16px" />
      )}
    </button>
  );
};

export default Arrow;

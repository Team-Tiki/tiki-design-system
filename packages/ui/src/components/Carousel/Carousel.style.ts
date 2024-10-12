import { css } from '@emotion/react';

import { theme } from '../../theme';
import { CarouselProps } from './Carousel';

export const itemStyle = (height: string) =>
  css({
    width: '100%',
    height,

    flexShrink: 0,

    position: 'relative',

    '& > *': {
      width: '100%',
      height,
      objectFit: 'cover',
    },
  });

export const sliderStyle = (height: string) =>
  css({
    display: 'flex',

    width: '100%',
    height,

    overflow: 'hidden',

    '& > div': {
      width: '100%',
      height,
    },
  });

export const containerStyle = ({ width, height }: Pick<CarouselProps, 'width' | 'height'>) =>
  css({
    position: 'relative',

    width,
    height,

    borderRadius: '16px',

    overflow: 'hidden',

    '& *': {
      userSelect: 'none',
      touchAction: 'none',
    },
  });

export const arrowStyle = (position: 'left' | 'right') =>
  css({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: position === 'left' ? '16px' : 'auto',
    right: position === 'right' ? '16px' : 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    margin: 'auto 0',

    width: '32px',
    height: '32px',

    zIndex: theme.zIndex.overlayBottom,

    border: 'none',
    borderRadius: '16px',

    background: 'rgb(255,255,255,0.3)',

    cursor: 'pointer',
  });

export const dotContainerStyle = css`
  display: flex;
  gap: 8px;

  position: absolute;
  bottom: 16px;
  left: 50%;

  transform: translateX(-50%);
`;

export const dotStyle = (isCurrent: boolean) =>
  css({
    width: '8px',
    height: '8px',

    opacity: isCurrent ? 1 : 0.3,

    borderRadius: '50%',
    backgroundColor: 'white',

    cursor: 'pointer',
  });

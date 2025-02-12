import { Box } from '@kuma-ui/core';

const DEFAULT_WIDTH = '24px';
const DEFAULT_HEIGHT = '24px';
const LONG_WIDTH = '48px';
const SHORT_WIDTH = '16px';

export type LightColorPreviewProps = {
  color: string;
};

export const LightColorPreview = ({ color }: LightColorPreviewProps) => {
  const colorSegments = color.split(' ');

  const isFast =
    colorSegments.length > 0 &&
    (colorSegments[0] === '高速' || colorSegments[0] === '超高速');

  return (
    <Box display="flex" minHeight={DEFAULT_HEIGHT} gap="4px">
      {colorSegments?.map((segment, index) => {
        let backgroundColor = '';
        let width = DEFAULT_WIDTH;
        let borderRadius = '50%';
        let margin = '0 2px';

        if (segment.startsWith('長')) {
          width = LONG_WIDTH;
          borderRadius = '10px';
          margin = '0 1px';
          segment = segment.slice(1);
        } else if (segment.startsWith('短') || isFast) {
          width = SHORT_WIDTH;
          borderRadius = '10px';
          margin = '0 1px';
          if (!isFast) {
            segment = segment.slice(1);
          }
        }

        switch (segment) {
          case '赤':
            backgroundColor = 'red';
            break;
          case '緑':
            backgroundColor = 'green';
            break;
          case '青':
            backgroundColor = 'blue';
            break;
          case '黄':
            backgroundColor = 'yellow';
            break;
          case 'ピンク':
            backgroundColor = '#ff69b4';
            break;
          case '水':
            backgroundColor = 'aqua';
            break;
          case '紫':
            backgroundColor = 'purple';
            break;
          case 'オレンジ':
            backgroundColor = 'orange';
            break;
          case '白':
            backgroundColor = 'white';
            break;
          case 'ライトピンク':
            backgroundColor = '#ffc0cb';
            break;
          default:
            return null;
        }

        // 点滅の場合は2つ表示
        if (colorSegments[colorSegments.length - 1] === '点滅') {
          return (
            <Box key={index} display="flex">
              <Box
                width={width}
                height={DEFAULT_HEIGHT}
                backgroundColor={backgroundColor}
                borderRadius={borderRadius}
                margin={margin}
              />
              <Box
                width={width}
                height={DEFAULT_HEIGHT}
                backgroundColor={backgroundColor}
                borderRadius={borderRadius}
                margin={margin}
              />
            </Box>
          );
        }

        return (
          <Box
            key={index}
            width={width}
            height={DEFAULT_HEIGHT}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            margin={margin}
          />
        );
      })}
    </Box>
  );
};

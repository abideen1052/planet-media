import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 50) / 2;

export const ListingShimmer = () => (
  <ContentLoader
    speed={1}
    width={width - 28}
    height={600}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Row 1 */}
    <Rect x="5" y="0" rx="20" ry="20" width={CARD_WIDTH} height={CARD_WIDTH} />
    <Rect
      x={CARD_WIDTH + 15}
      y="0"
      rx="20"
      ry="20"
      width={CARD_WIDTH}
      height={CARD_WIDTH}
    />

    {/* Row 2 */}
    <Rect
      x="5"
      y={CARD_WIDTH + 16}
      rx="20"
      ry="20"
      width={CARD_WIDTH}
      height={CARD_WIDTH}
    />
    <Rect
      x={CARD_WIDTH + 15}
      y={CARD_WIDTH + 16}
      rx="20"
      ry="20"
      width={CARD_WIDTH}
      height={CARD_WIDTH}
    />

    {/* Row 3 */}
    <Rect
      x="5"
      y={(CARD_WIDTH + 16) * 2}
      rx="20"
      ry="20"
      width={CARD_WIDTH}
      height={CARD_WIDTH}
    />
    <Rect
      x={CARD_WIDTH + 15}
      y={(CARD_WIDTH + 16) * 2}
      rx="20"
      ry="20"
      width={CARD_WIDTH}
      height={CARD_WIDTH}
    />
  </ContentLoader>
);

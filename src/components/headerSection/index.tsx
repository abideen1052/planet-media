import { Pressable, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import SvgImage from '../../utils/svgImage';
import { HeaderProp } from '../../types/headerProp';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../themes/color';

const HeaderSection = ({
  leftIcon,
  rightIcon,
  leftIconPress,
  rightIconPress,
}: HeaderProp) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
      <Pressable onPress={leftIconPress}>
        {leftIcon && (
          <SvgImage
            icon={leftIcon}
            height={24}
            width={24}
            color={colors.primary}
          />
        )}
      </Pressable>
      <Pressable onPress={rightIconPress}>
        {rightIcon && (
          <SvgImage
            icon={rightIcon}
            height={24}
            width={24}
            color={colors.primary}
          />
        )}
      </Pressable>
    </View>
  );
};

export default HeaderSection;

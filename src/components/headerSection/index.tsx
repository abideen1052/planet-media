import { Pressable, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import SvgImage from '../../utils/svgImage';
import { HeaderProp } from '../../types/headerProp';

const HeaderSection = ({
  leftIcon,
  rightIcon,
  leftIconPress,
  rightIconPress,
}: HeaderProp) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={leftIconPress}>
        {leftIcon && <SvgImage icon={leftIcon} height={24} width={24} />}
      </Pressable>
      <Pressable onPress={rightIconPress}>
        {rightIcon && <SvgImage icon={rightIcon} height={24} width={24} />}
      </Pressable>
    </View>
  );
};

export default HeaderSection;

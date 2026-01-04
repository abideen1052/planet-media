import React from 'react';
import { View, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import colors from '../../themes/color';
import SvgImage from '../../utils/svgImage';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  SharedValue,
} from 'react-native-reanimated';

import { IconsType } from '../../types/iconsType';

const Option = ({
  index,
  isExpanded,
  toggleMenu,
}: {
  index: number;
  isExpanded: SharedValue<number>;
  toggleMenu: () => void;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const angles = [-140, -110, -70, -40];
    const radius = 90;
    const angle = angles[index];

    const radian = (angle * Math.PI) / 180;
    const translateX = Math.cos(radian) * radius * isExpanded.value;
    const translateY = Math.sin(radian) * radius * isExpanded.value;

    const scale = interpolate(isExpanded.value, [0, 1], [0, 1]);
    const opacity = interpolate(isExpanded.value, [0, 0.5, 1], [0, 0, 1]);

    return {
      transform: [{ translateX }, { translateY }, { scale }],
      opacity,
    };
  });

  const icons: IconsType[] = ['cart', 'exchange', 'offer', 'coupons'];

  return (
    <Animated.View style={[styles.option, animatedStyle]}>
      <Pressable onPress={toggleMenu}>
        <SvgImage
          icon={icons[index]}
          width={20}
          height={20}
          color={colors.primary}
        />
      </Pressable>
    </Animated.View>
  );
};

export const MenuButton = () => {
  const isExpanded = useSharedValue(0);
  const isOpen = useSharedValue(false);

  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
    isExpanded.value = isOpen.value ? withSpring(1) : withSpring(0);
  };

  return (
    <View style={styles.container}>
      {/* Menu Options (rendered behind) */}
      {[0, 1, 2, 3].map((_, index) => (
        <Option
          key={index}
          index={index}
          isExpanded={isExpanded}
          toggleMenu={toggleMenu}
        />
      ))}

      {/* Main Button */}
      <TouchableOpacity
        style={styles.mainButtonContainer}
        onPress={toggleMenu}
        activeOpacity={0.9}
      >
        <View style={styles.button}>
          <SvgImage
            icon="hamburger"
            width={24}
            height={24}
            color={colors.primary}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  mainButtonContainer: {
    position: 'absolute',
    top: -20,
    width: 55,
    height: 55,
    backgroundColor: colors.white,
    borderRadius: 27.5,
    zIndex: 10,
  },
  button: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    margin: 5,
  },
  option: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 5,
  },
  placeholderIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
  },
});

import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IconProps {
  name: string;
  size?: IconSizeProps['iconSizes'];
  color?: string;
  bundle?: 'MaterialCommunityIcons' | 'MaterialIcons';
  onPress?: () => void;
}

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

const IconSizes = {
  small: 16,
  medium: 20,
  large: 24,
  huge: 28,
  giant: 36,
};

// eslint-disable-next-line react/display-name
export default function ({
  size = 'medium',
  name,
  color,
  bundle = 'MaterialIcons',
  onPress,
}: IconProps) {
  if (bundle === 'MaterialCommunityIcons') {
    return (
      <MaterialCommunityIcons
        name={name}
        size={IconSizes[size]}
        color={color}
        onPress={onPress}
      />
    );
  }
  return <MaterialIcons name={name} size={IconSizes[size]} color={color} />;
}

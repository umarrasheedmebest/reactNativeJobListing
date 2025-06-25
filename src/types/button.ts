import {GestureResponderEvent, ViewStyle, TextStyle} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

export type ButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  width?: number;
  isDynamic?: boolean;
};

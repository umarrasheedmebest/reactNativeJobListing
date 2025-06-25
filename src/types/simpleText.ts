import { TextProps, StyleProp, TextStyle } from "react-native";

type Variant = 'body' | 'heading' | 'subtitle' | 'error';

export type SimpleTextProps = {
     title: string;
     onPress?: () => void;
     numberOfLines?: number;
     ellipsizeMode?: TextProps['ellipsizeMode'];
     variant?: Variant;
     style?: StyleProp<TextStyle>;
};

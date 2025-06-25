import { TextInputProps } from "react-native";

export interface TextInputFieldProps extends TextInputProps {
    label?: string;
    isDynamic?: boolean;
    width: number;
}

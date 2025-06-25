import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { colors } from '../../styles/globalStyles';
import layout from '../../../utils/layout';
import { ButtonProps } from '../../../types/button';

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    disabled = false,
    variant = 'primary',
    style,
    textStyle,
    width,
    isDynamic = false,
}) => {
    const dynamicWidth = isDynamic && width ? layout.window.width * width : width;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.button,
                styles[variant],
                dynamicWidth ? { width: dynamicWidth } : {},
                style,
            ]}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 50,
        padding: 10,
        marginVertical: 10,
        height: 50,
        marginTop: 35,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
    },
    primary: {
        backgroundColor: colors.orange,
    },
    secondary: {
        backgroundColor: '#6C757D',
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#007BFF',
    },
});

export default Button;

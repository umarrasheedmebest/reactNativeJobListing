import React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    TextInput as RNTextInput,
} from 'react-native';
import SimpleText from '../SimpleText';
import { colors } from '../../styles/globalStyles';
import layout from '../../../utils/layout';
import { TextInputFieldProps } from '../../../types/textInputField';

const TextInputField = React.forwardRef<RNTextInput, TextInputFieldProps>(
    (
        {
            label,
            value,
            onChangeText,
            secureTextEntry = false,
            isDynamic,
            width,
            keyboardType,
            maxLength,
            returnKeyType,
            onSubmitEditing,
            autoFocus,
            inputMode,
            onBlur,
            placeholder,
            ...rest
        },
        ref
    ) => {
        const dynamicWidth = isDynamic ? layout.window.width * width : width;

        return (
            <View>
                {label && <SimpleText title={label} />}
                <TextInput
                    ref={ref}
                    style={[styles.input, { width: dynamicWidth }]}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    returnKeyType={returnKeyType}
                    onSubmitEditing={onSubmitEditing}
                    autoFocus={autoFocus}
                    inputMode={inputMode}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    {...rest}
                />
            </View>
        );
    }
);

const styles = StyleSheet.create({
    label: {
        marginBottom: 5,
    },
    input: {
        padding: 10,
        marginHorizontal: 20,
        marginTop: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        height: 50,
        width: 0.9 * layout.window.width,
    },
});

export default TextInputField;

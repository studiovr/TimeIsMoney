import React, { Ref, useCallback, useMemo, useRef, useState } from 'react';
import { DocumentFieldModel, InputTypeEnum } from '../../../screens/documentDetail/typings';
import { Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import createStyles from './InputField.style';
import SelectDropdown from 'react-native-select-dropdown';
import moment from 'moment';

interface InputFieldProps extends DocumentFieldModel<any> {
	label?: string;
	placeholder?: string;
    renderOptionItem?: (item: any, index?: number) => string;
	onChange?: (newValue: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	placeholder,
	type,
	options,
    renderOptionItem,
	value,
	isValid,
	mask,
	regex,
	onChange,
}) => {
	const styles = useMemo(() => createStyles(), []);
	const inputRef = useRef<any>();
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const inputStyles = useMemo(
        () => [
            styles.input,
            {
                opacity: isFocused || value ? 1 : 0,
                zIndex: isFocused || value ? 2 : 0
            },
        ],
        [isFocused, value]
    );
	const labelStyles = useMemo(
        () => !isFocused && !value
            ? [styles.labelText, { zIndex: 2, paddingTop: 21 }]
            : [styles.labelText, { paddingTop: 10 }],
        [isFocused, value]
    );

	const TextField = useCallback((ref: React.LegacyRef<TextInput>) => (
		<TextInput
			ref={ref}
			style={inputStyles}
			value={value}
			onChangeText={onChange}
			onBlur={() => setIsFocused(false)}
		/>
	), [inputStyles, onChange]);

	const NumberField = useCallback((ref: React.LegacyRef<TextInput>) => (
		<TextInput
			ref={ref}
			keyboardType="numeric"
			style={inputStyles}
			value={value}
			onChangeText={onChange}
			onBlur={() => setIsFocused(false)}
		/>
	), [inputRef, inputStyles]);

    const PasswordField = useCallback((ref: React.LegacyRef<TextInput>) => (
		<TextInput
            secureTextEntry
			ref={ref}
			style={inputStyles}
			value={value}
			onChangeText={onChange}
			onBlur={() => setIsFocused(false)}
		/>
	), [inputStyles, onChange]);

	const DateField = useMemo(() => (
        <View style={inputStyles}>
            <Text
                style={inputStyles}
                onPress={() => setIsFocused(true)}
            >
                {value ? moment(value).format('DD.MM.yyyy') : null}
            </Text>
            <DatePicker
                mode='date'
                modal={true}
                open={isFocused}
                date={value}
                textColor='#000000'
                onConfirm={(date: Date) => {
                    setIsFocused(false)
                    onChange ? onChange(date) : null;
                }}
                onCancel={() => setIsFocused(false)}
            />
        </View>
	), [onChange, inputStyles]);

	const SelectField = useCallback((ref: Ref<any>) => (
		options
			? <SelectDropdown
				ref={ref}
				data={options}
                defaultButtonText={label}
				buttonStyle={styles.selectButtonStyle}
                buttonTextStyle={styles.selectButtonTextStyle}
				onSelect={(selectedItem, index) => {
					onChange ? onChange(selectedItem) : null;
				}}
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
				buttonTextAfterSelection={renderOptionItem}
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
				rowTextForSelection={renderOptionItem}
                onBlur={() => setIsFocused(false)}
				onChangeSearchInputText={() => {
                    // required prop
                }}
			/>
			: TextField(ref)
	), [options, onChange, renderOptionItem, placeholder]);

	const labelElement = useMemo(() => (
		type !== InputTypeEnum.SELECT
			? <Text
                style={labelStyles}
                onPress={() => {
                    setIsFocused(() => true);
                    inputRef.current?.focus();
                    console.log('Work');
                }}
              >
                {label}
              </Text>
			: null
	), [type, label, inputRef, isFocused, value]);

	const Field = useMemo(() => {
		switch (type) {
			case InputTypeEnum.NUMBER:
				return NumberField(inputRef);
            case InputTypeEnum.PASSWORD:
                return PasswordField(inputRef);
            case InputTypeEnum.SELECT:
                return SelectField(inputRef);
			case InputTypeEnum.DATE:
				return DateField;
			default:
				return TextField(inputRef);
		}
	}, [inputRef, type, isFocused, value, inputStyles, options, onChange, renderOptionItem]);

	return (
		<View style={styles.inputContainer}>
			{labelElement}
			{Field}
		</View>
	);
};

export default InputField;

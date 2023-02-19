import React, { forwardRef, Ref, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { DocumentFieldModel, InputTypeEnum } from '../../../screens/documentDetail/typings';
import { KeyboardTypeOptions, Text, TextInput, View, ViewStyle } from 'react-native';
import createStyles from './InputField.style';
import SelectDropdown from 'react-native-select-dropdown';
import TextInputMask from 'react-native-text-input-mask';


interface InputFieldProps extends DocumentFieldModel {
	id?: number;
	title?: string;
	value?: string;
	placeholder?: string;
	renderOptionItem?: (item: any, index?: number) => string;
	onChange?: (newValue: any) => void;
	isValid?: (valid: boolean, value: any) => void;
	style?: ViewStyle[];
	onBlur?: () => void;
	currentItem?: React.Ref<any> | undefined;
	onSave?: () => void;
}

const validate = (value: string, pattern: string) => {
	var reg = new RegExp(pattern);
	return reg.test(value);
}

export const TextInputField: React.FC<InputFieldProps> = ({
	type,
	mask,
	regex,
	isValid,
	onBlur,
	currentItem,
	style,
	value,
	onChange
}) => {
	const styles = useMemo(() => createStyles(), []);

	const keyboardType = (): KeyboardTypeOptions => {
		switch (type) {
			case InputTypeEnum.NUMBER:
			case InputTypeEnum.DATE:
				return 'number-pad';
			case InputTypeEnum.PHONE:
				return 'phone-pad';
			default:
				return 'default';
		}
	}

	return (
		<View style={styles.inputContainer}>
			<TextInputMask
				style={style}
				ref={currentItem}
				mask={mask}
				onChangeText={onChange}
				keyboardType={keyboardType()}
				onBlur={onBlur}
				caretHidden={false}				
				value={value ?? ""}
			/>
		</View>
	);
}

const SelectField: React.FC<InputFieldProps> = ({
	value,
	title,
	options,
	renderOptionItem,
	isValid
}) => {
	const styles = useMemo(() => createStyles(), []);

	return (
		options
			? <SelectDropdown
				data={options}
				defaultButtonText={options.filter(x => x.id == value).map(x => x.name).toString() != "" ? options.filter(x => x.id == value).map(x => x.name).toString() : title}
				buttonStyle={styles.selectButtonStyle}
				buttonTextStyle={styles.selectButtonTextStyle}
				onSelect={(selectedItem) => {
					const valid: boolean = selectedItem == null;
					if (isValid)
						isValid(valid, selectedItem.id.toString());
				}}
				// text represented after item is selected
				// if data array is an array of objects then return selectedItem.property to render after item is selected
				buttonTextAfterSelection={renderOptionItem ?? ((item) => item.name)}
				// text represented for each item in dropdown
				// if data array is an array of objects then return item.property to represent item in dropdown
				rowTextForSelection={renderOptionItem ?? ((item) => item.name)}
				// onBlur={() => setIsFocused(false)}
				onChangeSearchInputText={() => {
					// required prop
				}}
			/>
			: <></>
	)
}

const InputField: React.FC<InputFieldProps> = ({
	title,
	type,
	options,
	renderOptionItem,
	value,
	isValid,
	mask,
	regex,
}, ref) => {
	// const [inputValue, setInputValue] = useState<string>(value ?? '5');
	const styles = useMemo(() => createStyles(), []);
	const inputRef = useRef<any>();
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [localValue, setLocalValue] = useState<string | undefined>();
	console.log('value in input field', value);

	const inputStyles = useMemo(
		() => {
			console.log("inputStyles styles applying with isFocused = "+ isFocused + " and inputValue " + value);
			return [
				styles.input,
				{
					opacity: isFocused || value || localValue ? 1 : 0,
					zIndex: isFocused || value || localValue ? 2 : 0
				},
			]
		},
		[isFocused, value, localValue]
	);
	const labelStyles = useMemo(
		() => {
			console.log("labelStyles styles applying with isFocused = "+ isFocused + " and inputValue " + value + "and localValue " + localValue);
			return !isFocused && !value && (!localValue || localValue === "")
			? [styles.labelText, { zIndex: 1, paddingTop: 21 }]
			: [styles.labelText, { zIndex: 3, paddingTop: 10 }]
		},
		[isFocused, value, localValue]
	);

	const labelElement = useMemo(() => (
		type !== InputTypeEnum.SELECT
			? <Text
				style={labelStyles}
				onPress={(e) => {
					setIsFocused(() => true);
					inputRef.current!.focus();
				}}
			>
				{title}
			</Text>
			: null
	), [type, title, inputRef, isFocused, value, localValue]);

	const onChange = (text: string) => {
		setLocalValue(text);
		if (isValid) {
			isValid(validate(text, regex ?? ""), text);
		}	
	}

	return (
		<View style={styles.inputContainer}>
			{labelElement}
			{
				type == InputTypeEnum.SELECT ?
					<SelectField
						{...{ options, type, renderOptionItem, isValid, title, value }}
						style={inputStyles}
					/> :
					<TextInputField
						{...{ type, mask, regex, isValid, value }}
						onBlur={() => setIsFocused(false)}
						style={inputStyles}
						currentItem={inputRef}
						value={value == "undefined" ? "" : value}
						onChange={onChange} 
					/>
			}
		</View>
	);
};

export default InputField;

	// const DateField = useMemo(() => (
	// 	<View style={inputStyles}>
	// 		<Text
	// 			style={inputStyles}
	// 			onPress={() => setIsFocused(true)}
	// 		>
	// 			{value ? moment(value).format('DD.MM.yyyy') : null}
	// 		</Text>
	// 		<DatePicker
	// 			mode='date'
	// 			modal={true}
	// 			open={isFocused}
	// 			date={moment().toDate()}
	// 			textColor='#000000'
	// 			onConfirm={(date: Date) => {
	// 				setIsFocused(false)
	// 				onChange ? onChange(date) : null;
	// 			}}
	// 			onCancel={() => setIsFocused(false)}
	// 		/>
	// 	</View>
	// ), [onChange, inputStyles]);
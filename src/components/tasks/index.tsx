import React from 'react';
import { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Props = {
	name: string;
	onRemove: () => void;
};

export function Tasks({ name, onRemove }: Props) {
	const [isChecked, setChecked] = useState(false);

	function toggleCheck() {
		setChecked(!isChecked);

		// previously ...

		// if (isChecked == false) {
		// 	setChecked(true);
		// } else if (isChecked == true) {
		// 	setChecked(false);
		// }

		// design patterns are my passion
	}

	return (
		<View style={styles.container}>
			<BouncyCheckbox
				style={styles.checkbox}
				size={25}
				fillColor="#31CF67"
				unfillColor="#1F1E25"
				iconStyle={{ borderColor: 'red' }}
				innerIconStyle={{ borderWidth: 3 }}
				onPress={toggleCheck}
			/>
			<Text style={[styles.text, isChecked && styles.enabledText]}>
				{name}
			</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={onRemove}
			>
				<Text style={styles.textButton}>-</Text>
			</TouchableOpacity>
		</View>
	);
}

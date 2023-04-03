import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Props = {
	name: string;
	onRemove: () => void;
	setNumCompleted: (num: any) => void;
};

export function Tasks({ name, onRemove, setNumCompleted }: Props) {
	const [isChecked, setChecked] = useState(false);

	function toggleCheck() {
		setChecked(!isChecked);
		setNumCompleted((prevState: any) =>
			isChecked ? prevState - 1 : prevState + 1
		);
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
				onPress={() => toggleCheck()}
				isChecked={isChecked}
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

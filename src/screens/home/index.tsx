import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Tasks } from '../../components/tasks';

export function Home() {
	const [currentCount, setCurrentCount] = useState(0);

	function handleTaskAdd() {}

	function handleTaskRemove() {}

	const [currentDate, setCurrentDate] = useState('');

	var dt = new Date();

	useEffect(() => {
		var year = dt.getFullYear();
		var month = (dt.getMonth() + 1).toString().padStart(2, '0');
		var date = dt.getDate().toString().padStart(2, '0');
		setCurrentDate(date + '/' + month + '/' + year);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>To do, today.</Text>
			<Text style={styles.text}>0/0 done</Text>
			<Text style={styles.textDate}>{currentDate}</Text>
			<View style={styles.form}>
				<TextInput
					placeholder="add a task..."
					placeholderTextColor="#6B6B6B6B"
					style={styles.input}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={handleTaskAdd}
				>
					<Text style={styles.textButton}>+</Text>
				</TouchableOpacity>
			</View>
			<Tasks
				name="Lavar os pratos"
				onRemove={handleTaskRemove}
			/>
		</View>
	);
}

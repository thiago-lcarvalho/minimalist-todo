import React, { useEffect, useState } from 'react';
import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
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

	const tasks = [
		'task 1',
		'task 2',
		'task 3',
		'task 4',
		'task 5',
		'task 6',
		'task 7',
		'task 8',
	];

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
			<ScrollView showsVerticalScrollIndicator={false}>
				{tasks.map((task) => (
					<Tasks
						key={task}
						name={task}
						onRemove={handleTaskRemove}
					/>
				))}
			</ScrollView>
		</View>
	);
}

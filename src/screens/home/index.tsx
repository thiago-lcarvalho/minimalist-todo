import React, { useEffect, useState } from 'react';
import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import { styles } from './styles';
import { Tasks } from '../../components/tasks';

export function Home() {
	const [tasksArray, setTasksArray] = useState([]);

	const handleButtonPress = () => {
		setTasksArray([...tasksArray, 'test']);
	};

	function handleTaskRemove() {}

	const [currentDate, setCurrentDate] = useState('');

	var dt = new Date();

	useEffect(() => {
		var year = dt.getFullYear();
		var month = (dt.getMonth() + 1).toString().padStart(2, '0');
		var date = dt.getDate().toString().padStart(2, '0');
		setCurrentDate(date + '/' + month + '/' + year);
	}, []);

	const taskPlaceholder = [
		'Take out the trash',
		'Drink 8 glasses of water',
		'Go for a 30-minute walk',
		'Do laundry',
		'Clean the kitchen',
		'Write blog post',
		'Organize email inbox',
		'Learn new tech',
		'Plan weekly tasks',
		'Code review practice',
		'Meditate for 10min',
		'Organize workspace',
	];

	function randomPlaceholder() {
		return Math.floor(Math.random() * 13);
	}

	function test() {
		alert('ok');
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>To do, today.</Text>
			<Text style={styles.text}>0/{tasksArray.length} done</Text>
			<Text style={styles.textDate}>{currentDate}</Text>
			<View style={styles.form}>
				<TextInput
					placeholder={taskPlaceholder[randomPlaceholder()]}
					placeholderTextColor="#6B6B6B6B"
					style={styles.input}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={handleButtonPress}
				>
					<Text style={styles.textButton}>+</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={tasksArray}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Tasks
						key={item}
						name={item}
						onRemove={handleTaskRemove}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<>
						<Text style={styles.emptyList}>
							add a task to start your day
						</Text>
						<Text style={styles.emptyList}>{`:)`}</Text>
					</>
				)}
			></FlatList>
		</View>
	);
}

import React, { useEffect, useState } from 'react';
import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	FlatList,
	Alert,
} from 'react-native';
import { styles } from './styles';
import { Tasks } from '../../components/tasks';

export function Home() {
	const [tasks, setTasks] = useState<string[]>([]);
	const [taskName, setTaskName] = useState('');

	function handleTaskAdd() {
		setTasks(prevState => [...prevState, taskName])
		setTaskName('');
	};

	function handleTaskRemove(name: string) {
		Alert.alert('Remove task', `Remove task ${name}`, [
			{
				text: 'Yes',
				onPress: () => Alert.alert('Removed'),
				style: 'destructive',
			},
			{
				text: 'No',
				style: 'cancel',
			},
		]);
	}

	const tasksTest = ['task1', 'task2', 'task3', 'task4'];

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
	return (
		<View style={styles.container}>
			<Text style={styles.text}>To do, today.</Text>
			<Text style={styles.text}>0/{tasks.length} done</Text>
			<Text style={styles.textDate}>{currentDate}</Text>
			<View style={styles.form}>
				<TextInput
					placeholder={taskPlaceholder[randomPlaceholder()]}
					placeholderTextColor="#6B6B6B6B"
					style={styles.input}
					onChangeText={setTaskName}
					value={taskName}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => handleTaskAdd()}
				>
					<Text style={styles.textButton}>+</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={tasks}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Tasks
						key={item}
						name={item}
						onRemove={() => handleTaskRemove(item)}
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

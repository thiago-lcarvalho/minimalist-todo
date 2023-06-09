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
import ConfettiCannon from 'react-native-confetti-cannon';

export function Home() {
	const [tasks, setTasks] = useState<string[]>([]);
	const [taskName, setTaskName] = useState('');
	const [numCompleted, setNumCompleted] = useState<number>(0);
	const [placeholderNumber, setPlaceholderNumber] = useState<number>(0);

	function handleTaskAdd() {
		if (taskName === '') {
			return Alert.alert(`Task can't be empty`);
		}
		if (tasks.includes(taskName)) {
			return Alert.alert(`Task already exists`);
		}
		setTasks((prevState) => [...prevState, taskName]);
		setTaskName('');
	}

	function handleTaskRemove(name: string) {
		setTasks((prevState) => prevState.filter((t) => t !== name));
		setNumCompleted(
			(prevState: any) => prevState == 0 ? prevState-- : 0);
	}

	// TODO => fix bug where removing a uncompleted task while
	// TODO => some task is completed will make the number of completed tasks go down

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

	function confettiCheck(delay: number) {
		if (numCompleted === tasks.length && tasks.length !== 0) {
			return (
				<ConfettiCannon
					count={200}
					origin={{ x: -10, y: 0 }}
					autoStartDelay={delay}
				/>
			);
		} else {
			return null;
		}
	}

	function randomPlaceholder() {
		return Math.floor(Math.random() * 13);
	}

	return (
		<View style={styles.container}>
			{confettiCheck(0)}
			<Text style={styles.text}>To do, today.</Text>
			<Text
				style={
					numCompleted == tasks.length && tasks.length !== 0
						? styles.completedText
						: styles.text
				}
			>
				{numCompleted}/{tasks.length} done
				{numCompleted == tasks.length && tasks.length !== 0
					? ' 🎉'
					: ''}
			</Text>
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
						setNumCompleted={setNumCompleted}
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

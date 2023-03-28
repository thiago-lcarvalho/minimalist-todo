import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';


export default function Home() {
	return (
		<View
			style={styles.container}
		>
			<Text style={styles.text}>Open up App.tsx to start working on your app!</Text>

			<StatusBar style="auto" />
		</View>
	);
}
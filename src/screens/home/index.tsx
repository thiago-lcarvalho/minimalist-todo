import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';


export function Home() {

	return (
		    <View
			style={styles.container}
            >
			<Text style={styles.text}>
                Nome do evento
            </Text>
            <Text style={styles.textDate}>
                Sexta, 28 de março de 2023.
            </Text>
            <TextInput 
                placeholder= 'hello'
                placeholderTextColor= "#6B6B6B6B"
                style= {styles.input}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                    +
                </Text>
            </TouchableOpacity>
		</View>
	);
}
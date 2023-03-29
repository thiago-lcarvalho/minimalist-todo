import { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { styles } from './styles';

export function Tasks() {

	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	return (
		<View style={styles.View}>
			<Text style={[styles.text, isEnabled && styles.enabledText]}
            >placeholder</Text>
			<Switch
				trackColor={{ false: '#A1A1A1', true: '#31CF67' }}
				thumbColor={'#FFFFFF'}
				ios_backgroundColor="#A1A1A1"
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	);


}


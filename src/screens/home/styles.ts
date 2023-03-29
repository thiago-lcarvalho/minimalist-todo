import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
        fontWeight: 'bold',
        paddingTop: 100,
        padding: 20,
	},
  text: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
  },
  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    width: 'auto',
    color: '#fff',
    padding: 16,
    fontSize: 22,
  },
  textDate: {
    fontSize: 18,
    color: '#fff',
  },
  textButton: {
    color: '#fff',
    fontSize: 26,
  },
  button: {
    alignSelf: 'flex-start',
    width: 'auto',
    height: 'auto',
  }

});

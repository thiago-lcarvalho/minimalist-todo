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
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    width: 'auto',
    color: '#fff',
    padding: 16,
    fontSize: 22,
    marginRight: 12,
  },
  textDate: {
    fontSize: 18,
    color: '#6b6b6b',
  },
  textButton: {
    color: '#fff',
    fontSize: 26,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    width: '100%',
    flexDirection: 'row',
  }
});

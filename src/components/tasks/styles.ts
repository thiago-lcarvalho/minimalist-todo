import { StyleSheet, View } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 14,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1F1E25',
        borderRadius: 8,
        paddingRight: 8,
        padding: 6,
    },
    checkbox: {
        paddingLeft: 8,
    },
    text: {
        color: '#FFFFFF',
        flex: 1,
        borderRadius: 5,
        fontSize: 20,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    enabledText: {
      color: '#31CF67',
      textDecorationLine: 'line-through',
    },
    textButton: {
      color: '#fff',
      fontSize: 26,
    },
    button: {
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: '#fF4c4c',
      alignItems: 'center',
      justifyContent: 'center',
    },

});
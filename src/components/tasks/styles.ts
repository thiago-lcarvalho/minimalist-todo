import { StyleSheet, View } from 'react-native';

export const styles = StyleSheet.create({
    View: {
        marginBottom: 32,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1F1E25',
        borderRadius: 8,
        paddingRight: 8,
        padding: 6,
    },
    text: {
        color: '#FFFFFF',
        flex: 1,
        borderRadius: 5,
        fontSize: 22,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    enabledText: {
        color: '#31CF67',
        textDecorationLine: 'line-through',
    }
});
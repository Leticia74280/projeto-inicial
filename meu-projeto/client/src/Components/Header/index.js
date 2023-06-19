import { StyleSheet, Text, View } from "react-native";

export function Header(props){
    return(
    <View style={StyleSheet.header}>
        <Text style={styles.title}>Routine.me</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        paddingTop: 35,
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
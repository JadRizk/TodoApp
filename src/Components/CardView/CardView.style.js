import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		flex: 1,
		width: width - 25,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	input: {
		padding: 20,
		borderBottomColor: '#bbb',
		borderBottomWidth: 1,
		fontSize: 24
	}
});

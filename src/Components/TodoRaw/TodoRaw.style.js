import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		width: width - 50,
		borderBottomColor: '#34B8A9',
		borderBottomWidth: StyleSheet.hairlineWidth,
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		flex: 1,
		fontWeight: '500',
		fontSize: 18,
		marginVertical: 20
	},
	strikeText: {
		color: '#bbb',
		textDecorationLine: 'line-through'
	},
	unstrikeText: {
		color: '#29323c'
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderWidth: 3,
		marginRight: 20
	},
	completeCircle: {
		borderColor: '#bbb'
	},
	incompleteCircle: {
		borderColor: '#34B8A9'
	},
	deleteIcon: {
		width: 30,
		height: 30,
		alignSelf: 'center',
		justifyContent: 'flex-end'
	}
});

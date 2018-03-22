import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class ListItem extends Component {
	constructor(props) {
	  super(props);
	
		//-------------BIND METHODS TO THIS
		this.onPress = this.onPress.bind(this);
	}

	onPress(){
		const { item, onPress } = this.props;
		onPress(item);
	}

	render() {
		const { item, onPress } = this.props;
		// const showtime = item.showtimes.map((field, i) => {
		// 	return ("hello")
		// })
		
		return (
			<TouchableHighlight onPress={ this.onPress }>
				<View style={ styles.container }>
					<View style={ styles.textContainer }>
						<Text numberOfLines={1} style={ styles.title }>{ item.name }</Text>
						<Text numberOfLines={1} style={ styles.text }>Showtime</Text>
					</View>
					<Text style={ styles.rating }>{ item.tmdbRating + "%" }</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

//===========STYLESHEET
const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 50,
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textContainer: {
		flexDirection: 'column',
	},
	title: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	rating: {
		fontSize: 20,
	}

});


export default ListItem;
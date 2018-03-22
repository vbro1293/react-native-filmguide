import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

class DetailScreen extends Component {
	constructor(props) {
	  super(props);
	
	}

	render() {
		const { item } = this.props.navigation.state.params;
		const { synopsis, year, tmdbRating, tmdbImageId } = item;
		const imageSource = { uri: "https://image.tmdb.org/t/p/original/" + tmdbImageId + ".jpg" };
		return (
			<View style={ styles.container }>
				<Image source={ imageSource } style={ styles.image } />
				<View style={ styles.infoContainer }>
					<Text>{ year ? "Released in " + year : "Unknown release year" }</Text>
					<Text>{ tmdbRating ? "Rating: " + tmdbRating + "%" : null }</Text>
				</View>
				<View style={ styles.showtimesContainer }>
					<Text>Showtimes:</Text>
				</View>
				<ScrollView style={ styles.synopsisContainer } >
					<Text>{ synopsis }</Text>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 20,
		paddingTop: 5,
	},
	image: {
		width: 200,
		height: 300,
		alignSelf: 'center',
		marginBottom: 5,
	},
	infoContainer: {
		flexDirection: 'row',
		marginVertical: 5,
		justifyContent: 'space-between',
	},
	showtimesContainer: {
		paddingBottom: 5,
		borderBottomWidth: 1,
		borderColor: '#68aa63',
	},
	synopsisContainer: {
		flex: 1,
	}
});

//===========HEADER BAR
DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.item.name,
});

export default DetailScreen;
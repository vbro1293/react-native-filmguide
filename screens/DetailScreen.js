import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import Showtime from '../components/Showtime';


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
					<Text style={ styles.infoText }>{ year ? "Released in " + year : "Unknown release year" }</Text>
					<Text style={ styles.infoText }>{ tmdbRating ? "Rating: " + tmdbRating + "%" : null }</Text>
				</View>
				<View style={ styles.showtimesContainer }>
					<Text>Showtimes: </Text>
					<View style={ styles.showtimes }>
						{ item.showtimes.map((show, i) => (
							<Showtime key={ i } show={ show }/>
						))}
					</View>
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
	infoText: {
		fontSize: 14,
	},
	synopsisContainer: {
		flex: 1,
		paddingTop: 5,
	},
	showtimesContainer: {
		paddingBottom: 5,
		borderBottomWidth: 1,
		borderColor: '#68aa63',
	},
	showtimes: {
		marginLeft: 10,
		borderLeftWidth: 1,
		borderColor: '#68aa63',
	},
});

//===========HEADER BAR
DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.item.name,
});

export default DetailScreen;
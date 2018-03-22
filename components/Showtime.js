import React from 'react';
import { StyleSheet, Text } from 'react-native';

import moment from 'moment';

const Showtime = ({ show }) => {
	
	const { startsAtDate, startsAtTime, channel } = show;
	const showCal = moment(startsAtDate + " " + startsAtTime).calendar("2017-12-03");

	return(
		<Text style={ styles.showtime }>{ showCal + " on " + channel }</Text>
	)
}

const styles = StyleSheet.create({
	showtime: {
		// paddingLeft: 5,
	}
});


export default Showtime;
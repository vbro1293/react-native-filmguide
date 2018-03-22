import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';

const ListItemSeparator = () => (
	<View style={styles.separator} />
);

const styles = StyleSheet.create({
	separator: {
		height: 1,
		backgroundColor: 'rgba(134, 186, 130, 0.7)',
		marginHorizontal: 5,
	}
});


export default ListItemSeparator;
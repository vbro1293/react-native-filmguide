import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

//===========IMPORT COMPONENTS
import ListItem from './ListItem';
import ListItemSeparator from './ListItemSeparator';

export class List extends Component {
	constructor(props) {
		super(props);
		
		//-------------BIND METHODS TO THIS
		this.renderItem = this.renderItem.bind(this);
	}

	keyExtractor(item, index) { //accepts item itself, NOT object
		return item.id;
	}

	renderSeparator() {
		return <ListItemSeparator />
	}

	renderItem({item}){ //accepts OBJECT
		return (
			<ListItem item={ item } onPress ={ this.props.navigateToDetail } />
		);
	}


	render() {
		const { items } = this.props;

		return (
			<View style={ styles.container }>
				<FlatList 
					data={ items }
					keyExtractor={ this.keyExtractor }
					ItemSeparatorComponent={ this.renderSeparator }
					renderItem={ this.renderItem }
				/>
			</View>

		);
	}
};

//===========STYLESHEET
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default List;
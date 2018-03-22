import React, { Component } from 'react';

//===========IMPORT RESOURCES AND COMPONENTS
import films from '../resources/films.json';
import List from '../components/List';


//===========LIST SCREEN
class ListScreen extends Component {
	constructor(props) {
		super(props);

		//-------------BIND METHODS TO THIS
		this.navigateToDetail = this.navigateToDetail.bind(this);
	}

	navigateToDetail(item){
		this.props.navigation.navigate('Detail', {
			item: item,
		})
	}

	
	render() {
	    return (
	    	<List items={ films } navigateToDetail={ this.navigateToDetail }/>
	    );
	}
}


//===========HEADER BAR
ListScreen.navigationOptions = {
  title: 'Films on Freeview',
};

export default ListScreen;
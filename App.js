/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Image, Animated, FlatList } from 'react-native';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			opacity: new Animated.Value(0),
			data: [
				{
					id: 0,
					url: 'https://images.unsplash.com/photo-1467703834117-04386e3dadd8',
					loaded: false
				},
				{
					id: 1,
					url: 'https://images.unsplash.com/photo-1511971523672-53e6411f62b9',
					loaded: false
				},
				{
					id: 2,
					url: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313',
					loaded: false
				}
			]
		};
	}

	/**
	 * Example 1
	 */

	onLoad = event => {
		Animated.timing(this.state.opacity, {
			toValue: 1,
			duration: 300
		}).start();
	};

	_renderSingleImage = () => {
		return (
			<View
				style={{
					// backgroundColor: '#EEE',
					// width: '100%',
					// height: '100%',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					margin: 20
				}}
			>
				<Image
					// source={require('./placeholder.png')}
					source={{
						uri:
							'https://imgix.ranker.com/user_node_img/50081/1001610901/original/people-find-me-interesting-photo-u2?w=650&q=50&fm=jpg&fit=crop&crop=faces'
					}}
					style={{ width: '100%', height: 300 }}
					resizeMode={'stretch'}
					blurRadius={25}
				/>
				<Animated.Image
					style={[
						this.props.style,
						{
							position: 'absolute',
							opacity: this.state.opacity,
							width: '100%',
							height: 300 || '100%'
						}
					]}
					// source={require('./pp.jpeg')}
					source={{
						uri:
							'https://imgix.ranker.com/user_node_img/50081/1001610901/original/people-find-me-interesting-photo-u2?w=650&q=50&fm=jpg&fit=crop&crop=faces'
					}}
					onLoad={this.onLoad}
				/>
			</View>
		);
	};

	/**
	 * Example 1 END
	 */

	/**
	 * Example 2
	 */

	_handleLazyLoad = ({ viewableItems }) => {
		const newData = this.state.data.map(image =>
			viewableItems.find(({ item }) => item.id === image.id)
				? { ...image, loaded: true }
				: image
		);

		this.setState({ data: newData });
	};

	_renderItem = ({ item }) => (
		<View style={{ marginVertical: 20, height: 300, backgroundColor: '#EEE' }}>
			{item.loaded && (
				<Image
					source={{ uri: item.url }}
					style={{ width: '100%', height: 300 }}
				/>
			)}
		</View>
	);

	_renderImageList = () => {
		return (
			<FlatList
				data={this.state.data}
				renderItem={this._renderItem}
				keyExtractor={item => item.id.toString()}
				onViewableItemsChanged={this._handleLazyLoad}
			/>
		);
	};

	/**
	 * Example 2 END
	 */

	render() {
		// return this._renderSingleImage();
		return this._renderImageList();
	}
}

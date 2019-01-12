/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Image, Animated } from 'react-native';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			opacity: new Animated.Value(0)
		};
	}

	onLoad = event => {
		Animated.timing(this.state.opacity, {
			toValue: 1,
			duration: 300
		}).start();
	};

	render() {
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
	}
}

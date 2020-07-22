import React from 'react';
import { View, Text, Image } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../const/DimensionConst';

export default class ImageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        }
    }
    componentDidMount() {
        if (this.props.image !== '') {
            this.setState({ image: this.props.image });
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Image Display
                </Text>

                        <Image source={require('../assets/bg.jpg')}
                            style={{ width: widthPercentageToDP('100%'), height: heightPercentageToDP('30%') }}
                        />
            </View>
        );
    }
}
import React, { Component} from 'react';
import {
    View, Text, StyleSheet, Image
} from 'react-native';

class HorizontalCards extends Component{
    render(){
        return(
            <View style={{ backgroundColor: "#F3C761", height: 130, width: 130,
                marginLeft: 20,  borderWidth: 0.5,
                borderColor: '#F3C761'}}>
                  <View style={{ flex: 2}}>
                    <Image source={this.props.imageUri}
                    style={{flex: 1, width: null,
                    height: null, resizeMode: 'stretch'}}
                    />
                  </View> 
                  <View style={{ flex: 2, paddingLeft: 10,
                  paddingTop: 5 }}>
                    <Text style={{fontWeight: 'bold'}}>{this.props.name}</Text>
    
                  </View>
    
                </View>

        )
    }
}

export default HorizontalCards;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});
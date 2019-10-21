import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Sample1"
          onPress={() => this.props.navigation.navigate('Sample1')}
        />
        <Button
          title="Go to Sample2"
          onPress={() => this.props.navigation.navigate('Sample2')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default withNavigation(DetailsScreen);
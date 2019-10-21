import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class SampleScreen1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sample1</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Sample2"
          onPress={() => this.props.navigation.navigate('Sample2')}
        />
      </View>
    );
  }
}

export default withNavigation(SampleScreen1);
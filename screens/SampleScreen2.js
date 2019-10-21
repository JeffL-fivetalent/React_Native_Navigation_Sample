import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class SampleScreen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sample2</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Sample1"
          onPress={() => this.props.navigation.navigate('Sample1')}
        />
      </View>
    );
  }
}

export default withNavigation(SampleScreen2);
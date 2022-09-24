import { View, Pressable } from 'react-native';
import AppBarTab from './AppBarTab';

const AppBar = () => {
  return <View>
    <Pressable>
      <AppBarTab tab={'Repositories'}/>
    </Pressable>
  </View>;
};

export default AppBar;
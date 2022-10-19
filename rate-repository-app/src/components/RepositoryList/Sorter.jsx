import { View, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TextInput from '../common/TextInput'
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  search: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 8,
    backgroundColor: "white",
    shadowColor: "#586069",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: "wrap",
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  keyword: {
    marginLeft: 4,
    width: 250,
  }
});


const Sorter = ({ keyword, setKeyword }) => {
  return (
    <View style={styles.search} >
      <View style={styles.searchBox}>
        <MaterialIcons name="search" size={24} color={theme.colors.textSecondary} />
        <TextInput
          placeholder='search'
          value={keyword}
          onChangeText={text => setKeyword(text)}
          style={styles.keyword}
        />
      </View>
      <Pressable onPress={() => setKeyword('')}>
        <MaterialIcons name="close" size={24} color={theme.colors.textSecondary} />
      </Pressable>
    </View>
  )
}

export default Sorter
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  label: {
    color: theme.colors.textSecondary,
  },
  option: {
    color: theme.colors.textPrimary,
  },
});

const PickerModal = ({ selectedOrder, setSelectedOrder }) => {
  return (
    <Picker
      selectedValue={selectedOrder}
      onValueChange={(itemValue, itemIndex) =>
        itemValue !== 'Select an item...' && setSelectedOrder(itemValue)
      }>
      {Platform.OS === 'android' &&
        <Picker.Item label='Select an item...' value='Select an item...' enabled={false} style={styles.label} />
      }

      <Picker.Item label='Latest repositories' value='Latest repositories' style={styles.option} />
      <Picker.Item label='Highest rated repositories' value='Highest rated repositories' style={styles.option} />
      <Picker.Item label='Lowest rated repositories' value='Lowest rated repositories' style={styles.option} />
    </Picker>
  )
}

export default PickerModal
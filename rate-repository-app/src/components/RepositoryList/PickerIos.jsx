import { useState } from 'react';
import { Pressable, Modal, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Text from '../common/Text';
import PickerModal from './PickerModal';

const styles = StyleSheet.create({
  listHeader: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centeredView:{
    marginTop: 0,
    marginBottom: 0,
    flex: 1,
    marginVertical: 75,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
  },
  labelView: {
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
  },
  buttonClose: {
    padding: 15,
    textAlign: 'center',
    borderWidth: 0,
    borderRadius: 4,
    overflow: 'hidden', //fix border radius issue on iOS
  },
});

const PickerIos = ({ selectedOrder, setSelectedOrder }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <Pressable
      style={styles.listHeader}
      onPress={() => setModalVisible(!modalVisible)}
    >
      <Text>
        {selectedOrder}
      </Text>
      <MaterialIcons name="arrow-drop-down" size={24} color="black" />
    </Pressable>
    <Modal
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.labelView}>
            <Text
              color="textSecondary"
              style={styles.label}
            >
              Select an item...
            </Text>

            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text
                style={styles.buttonClose}
                backgroundColor='primary'
                color='white'
                fontWeight='bold'
              >
                Close
              </Text>
            </Pressable>
          </View>

          <PickerModal
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        </View>
      </View>
    </Modal>
    </>
  )
}

export default PickerIos
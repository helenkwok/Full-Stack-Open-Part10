import PickerIos from './PickerIos';

import PickerModal from './PickerModal';

const ListHeader = ({ selectedOrder, setSelectedOrder }) => {

  switch (Platform.OS) {
    case 'ios':
      return (
        <PickerIos
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      );

    default:
      return (
        <PickerModal
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      );
  }
}

export default ListHeader;
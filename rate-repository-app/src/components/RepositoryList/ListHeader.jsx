import PickerIos from './PickerIos';

import PickerModal from './PickerModal';
import Sorter from './Sorter';

const ListHeader = ({ keyword, setKeyword, selectedOrder, setSelectedOrder }) => {

  switch (Platform.OS) {
    case 'ios':
      return (
        <>
          <Sorter
            keyword={keyword}
            setKeyword={setKeyword}
          />
          <PickerIos
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        </>
      );

    default:
      return (
        <>
          <Sorter
            keyword={keyword}
            setKeyword={setKeyword}
          />
          <PickerModal
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
        </>
      );
  }
}

export default ListHeader;
import React, { useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheetComponent = ({ Component, onPressMenu, HEIGHT, setClose, BGSheetColor }) => {

    const refRBSheet = useRef();

    React.useEffect(() => {
        refRBSheet.current.open()
    })

    setClose ? refRBSheet.current.close() : null

    return (
        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            openDuration={60}
            closeOnPressMask={true}
            onClose={onPressMenu}
            animationType='slide'
            draggable={true}
            customStyles={{
                wrapper: {
                    backgroundColor: 'rgba(255, 255, 255)',
                },
                draggableIcon: {
                    backgroundColor: '#4A00E8',
                    width: 80,
                    height:6,
                    borderRadius:4,
                    marginTop:40
                },
                container: {
                    backgroundColor: BGSheetColor,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    height: HEIGHT ? HEIGHT : 250,
                    borderColor:'#4A00E8',
                    borderTopWidth: 2,
                    borderLeftWidth: 2,
                    borderRightWidth: 2,
                    width:"98%",
                    alignSelf:"center"
                },
            }}>
            <Component />
        </RBSheet>
    )
}

export default BottomSheetComponent;
import React from 'react';
import {Dispatch, SetStateAction} from 'react';
import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';

interface ModalProps {
  selectedCharacter: any;
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const DetailModal: React.FC<ModalProps> = ({
  selectedCharacter,
  setModalVisible,
  modalVisible,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {selectedCharacter && (
            <>
              <Image
                source={{uri: selectedCharacter.image}}
                style={styles.modalImage}
              />
              <Text style={styles.modalTitle}>{selectedCharacter.name}</Text>
              <Text>Status: {selectedCharacter.status}</Text>
              <Text>Species: {selectedCharacter.species}</Text>
              <Text>Origin: {selectedCharacter.name}</Text>

              <Pressable
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}>
                <Text style={{color: '#fff'}}>Close</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalButton: {
    marginTop: 15,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default DetailModal;

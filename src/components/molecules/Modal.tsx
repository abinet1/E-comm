import React, { useCallback, useContext, useState } from 'react';
import { StyleSheet, ModalProps as DefaultModalProps, Modal as DefaultModal, View, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from '../atoms';
import { ThemeContext } from '../../../providers';
import { InfoIcon, SaveIcon, WarningIcon } from '../../../assets';

interface ModalProps extends DefaultModalProps {
  title: string;
  content?: string;
  visible: boolean;
  variant?: 'edit'|'add'|'delete';
  onClose: () => void;
  onSubmit: () => void;
  modalBody?: React.ReactNode;
  primaryActionTitle: string;
  secondaryActionTitle: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  visible,
  onClose,
  onSubmit,
  primaryActionTitle,
  secondaryActionTitle,
  variant='info',
  modalBody,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <DefaultModal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
      {...props}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContainer, { backgroundColor: theme.baseShade[0] }]}>
          <View 
            style={[styles.modalIcon, {
              backgroundColor: 
                (variant==="delete")? '#fdebeb' :
                variant==="edit" ? '#e6f0fd' :
                '#eaebef'
            }]}
          >
            {variant==="add" && <SaveIcon size={24} /> }
            {variant==="edit" && <InfoIcon size={24} /> }
            {variant==="delete" && <WarningIcon size={24} /> }
          </View>
          <Text variant='title' style={styles.modalTitle}>{title}</Text>
          {content&&<Text variant='text' style={styles.modalContent}>{content}</Text>}
          {modalBody && modalBody}
          <View style={styles.modalAction}>
            <Button variant={'primary'} size='sm' title={primaryActionTitle} styleProps={{width: '45%', height: 40}} onPress={onSubmit} />
            <Button variant={'danger'} size='sm' title={secondaryActionTitle} styleProps={{width: '45%', height: 40}} onPress={onClose} />
          </View>
        </View>
      </View>
    </DefaultModal>
  )
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 325,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    gap: 20,
    paddingVertical: 40,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContent: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalAction: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalIcon: {
    width: 50, 
    height: 50,  
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 10
  },
});

export default Modal;

import React from 'react';
import { CustomModal, CustomModalBody, CustomModalHeader, CustomModalTitle, CustomButton, DynamicHtmlTag } from 'components';

interface DeleteConfirmationModalProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  show,
  onHide,
  onConfirm,
  title = 'Confirm Deletion',
  message = 'Are you sure you want to delete this user?'
}) => {
  return (
    <CustomModal 
      show={show} 
      onHide={onHide} 
      dialogClassName="delete-modal-width"
      centered
      className="delete-confirmation-modal"
    >
      <CustomModalHeader closeButton className="border-bottom px-4 py-3">
        <CustomModalTitle>{title}</CustomModalTitle>
      </CustomModalHeader>
      <CustomModalBody className="py-4 px-4">
        <DynamicHtmlTag type='p' className="mb-4 text-center">{message}</DynamicHtmlTag>
        <DynamicHtmlTag type='div' className="d-flex justify-content-center gap-3">
          <CustomButton
            type="button"
            variant="secondary"
            onClick={onHide}
            className="px-4 min-w-100"
          >
            Cancel
          </CustomButton>
          <CustomButton
            type="button"
            variant="danger"
            onClick={onConfirm}
            className="px-4 min-w-100"
          >
            Delete
          </CustomButton>
        </DynamicHtmlTag>
      </CustomModalBody>
    </CustomModal>
  );
};

export default DeleteConfirmationModal; 
import React from 'react';
import { Modal, Box, Typography, Button, Fade, Backdrop } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

interface DeleteConfirmationModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message?: string;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
    open,
    onClose,
    onConfirm,
    message = "Are you sure you want to delete this task?",
}) => {
    return (
      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: 1,
              textAlign: 'center',
              minWidth: 300,
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1
              }}
              variant="h6"
              gutterBottom
            >
              <ErrorIcon
                sx={{
                  fontSize: 32,
                  color: 'red'
                }}
              />
              Confirm Delete
            </Typography>
            <Typography variant="body1" gutterBottom>
              {message}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
              <Button variant="contained" color="error" onClick={onConfirm}>
                Yes, Delete
              </Button>
              <Button variant="outlined" color='inherit' onClick={onClose}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    );
};

export default DeleteConfirmationModal;

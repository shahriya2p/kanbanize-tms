import React, { useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const Notification: React.FC<{ message: string, severity: any }> = ({ message, severity }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{
      horizontal: 'center',
      vertical: "top"
    }}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;

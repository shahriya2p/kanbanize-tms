import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface TaskModalProps {
  task: any;
  onClose: () => void;
  onSave: (updatedTask: any) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, onSave }) => {
  const [editableTask, setEditableTask] = useState(task);

  const handleFieldChange = (field: string, value: string) => {
    setEditableTask({ ...editableTask, [field]: value });
  };

  const handleSave = () => {
    onSave(editableTask);
  };

  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 1200,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Edit Task</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={editableTask.title}
          onChange={(e) => handleFieldChange('title', e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          value={editableTask.description}
          onChange={(e) => handleFieldChange('description', e.target.value)}
        />
        <TextField
          label="Due Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={editableTask.dueDate}
          onChange={(e) => handleFieldChange('dueDate', e.target.value)}
        />
        <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TaskModal;

import { useCallback, useEffect, useState } from 'react';
import {
  IconButton,
  Box,
  Tooltip,
  Avatar,
  Typography,
  CircularProgress,
} from '@mui/material';
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './taskTable.scss';
import showBtnIcon from './../../assets/showBtnIcon.svg';
import editBtnIcon from './../../assets/editBtnIcon.svg';
import deleteBtnIcon from './../../assets/deleteBtnIcon.svg';
import dataGridDownArrowIcon from './../../assets/dataGridDownArrowIcon.svg';
import { dummyTasksByStatus, dummyUsers } from '../../data';
import DeleteConfirmationModal from '../../Modal/DeleteConfirmationModal';

const TaskTable: React.FC = () => {

  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const flattenedTasks = Object.values(dummyTasksByStatus).flat().map((task) => {
      const user = dummyUsers.find((user) => user.id === String(task.assignedUserId));
      return { ...task, assignee: user || null };
    });
    setRows(flattenedTasks);
  }, []);

  const handleOpenDeleteModal = useCallback((id: string) => {
    setTaskToDelete(id);
    setDeleteModalOpen(true);
  }, []);

  const handleCloseDeleteModal = () => {
    setTaskToDelete(null);
    setDeleteModalOpen(false);
  };

  const handleConfirmDelete = useCallback(() => {
    if (taskToDelete) {
      setRows((prevRows) => prevRows.filter((row) => row.id !== taskToDelete));
      toast.success('Task deleted successfully!');
    }
    handleCloseDeleteModal();
  }, [taskToDelete]);

  const handleEdit = (id: string) => {
    toast.info(`Edit functionality for Task ID: ${id} coming soon!`);
  };

  const handleShowDetails = (id: string) => {
    toast.info(`Show details for Task ID: ${id}`);
  };

  const columns = [
    // { field: 'id', headerName: 'ID', flex: 1, minWidth: 70 },
    { field: 'title', headerName: 'Task Title', flex: 1, minWidth: 200 },
    { field: 'description', headerName: 'Description', flex: 1, minWidth: 400 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth: 150,
      renderCell: (params: any) => (
        <Box
          sx={{
            fontWeight: 'bold',
            color:
              params.value === 'Done'
                ? 'green'
                : params.value === 'In Progress'
                  ? '#0055CC'
                  : params.value === 'To Do'
                    ? 'orange'
                    : 'gray',
          }}
        >
          {params.value}
        </Box>
      ),
    },
    {
      field: 'priority',
      headerName: 'Priority',
      flex: 1,
      minWidth: 120,
      renderCell: (params: any) => (
        <Box sx={{ fontWeight: 'bold', color: params.value === 'High' ? 'red' : params.value === 'Medium' ? 'orange' : '#0055CC' }}>
          {params.value}
        </Box>
      ),
    },
    { field: 'dueDate', headerName: 'Due Date', flex: 1, minWidth: 150 },
    {
      field: 'assignee',
      headerName: 'Assignee',
      flex: 1,
      minWidth: 200,
      renderCell: (params: any) => {
        const assignee = params.value;
        return assignee ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, margin: 1 }}>
            <Avatar sx={{
              bgcolor: assignee.color,
              height: 32,
              width: 32,
              fontSize: 15,
            }}>{assignee.initials}</Avatar>
            <Typography>{assignee.name}</Typography>
          </Box>
        ) : (
          <Box sx={{
            display: 'flex', alignItems: 'center', gap: 1,
            margin: 1
          }}>
            <Avatar
              sx={{
                height: 32,
                width: 32,
                fontSize: 15,
              }}
            />
            <Typography color="textSecondary">Unassigned</Typography>
          </Box>
        );
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      minWidth: 180,
      hideable: false,
      sortable: false,
      renderCell: (params: any) => (
        <div className="btn-group-wrap">
          <Tooltip title="Show Details">
            <IconButton onClick={() => handleShowDetails(params.id)}>
              <img src={showBtnIcon} alt="Show Details" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEdit(params.id)}>
              <img src={editBtnIcon} alt="Edit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleOpenDeleteModal(params.id)}>
              <img src={deleteBtnIcon} alt="Delete" />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  const CustomToolbar = () => (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className="table-wrapper">
          <DataGrid
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[5, 10, 20]}
            components={{ Toolbar: CustomToolbar }}
            disableSelectionOnClick
            loading={loading}
            slots={{
              toolbar: () => (
                <div className="toolbar">
                  <GridToolbarContainer>
                    <GridToolbarColumnsButton endIcon={
                      <img src={dataGridDownArrowIcon} alt="Columns" />
                    } />
                    <GridToolbarFilterButton />
                    <GridToolbarDensitySelector endIcon={
                      <img src={dataGridDownArrowIcon} alt="Density" />
                    } />
                    <GridToolbarExport endIcon={
                      <img src={dataGridDownArrowIcon} alt="Export" />
                    } />
                  </GridToolbarContainer>
                </div>
              ),
            }}
            pagination
          />
        </div>
      )}
      <ToastContainer />
      <DeleteConfirmationModal
        open={deleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
};

export default TaskTable;

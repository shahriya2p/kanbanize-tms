import { useCallback, useEffect, useState } from 'react';
import {
  IconButton,
  Box,
  Tooltip,
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
import { taskData } from '../../data';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { AppDispatch, RootState } from '../../store/store';

function capitalizeFirstLetter(str: any) {
  return str ? str[0].toUpperCase() + str.slice(1) : '';
}

export default function TaskTable() {
  const [tasksData, setTasksData] = useState(taskData);
  const [isLoading, setIsLoading] = useState(false);
  const [editData, setEditData] = useState(null);

  // // Fetching task data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch('/api/tasks');
  //       const data = await response.json();
  //       setTasksData(data);
  //     } catch (error) {
  //       console.error('Error fetching tasks:', error);
  //       toast.error('Failed to fetch tasks.');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleEditClick = useCallback(
    (data) => {
      setEditData(data);
    },
    []
  );

  const handleDeleteClick = useCallback(
    async (id) => {
      try {
        const result = window.confirm('Do you want to delete this task?');
        if (result) {
          // Call API to delete task
          await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
          toast.success('Task deleted successfully');
          setTasksData((prev) => prev.filter((task) => task.id !== id));
        }
      } catch (error) {
        console.error('Error deleting task:', error);
        toast.error('Failed to delete task.');
      }
    },
    []
  );

  const handleRowClick = useCallback((id) => {
    console.log(`Row clicked: ${id}`);
    // Navigate to task details or handle as needed
  }, []);

  // const dispatch = useAppDispatch();
  // const { tasks } = useAppSelector((state: RootState) => state.task);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  // const handleDeleteClick = (id: number) => {
  //   dispatch(deleteTask(id));
  // };

  const columns = [
    { field: 'title', headerName: 'Title', flex: 1, minWidth: 200 },
    { field: 'description', headerName: 'Description', flex: 1, minWidth: 150 },
    { field: 'status', headerName: 'Status', flex: 1, minWidth: 150 },
    { field: 'priority', headerName: 'Priority', flex: 1, minWidth: 150 },
    { field: 'dueDate', headerName: 'Due Date', flex: 1, minWidth: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      minWidth: 150,
      hideable: false,
      renderCell: (params) => (
        <div className="btn-group-wrap">
          <Tooltip title="Show">
            <IconButton onClick={() => handleRowClick(params.id)}>
              <img src={showBtnIcon} alt="Show" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEditClick(params.id)}>
              <img src={editBtnIcon} alt="Edit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteClick(params.id)}>
              <img src={deleteBtnIcon} alt="Delete" />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  const rowsForDataGrid = tasksData.map((task) => ({
    id: task.id,
    title: capitalizeFirstLetter(task.title),
    description: task.description,
    status: capitalizeFirstLetter(task.status),
    priority: capitalizeFirstLetter(task.priority),
    dueDate: task.dueDate,
  }));

  return (
    <>
      <ToastContainer />
      <Box>
        {isLoading ? (
          <div className="loader">
            <CircularProgress />
          </div>
        ) : (
          <div className="table-wrapper">
            <DataGrid
              rowHeight={40}
              columnHeaderHeight={40}
              rows={rowsForDataGrid}
              columns={columns}
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
        {editData && <div>Edit Task Modal for Task ID: {editData}</div>}
      </Box>
    </>
  );
}

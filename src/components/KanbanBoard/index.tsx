import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Paper, Typography, Avatar, Tooltip } from '@mui/material';
import TaskModal from '../../Modal/TaskModal';
import { dummyTasksByStatus } from '../../data';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import UserListPopover from '../Popover/UserListPopover';

const dummyUsers = [
  { id: 1, name: 'Priyanka Dumasia', initials: 'PD', color: '#FF5733' },
  { id: 2, name: 'Amit Desai', initials: 'AD', color: '#33B5FF' },
  { id: 3, name: 'Ankit Mehta', initials: 'AM', color: '#FF33D4' },
  { id: 4, name: 'Arjun Patel', initials: 'AP', color: '#33FF57' },
  { id: 5, name: 'John Doe', initials: 'JD', color: '#FFC300' },
];

const KanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState(dummyTasksByStatus);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);
  const [priorityPopoverAnchor, setPriorityPopoverAnchor] = useState<HTMLElement | null>(null);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = source.droppableId;
    const destColumn = destination.droppableId;

    const sourceTasks = Array.from(tasks[sourceColumn]);
    const destTasks = Array.from(tasks[destColumn]);
    const [removed] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [sourceColumn]: sourceTasks,
      [destColumn]: destTasks,
    });
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>, taskId: string) => {
    event.stopPropagation();
    // setPriorityPopoverAnchor(null);
    if (priorityPopoverAnchor) {
      setPriorityPopoverAnchor(null);
    }
    setAnchorEl(event.currentTarget);
    setCurrentTaskId(taskId);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setCurrentTaskId(null);
    setSelectedTask(null);
    setPriorityPopoverAnchor(null);
  };

  const handleAssignUser = (userId: number) => {
    const updatedTasks = { ...tasks };
    Object.keys(updatedTasks).forEach((column) => {
      updatedTasks[column] = updatedTasks[column].map((task) =>
        task.id === currentTaskId ? { ...task, assignedUserId: userId } : task
      );
    });
    setTasks(updatedTasks);
    handleClosePopover();
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <DoubleArrowIcon sx={{ color: 'red', rotate: '270deg' }} />;
      case 'medium':
        return <DensityMediumIcon sx={{ color: 'orange' }} />;
      case 'low':
        return <KeyboardDoubleArrowDownIcon sx={{ color: '#0C66E4' }} />;
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, padding: 2 }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(tasks).map((column) => (
          <Droppable key={column} droppableId={column}>
            {(provided) => (
              <Paper
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  padding: 2,
                  width: 240,
                  minHeight: 400,
                  backgroundColor: '#f9f9f9',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h6" align="center" gutterBottom>
                  {column.toUpperCase()}
                </Typography>
                {tasks[column].map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          padding: 2,
                          marginBottom: 2,
                          backgroundColor: '#e0e0e0',
                          borderRadius: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 1,
                          cursor: 'pointer',
                        }}
                        onClick={() => setSelectedTask(task.id)}
                      >
                        <Typography>{task.title}</Typography>
                        <Tooltip
                          title={`${task.priority} Priority`}
                          placement="bottom"
                          slotProps={{
                            popper: {
                              modifiers: [
                                {
                                  name: 'offset',
                                  options: {
                                    offset: [0, -10],
                                  },
                                },
                              ],
                            },
                          }}
                        >
                          <Box
                            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                          >
                            {getPriorityIcon(task?.priority?.toLocaleLowerCase())!}
                          </Box>
                        </Tooltip>

                        <Tooltip
                          title={
                            task.assignedUserId
                              ? dummyUsers.find((u) => u.id === task.assignedUserId)?.name
                              : 'Unassigned'
                          }
                          placement="bottom"
                          slotProps={{
                            popper: {
                              modifiers: [
                                {
                                  name: 'offset',
                                  options: {
                                    offset: [0, -10],
                                  },
                                },
                              ],
                            },
                          }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: task.assignedUserId
                                ? dummyUsers.find((u) => u.id === task.assignedUserId)?.color
                                : '#bdbdbd',
                              height: 32,
                              width: 32,
                              fontSize: 15,
                            }}
                            onClick={(event) => handleAvatarClick(event, task.id)}
                          >
                            {task.assignedUserId ? (
                              dummyUsers.find((u) => u.id === task.assignedUserId)?.initials
                            ) : (
                              <Avatar
                                sx={{
                                  height: 32,
                                  width: 32,
                                  fontSize: 15,
                                }}
                              />
                            )}
                          </Avatar>
                        </Tooltip>
                      </Box>

                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Paper>
            )}
          </Droppable>
        ))}
      </DragDropContext>
      {selectedTask && (
        <TaskModal
          task={Object.values(tasks).flat().find((t) => t.id === selectedTask)}
          onClose={() => setSelectedTask(null)}
          onSave={(updatedTask) => {
            const updatedTasks = { ...tasks };
            Object.keys(updatedTasks).forEach((column) => {
              updatedTasks[column] = updatedTasks[column].map((task) =>
                task.id === updatedTask.id ? updatedTask : task
              );
            });
            setTasks(updatedTasks);
            setSelectedTask(null);
          }}
        />
      )}
      <UserListPopover
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        onSelectUser={handleAssignUser}
        users={dummyUsers}
      />
    </Box>
  );
};

export default KanbanBoard;

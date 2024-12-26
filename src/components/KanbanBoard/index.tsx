import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Paper, Typography, Avatar, AvatarGroup } from '@mui/material';

const dummyUsers = [
  { id: 1, name: 'Priyanka Dumasia', initials: 'PD', color: '#FF5733' },
  { id: 2, name: 'Amit Desai', initials: 'AD', color: '#33B5FF' },
  { id: 3, name: 'Ankit Mehta', initials: 'AM', color: '#FF33D4' },
  { id: 4, name: 'Arjun Patel', initials: 'AP', color: '#33FF57' },
  { id: 5, name: 'John Doe', initials: 'JD', color: '#FFC300' },
];

const KanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: '1', title: 'Task 1', assignedUserId: null },
      { id: '2', title: 'Task 2', assignedUserId: null },
    ],
    inProgress: [
      { id: '3', title: 'Task 3', assignedUserId: 1 },
    ],
    qa: [{ id: '5', title: 'Task 5', assignedUserId: null }],
    uat: [{ id: '6', title: 'Task 6', assignedUserId: null }],
    rca: [{ id: '7', title: 'Task 7', assignedUserId: null }],
    done: [
      { id: '4', title: 'Task 4', assignedUserId: 2 },
    ],
  });

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

  const handleAssignUser = (taskId: string, column: string) => {
    const selectedUser = prompt(
      `Enter User ID to assign (Available IDs: ${dummyUsers
        .map((user) => user.id)
        .join(', ')}):`
    );
    const userId = parseInt(selectedUser || '', 10);

    if (!dummyUsers.some((user) => user.id === userId)) {
      alert('Invalid user ID');
      return;
    }

    const updatedTasks = { ...tasks };
    updatedTasks[column] = updatedTasks[column].map((task) =>
      task.id === taskId ? { ...task, assignedUserId: userId } : task
    );
    setTasks(updatedTasks);
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
                  width: 244,
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
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: 1,
                          cursor: 'pointer',
                        }}
                        onClick={() => handleAssignUser(task.id, column)}
                      >
                        <Typography>{task.title}</Typography>
                        <AvatarGroup max={3}>
                          {task.assignedUserId !== null && (
                            <Avatar
                              sx={{
                                bgcolor: dummyUsers.find(
                                  (u) => u.id === task.assignedUserId
                                )?.color,
                              }}
                            >
                              {
                                dummyUsers.find(
                                  (u) => u.id === task.assignedUserId
                                )?.initials
                              }
                            </Avatar>
                          )}
                        </AvatarGroup>
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
    </Box>
  );
};

export default KanbanBoard;

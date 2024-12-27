import React from 'react';
import {
  Popover,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@mui/material';

interface UserListPopoverProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onSelectUser: (userId: number) => void;
  users: { id: number; name: string; initials: string; color: string }[];
}

const UserListPopover: React.FC<UserListPopoverProps> = ({
  anchorEl,
  onClose,
  onSelectUser,
  users,
}) => {
  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <List>
        {users.map((user) => (
          <ListItem
            button
            key={user.id}
            onClick={() => onSelectUser(user.id)}
          >
            <ListItemAvatar>
              <Avatar sx={{
                bgcolor: user.color,
                height: 32,
                width: 32,
                fontSize: 14,
              }}>{user.initials}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </Popover>
  );
};

export default UserListPopover;

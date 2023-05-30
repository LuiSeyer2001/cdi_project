import { useState } from 'react'
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material'
import { LogoutOutlined, AccountCircleOutlined } from '@mui/icons-material'
import { useLogout, useAuthContext } from '@hooks'

const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { user } = useAuthContext()
  const { logout } = useLogout()
  const open = Boolean(anchorEl)

  const handleClick = ({ currentTarget }) => { setAnchorEl(currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar
          src={user.profilePictureUrl}
          sx={{ bgcolor: 'secondary.main' }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircleOutlined fontSize='small' />
          </ListItemIcon>
          Perfil
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <LogoutOutlined fontSize='small' />
          </ListItemIcon>
          Salir
        </MenuItem>
      </Menu>

    </>
  )
}

export default ProfileButton

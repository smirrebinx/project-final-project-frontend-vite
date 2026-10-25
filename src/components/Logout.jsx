import { useEffect, useRef } from 'react'
import { StyledCancelCloseButton, StyledLogOutButton } from './GlobalStyling'

const Logout = ({ handleCloseLogout, handleLogout }) => {
  const cancelRef = useRef(null)

  // Move focus into the panel when it opens; focus() also brings it into view
  useEffect(() => {
    cancelRef.current.focus()
  }, [])

  const handleLogoutClick = () => {
    handleLogout()
    handleCloseLogout()
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        margin: '2.3rem',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: 'var(--box-shadow)'
      }}>
      <div style={{ background: 'white', padding: '16px' }}>
        <p>Do you want to log out?</p>
        <StyledLogOutButton
          type="button"
          onClick={handleLogoutClick}>Log out
        </StyledLogOutButton>
        <StyledCancelCloseButton
          ref={cancelRef}
          type="button"
          onClick={handleCloseLogout}>Cancel
        </StyledCancelCloseButton>
      </div>
    </div>
  )
}

export default Logout

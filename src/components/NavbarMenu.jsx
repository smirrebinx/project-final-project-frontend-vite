import menuBars from '../assets/menu_FILL0_wght400_GRAD0_opsz48.svg'
import closeBars from '../assets/close_FILL0_wght400_GRAD0_opsz48.svg'
import { MaterialIcon, StyledMenuBarButton, StyledNavButtonLinkDiv, StyledNavLink, StyledNavbarLinkDiv } from './NavbarStyling'
import { StyledLi } from './GlobalStyling'

const NavbarMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <nav>
      <StyledNavButtonLinkDiv>
        <StyledMenuBarButton type="button" onClick={toggleMenu}>
          <MaterialIcon src={isMenuOpen ? closeBars : menuBars} alt={isMenuOpen ? 'Close' : 'Menu'} />
        </StyledMenuBarButton>
      </StyledNavButtonLinkDiv>
      <div className={`navbar-overlay ${isMenuOpen ? 'active' : ''}`}>
        {isMenuOpen && ( // Render the links only when the menu is open
          <StyledNavbarLinkDiv>
            <ul>
              <StyledLi>
                <StyledNavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                  Home
                </StyledNavLink>
              </StyledLi>
              <StyledLi>
                <StyledNavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
                  Login/Register
                </StyledNavLink>
              </StyledLi>
              <StyledLi>
                <StyledNavLink to="/userinfo" className={({ isActive }) => isActive ? 'active' : ''}>
                  My Profile
                </StyledNavLink>
              </StyledLi>
              <StyledLi>
                <StyledNavLink to="/treatment" className={({ isActive }) => isActive ? 'active' : ''}>
                  Treatments
                </StyledNavLink>
              </StyledLi>
              <StyledLi>
                <StyledNavLink to="/booktreatment" className={({ isActive }) => isActive ? 'active' : ''}>
                  Book Treatment
                </StyledNavLink>
              </StyledLi>
            </ul>
          </StyledNavbarLinkDiv>
        )}
      </div>
    </nav>
  )
}

export default NavbarMenu

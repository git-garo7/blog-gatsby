import * as React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"
import * as S from './styled'
import MenuBar from '../MenuBar'
import GlobalStyles from "../styles/global"



const Layout = ({ children }) => {
  
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
    <Sidebar/>
   <S.LayoutMain>{children}</S.LayoutMain>
    <MenuBar/>
     </S.LayoutWrapper>  
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
  return (
    <div className={s.navbar}>
      <div className={s.menu}>
        {/*// add NavLinks*/}
        <div className={s.item}>
          <NavLink className={({isActive}) => isActive ? s.active : ''} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
        </div>
        <div className={s.item}>
          <NavLink className={({isActive}) => isActive ? s.active : ''} to={PATH.JUNIOR}>Junior</NavLink>
        </div>
        <div className={s.item}>
          <NavLink className={({isActive}) => isActive ? s.active : ''} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
        </div>
      </div>
    </div>

  )
}

export default Header

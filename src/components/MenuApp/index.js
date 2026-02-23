import React from "react"
import Menu from "../Menu"

function MenuApp({ data }) {
  const menus = Array.isArray(data) ? data : []

  return (
    <>
      {menus.map((menu) => (
        <Menu key={menu.menuName} menuName={menu.menuName} menuItems={menu.menuItems} />
      ))}
    </>
  )
}

export default MenuApp

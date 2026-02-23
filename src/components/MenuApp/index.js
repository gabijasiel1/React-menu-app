import React from "react"
import Menu from "../Menu"

function MenuApp({ data }) {
  if (!Array.isArray(data)) {
    return null
  }

  return (
    <div className="menu-app">
      {data.map((menu) => (
        <Menu
          key={menu.menuName}
          menuName={menu.menuName}
          menuItems={menu.menuItems}
        />
      ))}
    </div>
  )
}

export default MenuApp


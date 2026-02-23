import React from "react"
import MenuItem from "../MenuItem"

function Menu({ menuName, menuItems }) {
  const items = Array.isArray(menuItems) ? menuItems : []

  return (
    <div className="menu">
      <h1>{menuName} Menu</h1>
      <div className="menuItems">
        {items.map((item) => (
          <MenuItem
            key={item.itemId}
            itemId={item.itemId}
            itemPrice={item.itemPrice}
            itemName={item.itemName}
            itemDescription={item.itemDescription}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu


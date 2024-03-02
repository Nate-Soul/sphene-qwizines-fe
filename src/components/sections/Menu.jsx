import MenuItem from "../subcomponents/MenuItem";

import { menuItems as menus } from "@/data/menus";


const Menu = () => {

  return (
    <section className="py-14">
      <div className="container">
        <div className="section-heading">
          <h3 className="section-heading-title">Our Exclusive Menu</h3>
        </div>
        <div className="grid grid-cols-4 gap-8">
        {menus && menus.map((menu, menuIndex) => (
            <MenuItem key={menuIndex} menu={menu} />
        ))}
        </div>
      </div>
    </section>
  )
}

export default Menu

import MenuItem from "../subcomponents/MenuItem";

import { menuItems as menus } from "@/data/menus";


const Menu = () => {

  return (
    <section className="py-14">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-heading-title">Our Exclusive Menu</h3>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {menus && menus.map((menu, menuIndex) => (
            <MenuItem key={menuIndex} menu={menu} />
        ))}
        </div>
      </div>
    </section>
  )
}

export default Menu

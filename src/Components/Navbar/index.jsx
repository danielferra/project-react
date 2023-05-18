import { NavLink } from "react-router-dom"



const Navbar = () => {
    const activeStyle = "underline underline-offset-4"

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-normal">
        <ul className="flex items-center gap-3">
            <li className="font-bold text-lg">
                <NavLink to="/">
                Shopping React
                </NavLink>
            </li>
            <li>
                <NavLink 
                to="/"
                className={({isActive}) =>
                   isActive ? activeStyle : undefined
                 }>
                Todo
                </NavLink>
            </li>
            <li>
                <NavLink
                 to="ropa"
                 className={({isActive}) =>
                 isActive ? activeStyle : undefined
               }>
                Ropa
                </NavLink>
            </li>
            <li>
                <NavLink 
                to="electronico"
                className={({isActive}) =>
                isActive ? activeStyle : undefined
                 }>
                Electronico
                </NavLink>
            </li>
            <li>
                <NavLink 
                to="muebles"
                className={({isActive}) =>
                   isActive ? activeStyle : undefined
                 }>
                Muebles
                </NavLink>
            </li>
            <li>
                <NavLink
                 to="juguetes"
                 className={({isActive}) =>
                 isActive ? activeStyle : undefined
               }>
                Juguetes
                </NavLink>
            </li>
            <li>
                <NavLink
                 to="otros"
                 className={({isActive}) =>
                 isActive ? activeStyle : undefined
               }>
                Otros
                </NavLink>
            </li>
        </ul>
        <ul className="flex items-center gap-3">
            <li>
                <NavLink 
                to="mis-pedidos"
                className={({isActive}) =>
                   isActive ? activeStyle : undefined
                 }>
                Mis pedidos
                </NavLink>
            </li>
            <li>
                <NavLink
                 to="mi-cuenta"
                 className={({isActive}) =>
                   isActive ? activeStyle : undefined
                 }>
                Mi cuenta
                </NavLink>
            </li>
            <li>
                <NavLink
                 to="inicio-sesion"
                 className={({isActive}) =>
                   isActive ? activeStyle : undefined
                 }>
                Iniciar Sesion
                </NavLink>
            </li>
            <li>
                🛒0
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
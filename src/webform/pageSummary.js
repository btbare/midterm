import { NavLink } from "react-router-dom"

export default function PageSummary() {

    return(
        <>
            <nav>
                <ul>

                    <li>
                        <NavLink to="/webform/page1">Page1</NavLink>
                        <NavLink to="/webform/page1">Page1</NavLink>
                        <NavLink to="/webform/page1">Page1</NavLink>
                    </li>
                
                </ul>
            </nav>
        </>
    )
}
import { Link } from "react-router-dom";

function HomeItems(props) {
    return (
        <li className="App-lista">
            <Link to = {props.link}>
                {props.text}
            </Link>
        </li>
    )
}




export default HomeItems
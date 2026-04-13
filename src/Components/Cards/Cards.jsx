import { Link } from "react-router-dom";
import "./cards.css";

export function Cards({ pictoSrc, pictoState, pictoTrigger, title, linkTo }) {
  return (
    <Link to={linkTo} className="card">
      <lord-icon
        target=".card"
        src={pictoSrc}
        stroke="bold"
        state={pictoState}
        trigger={pictoTrigger}
      ></lord-icon>
      <p className="cardTitle">{title}</p>
    </Link>
  );
}

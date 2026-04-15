import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./collapse.css";

export function Collapse({ label, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="singleCollapse">
      <div className="collapseTitle" onClick={openCollapse}>
        <h4>{label}</h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`chevron ${isOpen ? "rotated" : ""}`}
        />
      </div>
      <div className={`collapseText ${isOpen ? "visible" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

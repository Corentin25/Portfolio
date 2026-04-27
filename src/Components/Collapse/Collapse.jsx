import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./collapse.css";

export function Collapse({ label, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCollapse = () => {
    setIsOpen(!isOpen);
  };

  const actionKeyboard = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openCollapse();
    }
  };

  return (
    <div className="singleCollapse">
      <div
        className="collapseHeader"
        onClick={openCollapse}
        tabIndex="0"
        role="button"
        aria-expanded={isOpen}
        onKeyDown={actionKeyboard}
      >
        <p className="collapseTitle">{label}</p>
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

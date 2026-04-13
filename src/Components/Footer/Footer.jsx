import { Link, useLocation } from "react-router-dom";
import "./footer.css";

export function Footer() {
  const location = useLocation();

  const LegalNoticeTitle = ["/home", "/projects", "/aboutme", "/contact"];

  const noLegalTitle = LegalNoticeTitle.includes(location.pathname);

  return (
    <footer>
      {noLegalTitle && (
        <Link to={"/legal"} className="legalNotices">
          Mentions Légales |
        </Link>
      )}
      <p className="copyright">© Copyright 2026</p>
    </footer>
  );
}

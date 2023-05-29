import headerCss from "./header.module.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header() {
  return (
    <div className={headerCss.headerContainer}>
      {/* Header title */}
      <h2>Test_Study</h2>

      {/* Profile section */}
      <div className={headerCss.profile}>
        <AccountCircleRoundedIcon style={{ color: "#2F7EC7" }} />
        <p>Sankarshan</p>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
}

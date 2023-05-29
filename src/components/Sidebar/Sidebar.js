import sidebarCss from "./sidebar.module.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { Box } from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{ display: { xs: "none", md: "inline-block" } }}
      className={sidebarCss.sidebarContainer}
    >
      {/* Top section */}
      <div className={sidebarCss.top}>
        <h2>React Test</h2>
        <hr />
      </div>

      {/* Bottom section */}
      <div className={sidebarCss.bottomPart}>
        <nav>
          <a href="#">
            <h3>
              <span>
                <DashboardOutlinedIcon style={{ fontSize: "1.3rem" }} />
              </span>
              Dashboard
            </h3>
          </a>
          <a href="#">
            <h3>
              <span>
                <NoteAddOutlinedIcon style={{ fontSize: "1.3rem" }} />
              </span>
              Montages
            </h3>
          </a>
          <a href="#">
            <h3>
              <span>
                <PaidOutlinedIcon style={{ fontSize: "1.3rem" }} />
              </span>
              Credits
            </h3>
          </a>
        </nav>

        <div>
          <h2>1,650</h2>
          <p>Total Credits Available</p>
        </div>
      </div>
    </Box>
  );
}

import { useContext } from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { MainFunctionState } from "../../States/MainFunctionState";

export default function BackupRefAfter({ channelNo, id, isClicked }) {
  const { channelState } = useContext(MainFunctionState);

  return (
    <TableBody
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <TableRow
        sx={{
          width: "49.6%",
          textAlign: "center",
          height: "100%",
        }}
      >
        Backup Channel
      </TableRow>

      <TableRow
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TableRow
          sx={{
            display: "flex",
          }}
        >
          <TableCell
            sx={{
              width: "100%",
              textAlign: "center",
              borderLeft: "solid #EBEBEB 2px",
              borderRight: "solid #EBEBEB 2px",
            }}
          >
            {isClicked
              ? channelState[channelNo].totalBoxes[id].backupMainValue
              : "Null"}
          </TableCell>
          <TableCell
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {isClicked
              ? channelState[channelNo].totalBoxes[id].backupRefValue
              : "Null"}
          </TableCell>
        </TableRow>
      </TableRow>
    </TableBody>
  );
}

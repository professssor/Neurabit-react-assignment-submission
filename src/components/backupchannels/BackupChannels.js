import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useContext } from "react";
import { MainFunctionState } from "../../States/MainFunctionState";

export default function Backupchannel({ containerId, boxId, value }) {
  const {
    deleteSelectedOptions,
    backupView,
    handleBackupPrimaryChannel,
    handleBackupReferenceChannel,
    channelState,
  } = useContext(MainFunctionState);

  return (
    // this will be rendered if backupView is true which will be done on setClick of add button
    <Box sx={{ display: backupView ? "block" : "none" }}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            background: "#F6F6F6",
            padding: "1rem",
            height: "fit-content",
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {/* the first input element in the backup channel  */}
          <FormControl
            sx={{
              color: "#959595",
              position: "relative",
              left: { xs: "16%", md: "10.5%" },
            }}
          >
            <InputLabel
              sx={{ textAlign: "green" }}
              id="demo-simple-select-helper-label"
            >
              Select Channel
            </InputLabel>
            <Select
              value={
                channelState[containerId].totalBoxes[boxId].selectBackupMain
              }
              onChange={(event) =>
                handleBackupPrimaryChannel(event, boxId, containerId, value)
              }
              sx={{ width: { xs: "4rem", md: "12rem" } }}
              labelId="demo-simple-select-label-1"
              id="demo-simple-select-1"
              label="First Select"
            >
              <MenuItem value="Null">Null</MenuItem>
              <MenuItem value="C1:X1">C1:X1</MenuItem>
              <MenuItem value="C1:A1">C1:A1</MenuItem>
              <MenuItem value="C1:B1">C1:B1</MenuItem>
              <MenuItem value="C1:C1">C1:C1</MenuItem>
              <MenuItem value="C1:D1">C1:D1</MenuItem>
              <MenuItem value="N/A">N/A</MenuItem>
            </Select>
          </FormControl>

          {/* the second input element in the backup channel  */}

          <FormControl sx={{ position: "relative", left: "6%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Select Channel
            </InputLabel>
            <Select
              value={
                channelState[containerId].totalBoxes[boxId].selectBackupRef
              }
              onChange={(event) =>
                handleBackupReferenceChannel(event, boxId, containerId, value)
              }
              sx={{ width: { xs: "4rem", md: "12rem" } }}
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              label="Second Select"
            >
              <MenuItem value="Null">Null</MenuItem>
              <MenuItem value="X1:C1">X1C1:</MenuItem>
              <MenuItem value="A1:C1">A1C1:</MenuItem>
              <MenuItem value="B1:C1">B1C1:</MenuItem>
              <MenuItem value="C1:C1">C1C1:</MenuItem>
              <MenuItem value="D1:C1">D1C1:</MenuItem>
              <MenuItem value="N/A">N/A</MenuItem>
            </Select>
          </FormControl>
          {/* this function will delete the selected option */}
          <a
            onClick={() => deleteSelectedOptions(boxId, containerId, value)}
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              left: "1.3rem",
            }}
          >
            <span
              style={{ color: "#E03A3A", fontSize: "2rem", margin: ".5rem" }}
            >
              <DeleteForeverOutlinedIcon />
            </span>
            <p
              style={{
                color: "#E03A3A",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              Delete
            </p>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

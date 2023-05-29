import React, { useContext } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import BackupRefAfter from "../BackupRefAfterView/BackupRefAfter";
import { ChannelDataState } from "../../States/ChannelDataState";
import { MainFunctionState } from "../../States/MainFunctionState";

export default function AfterSelect({ containerId, value, isClicked }) {
  // Accessing state from context
  const { channelState, backupToggle } = useContext(MainFunctionState);
  const { activeState, setActiveState } = useContext(ChannelDataState);

  return (
    <Box
      sx={{
        margin: "1rem",
        background: "#fff",
        width: "90%",
        height: "fit-content",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignSelf: "center",
        borderRadius: ".5rem",
      }}
    >
      {/* First part: Table */}
      <TableContainer
        sx={{
          width: {
            xs: "100%",
            md: "80%",
            border: "solid #EBEBEB .1px",
          },
        }}
      >
        <TableHead
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-around",
            borderBottom: "solid #EBEBEB 1px",
          }}
        >
          {/* Table headers */}
          <TableCell
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "1.1rem",
              height: "100%",
            }}
          >
            {value}
          </TableCell>
          <TableCell
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "1rem",
              borderLeft: "solid #EBEBEB 2px",
              borderRight: "solid #EBEBEB 2px",
            }}
          >
            {channelState[containerId].mainPrimaryValue}
          </TableCell>
          <TableCell
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "1rem",
              borderRight: "solid #EBEBEB 1px",
            }}
          >
            {channelState[containerId].mainRefValue}
          </TableCell>
        </TableHead>

        {/* Render BackupRefAfter components based on conditions */}
        {isClicked &&
          backupToggle &&
          channelState[containerId]?.totalBoxes?.map((value, index) => {
            return (
              <BackupRefAfter
                channelNo={containerId}
                id={index}
                value={value}
                isClicked={isClicked}
              />
            );
          })}
      </TableContainer>

      {/* Second part: Button */}
      <Box
        sx={{
          display: "flex",
          flex: "1",
          borderLeft: "solid #EBEBEB 1px",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "1rem", md: "0rem" },
        }}
      >
        <Button
          disabled={activeState === 3}
          sx={{
            border: "solid 1px #2F7EC7",
            padding: ".60rem",
            ...(activeState === 3 && { border: "solid 1px #B7B7B7" }),
          }}
        >
          <p
            onClick={() => setActiveState((prevVal) => prevVal - 1)}
            style={{
              fontSize: ".8rem",
              textTransform: "none",
              color: "#2F7EC7",
              ...(activeState === 3 && { color: "#B7B7B7" }),
            }}
          >
            Edit channel
          </p>
        </Button>
      </Box>
    </Box>
  );
}

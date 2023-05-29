import { Box, InputLabel, Link, MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Backupchannel from "../backupchannels/BackupChannels";
import { useContext, useState } from "react";
import { MainFunctionState } from "../../States/MainFunctionState";

export default function Selectionbox({ containerId, value, isClicked }) {
  const {
    handleBackupClick,
    backupToggle,
    secondHandleBackupClick,
    hideText,
    handleViewHide,
    channelState,
    handleMainPrimaryChannel,
    handleMainReferenceChannel,
  } = useContext(MainFunctionState);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "90%" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          padding: "1.4rem",
          borderRadius: ".3rem",
          background: "white",
          height: "fit-content",
          marginTop: ".5rem",
          display: "flex",
          width: "100%",
          flexDirection: { sm: "row" },
          justifyContent: { xs: "space-around", sm: "space-around" },
          alignItems: "center",
        }}
      >
        <h3 style={{ padding: ".5rem" }}>{value}</h3>
        <FormControl sx={{ color: "#959595" }}>
          <InputLabel
            sx={{ display: "flex" }}
            id="demo-simple-select-helper-label"
          >
            Select Channel
          </InputLabel>
          <Select
            value={channelState[containerId].selectPrimaryValue}
            onChange={(event) => handleMainPrimaryChannel(event, containerId)}
            sx={{ width: { xs: "4rem", md: "12rem" } }}
          >
            <MenuItem value="Null">Null</MenuItem>
            <MenuItem value="C1">C1</MenuItem>
            <MenuItem value="C2">C2</MenuItem>
            <MenuItem value="C3">C3</MenuItem>
            <MenuItem value="C4">C4</MenuItem>
            <MenuItem value="C5">C5</MenuItem>
            <MenuItem value="C6">C6</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">
            Select Channel
          </InputLabel>
          <Select
            value={channelState[containerId].selectRefValue}
            onChange={(event) => handleMainReferenceChannel(event, containerId)}
            sx={{ width: { xs: "4rem", md: "12rem" } }}
          >
            <MenuItem value="Null">Null</MenuItem>
            <MenuItem value="A1">A1</MenuItem>
            <MenuItem value="A2">A2</MenuItem>
            <MenuItem value="A3">A3</MenuItem>
            <MenuItem value="A4">A4</MenuItem>
            <MenuItem value="A5">A5</MenuItem>
            <MenuItem value="A6">A6</MenuItem>
          </Select>
        </FormControl>
        <a style={{ textDecoration: "none" }}>
          <p style={{ color: "#2F7EC7" }}>
            {isClicked &&
            backupToggle &&
            channelState[containerId].totalBoxes.length > 0 ? (
              <p
                onClick={() => handleViewHide()}
                style={{
                  color: "#2F7EC7",
                }}
              >
                {!hideText
                  ? `Hide backup channel (${channelState[containerId].totalBoxes.length})`
                  : `View backup channel (${channelState[containerId].totalBoxes.length})`}
              </p>
            ) : (
              <p
                style={{
                  color: "#2F7EC7",
                }}
                onClick={() => handleBackupClick(containerId)}
              >
                +Add backup channel
              </p>
            )}
          </p>
        </a>
      </Box>

      {isClicked &&
        backupToggle &&
        channelState[containerId].totalBoxes.map((value, index) => {
          return (
            <Backupchannel
              containerId={containerId}
              boxId={index}
              value={value.main}
            />
          );
        })}

      {isClicked &&
      backupToggle &&
      !hideText &&
      channelState[containerId].totalBoxes.length > 0 ? (
        <Box
          sx={{
            overflowX: "hidden",
            width: "100%",
            padding: ".2rem",
            background: "#F6F6F6",
          }}
        >
          <Link
            onClick={() => secondHandleBackupClick(containerId)}
            sx={{
              position: "relative",
              left: { xs: "8rem", md: "16rem" },
              width: "10%",
              textAlign: "left",
              overflowX: "hidden",
              textDecoration: "none",
            }}
          >
            <p style={{ color: "#2F7EC7" }}>+Add Backup Channels</p>
          </Link>
        </Box>
      ) : null}
    </Box>
  );
}

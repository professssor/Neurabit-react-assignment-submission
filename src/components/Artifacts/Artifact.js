import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useContext, useState } from "react";
import { ChannelDataState } from "../../States/ChannelDataState";

export default function Artifact() {
  const { schemaJson, activeState, selectedOptions, setSelectedOptions } =
    useContext(ChannelDataState);

  const handleOptionalsChange = (key) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(key)) {
        return prevSelectedOptions.filter((option) => option !== key);
      } else {
        return [...prevSelectedOptions, key];
      }
    });
  };

  return (
    <Box
      sx={{
        height: "max-content",
        background: "#fff",
        width: "90%",
        marginTop: "1.5rem",
      }}
    >
      {/* when the active state value is 2 */}
      {activeState === 2 && (
        <>
          <Box
            sx={{
              paddingY: "2rem",
              display: "flex",
              marginLeft: "3rem",

              justifyContent: "flex-start",
            }}
          >
            <p
              style={{
                color: "#8A8A8A",
              }}
            >
              Output Format:
            </p>
            <h4 style={{ marginLeft: "2rem" }}>Wannombi.xml</h4>
          </Box>
        </>
      )}
      {/* when the active state value is 1 */}
      {activeState === 1 && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "center", md: "flex-start" },
              left: { sm: ".5%", md: "6.5%" },
              marginY: "1.5rem",
              position: "relative",
              width: { sm: "90%", md: "80%" },
              alignItems: "center",
            }}
          >
            {" "}
            <h4 style={{ marginRight: "3.2rem" }}>Additional settings :</h4>
            {schemaJson.optionals.map((optional, index) => (
              <div
                sx={{
                  padding: ".3rem",
                  display: "flex",
                  flexDirection: "row",
                }}
                key={index}
              >
                {Object.entries(optional).map(([key, value]) => {
                  return (
                    <FormControlLabel
                      onChange={() => handleOptionalsChange(key)}
                      sx={{ fontSize: "1rem" }}
                      key={key}
                      control={<Checkbox />}
                      label={key}
                    />
                  );
                })}
              </div>
            ))}
          </Box>
        </>
      )}

      {/* if active state value is 3 */}
      {activeState === 3 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: { xs: "center", md: "flex-start" },
            left: { sm: ".5%", md: "6.5%" },
            marginY: "1.5rem",
            position: "relative",
            width: { sm: "90%", md: "80%" },
            alignItems: "center",
          }}
        >
          <h4 style={{ marginRight: "3rem" }}>Additional settings :</h4>
          {selectedOptions.length === 0
            ? "no additional value added"
            : selectedOptions.map((option) => (
                <p style={{ padding: ".7rem" }}>{option}</p>
              ))}
        </Box>
      )}
    </Box>
  );
}

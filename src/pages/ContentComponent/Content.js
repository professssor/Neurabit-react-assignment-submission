import { Box } from "@mui/material";
import Footer from "../../components/FooterButtons/Footer";
import Header from "../../components/Header/Header";
import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";
import Selectionbox from "../../components/SelectionContainer/Selectionbox";
import Selectionlabel from "../../components/selectionLabel/Selectionlabel";
import { useContext } from "react";
import Artifact from "../../components/Artifacts/Artifact";
import AfterSelect from "../../components/AfterSelectStep/AfterSelect";
import Upload from "../../components/Upload/Upload";
import { ChannelDataState } from "../../States/ChannelDataState";
import SuccessMessage from "../../components/succesfullPage/SuccessMessage";
import { MainFunctionState } from "../../States/MainFunctionState";

export default function Content() {
  // Access channelState and activeState from the context
  const { channelState } = useContext(MainFunctionState);
  const { activeState } = useContext(ChannelDataState);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowY: "scroll",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: { xs: "space-between", md: "space-between" },
      }}
    >
      <section>
        <Header />
      </section>
      <Box
        sx={{
          height: "500vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "center",
        }}
      >
        <ProgressStepper />

        {/* First default page */}
        {activeState === 0 && <Upload />}

        {/* Second page */}
        {activeState === 1 && (
          <>
            <Selectionlabel />
            {channelState.map(({ channel, id, isClicked }) => {
              return (
                <>
                  <Selectionbox
                    containerId={id}
                    value={channel}
                    isClicked={isClicked}
                  />
                </>
              );
            })}
            <Artifact />
          </>
        )}

        {/* Third page */}
        {activeState === 2 && (
          <>
            <Selectionlabel />
            {channelState.map(({ channel, id, isClicked }) => {
              return (
                <>
                  <AfterSelect
                    containerId={id}
                    value={channel}
                    isClicked={isClicked}
                  />
                </>
              );
            })}
            <Artifact />
          </>
        )}

        {/* Fourth page */}
        {activeState === 3 && (
          <>
            <Selectionlabel />
            {channelState.map(({ channel, id, isClicked }) => {
              return (
                <>
                  <AfterSelect
                    containerId={id}
                    value={channel}
                    isClicked={isClicked}
                  />
                </>
              );
            })}
            <Artifact />
          </>
        )}

        {activeState === 3 && <SuccessMessage />}

        <Footer />
      </Box>
    </Box>
  );
}

import React, { createContext, useState } from "react";

// Sample JSON schema data
const schemaJson = {
  formats: ["json", "csv"],
  version: 1,
  channels: [
    "channel-1",
    "channel-2",
    "channel-3",
    "channel-4",
    "channel-5",
    "channel-6",
    "channel-7",
    "channel-8",
    "channel-9",
    "channel-9",
    "channel-10",
  ],
  optionals: [
    {
      optional1: true,
      optional2: true,
    },
  ],
};

// Create the context
export const ChannelDataState = createContext();

export default function ChannelDataStateProvider({ children }) {
  // State for active step index
  const [activeState, setActiveState] = useState(0);

  // State for selected option in additional settings button label
  const [selectedOptions, setSelectedOptions] = useState([]);

  // State for next button label
  const [nextButton, setNextButton] = useState("Next");

  // Array of steps
  const steps = ["UploadEDFs", "Map Channels", "Save & Preview"];

  // Calculate the total steps index count
  const totalStepsIndexCount = steps.length - 1;

  // Generate channel list with IDs
  const channelListWithList = schemaJson.channels.map((channel, i) => ({
    channel,
    id: i,
    isClicked: false,
    totalBoxes: [],
    mainPrimaryValue: "none selected",
    mainRefValue: "none selected",
  }));

  // Function to handle backClick operations
  const handleBack = () => {
    setActiveState((prevState) => {
      const nextState = prevState - 1;
      setNextButton(nextState < totalStepsIndexCount ? "Next" : "Save");
      return nextState < 0 ? prevState : nextState;
    });
  };

  // Function to handle nextClick operations
  const handleNext = () => {
    setActiveState((prevState) => {
      const nextState = prevState + 1;
      setNextButton(
        nextState === totalStepsIndexCount
          ? "Save"
          : nextState > totalStepsIndexCount
          ? "Saved"
          : "Next"
      );
      return nextState > steps.length ? prevState : nextState;
    });
  };

  return (
    <ChannelDataState.Provider
      value={{
        activeState,
        setActiveState,
        handleBack,
        handleNext,
        nextButton,
        steps,
        channelListWithList,
        schemaJson,
        selectedOptions,
        setSelectedOptions,
      }}
    >
      {children}
    </ChannelDataState.Provider>
  );
}

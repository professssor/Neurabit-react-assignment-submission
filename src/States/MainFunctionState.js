import { createContext, useContext, useEffect, useState } from "react";
import { ChannelDataState, FooterButtonState } from "./ChannelDataState";

export const MainFunctionState = createContext();

export default function MainFunctionStateProvider({ children }) {
  // State for hiding text
  const [hideText, setHideText] = useState(false);

  // State for backup view toggle
  const [backupView, setBackupView] = useState(true);

  // Get channel list with initial state from context
  const { channelListWithList } = useContext(ChannelDataState);

  // State for tracking click
  const [click, setClick] = useState(false);

  // State for backup toggle
  const [backupToggle, setBackupToggle] = useState(false);

  // State for channel state retention
  const [channelState, setChannelState] = useState(() => {
    const storedChannelState = localStorage.getItem("channelState");
    return storedChannelState
      ? JSON.parse(storedChannelState)
      : channelListWithList;
  });

  // Store channel state in local storage
  useEffect(() => {
    localStorage.setItem("channelState", JSON.stringify(channelState));
  }, [channelState]);

  // ****************THE MAIN FUNCTIONALITY FUNCTIONS*************************************************

  // Handle main primary channel selection
  const handleMainPrimaryChannel = (event, containerId) => {
    event.preventDefault();
    const updatedChannelState = channelState.map((channel) => {
      if (channel.id === containerId) {
        return {
          ...channel,
          selectPrimaryValue: event.target.value,
          mainPrimaryValue: event.target.value,
        };
      }
      return channel;
    });

    setChannelState(updatedChannelState);
  };

  // Handle main reference channel selection
  const handleMainReferenceChannel = (event, containerId) => {
    event.preventDefault();
    const updatedChannelState = channelState.map((channel) => {
      if (channel.id === containerId) {
        return {
          ...channel,
          selectRefValue: event.target.value,
          mainRefValue: event.target.value,
        };
      }
      return channel;
    });

    setChannelState(updatedChannelState);
  };
  // ****************THE BACKUP FUNNCTIONALITY FUNCTIONS*************************************************

  // Handle backup primary channel selection
  const handleBackupPrimaryChannel = (event, boxId, containerId, value) => {
    event.preventDefault();

    const updatedChannelState = channelState.map((channel) => {
      if (channel.id === containerId) {
        const updatedTotalBoxes = channel.totalBoxes.map((box, index) => {
          if (index === boxId) {
            return {
              ...box,
              backupMainValue: event.target.value,
              selectBackupMain: event.target.value,
            };
          }
          return box;
        });
        return {
          ...channel,
          totalBoxes: updatedTotalBoxes,
        };
      }
      return channel;
    });

    setChannelState(updatedChannelState);
  };

  // Handle backup reference channel selection
  const handleBackupReferenceChannel = (event, boxId, containerId) => {
    const updatedChannelState = channelState.map((channel) => {
      if (channel.id === containerId) {
        const updatedTotalBoxes = channel.totalBoxes.map((box, index) => {
          if (index === boxId) {
            return {
              ...box,
              backupRefValue: event.target.value,
              selectBackupRef: event.target.value,
            };
          }
          return box;
        });
        return {
          ...channel,
          totalBoxes: updatedTotalBoxes,
        };
      }
      return channel;
    });

    setChannelState(updatedChannelState);
  };
  console.log(channelState);

  // Handle backup click
  const handleBackupClick = (key) => {
    setChannelState((prevChannelState) => {
      return prevChannelState.map((channel) => {
        if (channel.id === key) {
          setBackupToggle(true);

          const updatedChannel = {
            ...channel,
            isClicked: true,
            totalBoxes: [{ main: 0 }],
            // channel.totalBoxes.length === 0
            //   ? [{ main: 0 }]
            //   : channel.totalBoxes,
          };
          return updatedChannel;
        }
        return channel;
      });
    });
  };

  // Handle second backup click
  const secondHandleBackupClick = (key) => {
    setChannelState((prevChannelState) => {
      return prevChannelState.map((channel) => {
        if (channel.id === key) {
          const updatedChannel = {
            ...channel,
            totalBoxes: [
              ...channel.totalBoxes,
              { main: channel.totalBoxes.length },
            ],
          };
          return updatedChannel;
        }
        return channel;
      });
    });
  };

  // Delete selected options
  const deleteSelectedOptions = (boxId, containerId, value) => {
    setChannelState((prevChannelState) => {
      return prevChannelState.map((channel) => {
        if (channel.id === containerId) {
          const updatedChannel = {
            ...channel,
            totalBoxes: channel.totalBoxes.filter((box) => box.main !== boxId),
          };
          return updatedChannel;
        }
        return channel;
      });
    });
  };

  // Handle view/hide click
  const handleViewHide = () => {
    setHideText((prevHideText) => !prevHideText);
    setBackupView((prev) => !prev);
  };

  return (
    <MainFunctionState.Provider
      value={{
        backupToggle,
        handleBackupClick,
        secondHandleBackupClick,
        channelState,
        deleteSelectedOptions,
        handleViewHide,
        hideText,
        backupView,
        handleMainPrimaryChannel,
        handleMainReferenceChannel,
        handleBackupPrimaryChannel,
        handleBackupReferenceChannel,
        click,
        setClick,
      }}
    >
      {children}
    </MainFunctionState.Provider>
  );
}

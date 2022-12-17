import { createContext, useContext } from "react";

export const GlobalContext = createContext({
  count: Number,
  setCount: () => {},
  currentTime: Boolean,
  setCurrentTime: () => {},
  questionNmbr: Number,
  setQuestionNmbr: Number,
  value: "",
  setvalue: () => {},
  isGroupActive: false,
  setisGroupActive: () => {},

  disable: false,
  setDisable: () => {},
  optionButton: "",
  btns: [],
  selectedRandom: [],
  setSelectedRandom: () => {},
  incorrectOptions: [],
  isModalOpen: false,
  setIsModalOpen: () => {},
  openWrong: false,
  setOpenWrong: () => {},
  isRightAnswer: false,
  setisRightAnswer: () => {},
  levels: [],
});

export const useGlobalCtxt = () => useContext(GlobalContext);

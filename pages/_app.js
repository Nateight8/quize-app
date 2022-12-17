import { useEffect, useRef, useState } from "react";
import { GlobalContext } from "../Components/GlobalContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [questionNmbr, setQuestionNmbr] = useState(0);
  const [value, setvalue] = useState("");
  const [currentTime, setCurrentTime] = useState(true);
  const [count, setCount] = useState(30);
  const [isGroupActive, setisGroupActive] = useState(false);
  const optionButton = useRef();
  // const [isActive, setIsActive] = useState(false);
  //  setCurrentTime(true);
  const [disable, setDisable] = useState(false);
  const [selectedRandom, setSelectedRandom] = useState([]);
  const incorrectOptions = [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openWrong, setOpenWrong] = useState(false);
  const [isRightAnswer, setisRightAnswer] = useState(false);
  const levels = [
    { level: 1, prize: "$ 500" },
    { level: 2, prize: "$ 1500" },
    { level: 3, prize: "$ 3000" },
    { level: 4, prize: "$ 6000" },
    { level: 5, prize: "$ 12000" },
    { level: 6, prize: "$ 25000" },
    { level: 7, prize: "$ 50000" },
    { level: 8, prize: "$ 150000" },
    { level: 9, prize: "$ 300000" },
    { level: 10, prize: "$ 500000" },
  ].reverse();
  return (
    <GlobalContext.Provider
      value={{
        questionNmbr,
        setQuestionNmbr,
        value,
        setvalue,
        currentTime,
        setCurrentTime,
        count,
        setCount,
        isGroupActive,
        setisGroupActive,
        isModalOpen,
        setIsModalOpen,
        disable,
        setDisable,
        optionButton,
        selectedRandom,
        setSelectedRandom,
        incorrectOptions,
        openWrong,
        setOpenWrong,
        isRightAnswer,
        setisRightAnswer,
        levels,
      }}
    >
      <Component {...pageProps} />{" "}
    </GlobalContext.Provider>
  );
}

export default MyApp;

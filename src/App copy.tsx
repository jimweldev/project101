import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";

const App = () => {
  const [hearts, setHearts] = useState<number[]>([]);

  const [position, setPosition] = useState({ x: "28%", y: "80px" } as any);

  const [page, setPage] = useState(0);

  // types
  // next
  // annoying
  // invisible
  // const questionare2 = [
  //   {
  //     text: {
  //       label: "Hello Clarisse!",
  //       style: {},
  //     },
  //     leftButton: {
  //       text: "No",
  //       type: "invisible",
  //     },
  //     rightButton: {
  //       text: "Next",
  //       type: "next",
  //     },
  //     isHeartsVisible: false,
  //   },
  // ];

  const questionare = [
    {
      text: {
        label: "Hello Clarisse!",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "My name is Jimwel.",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "I just want to ask you a question.",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "Do you have a boyfried?",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      rightButton: {
        text: "Yes",
        isAnnoying: false,
        isVisible: true,
        canNext: false,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "Nice! 🤩",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "How do I say this? 😭",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "I don't know how to start. 😂",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "But I will do it anyway. 👌",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "I just saw you on facebook and ...",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "I find you attractive, beautiful and cute. 😊",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "And...",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "And... and...",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "And... and... and..",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "Can I...",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "Can I...",
        style: {
          textDecoration: "line-through",
        },
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: false,
    },
    {
      text: {
        label: "Tap all the hearts from left to right.",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      isHeartsVisible: true,
    },
    {
      text: {
        label: "Tap all the hearts from left to right.",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: true,
        isVisible: true,
        canNext: false,
      },
      rightButton: {
        text: "Yes",
        isAnnoying: false,
        isVisible: true,
        canNext: true,
      },
      isHeartsVisible: true,
    },
    {
      text: {
        label: "Yippiee!!! 🥳🥳🥳",
        style: {},
      },
      leftButton: {
        text: "No",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      rightButton: {
        text: "Next",
        isAnnoying: false,
        isVisible: false,
        canNext: false,
      },
      isHeartsVisible: true,
    },
  ];

  const handleMove = () => {
    const mainForm = document.querySelector<HTMLElement>("#form");
    const button = document.querySelector<HTMLElement>(
      "#form #annoying-button"
    );
    if (mainForm && button) {
      const x = Math.floor(
        Math.random() * (mainForm.clientWidth - button.offsetWidth)
      );
      const y = Math.floor(
        Math.random() * (mainForm.clientHeight - button.offsetHeight)
      );
      setPosition({ x, y });
    }
  };

  const handleClickHeart = (number: number) => {
    if (!hearts.includes(number)) {
      if (getMaxHeart() === number) {
        setHearts([...hearts, number]);

        if (number === 4) {
          if (page < questionare.length - 1) {
            setPage(page + 1);
          }
        }
      }
    }
  };

  const getMaxHeart = () => {
    return hearts.length > 0 ? Math.max(...hearts) + 1 : 1;
  };

  return (
    <div className="h-screen w-screen bg-blue-400 flex items-center justify-center overflow-hidden">
      <div
        className="h-full w-full sm:w-[400px] sm:h-[600px] bg-red-400 shadow-lg sm:rounded-md p-10 flex flex-col"
        id="form"
        style={{ position: "relative" }}
      >
        <div>
          {questionare[page].isHeartsVisible && (
            <>
              <Heart
                duration={5}
                x="-10px"
                y="30px"
                delay={0}
                onClick={() => {
                  handleClickHeart(1);
                }}
                hearts={hearts}
                heartNumber={1}
              >
                Can
              </Heart>
              <Heart
                duration={5.5}
                x="20%"
                y="95px"
                delay={0.75}
                onClick={() => {
                  handleClickHeart(2);
                }}
                hearts={hearts}
                heartNumber={2}
              >
                I
              </Heart>
              <Heart
                duration={5}
                x="45%"
                y="35px"
                delay={0.5}
                onClick={() => {
                  handleClickHeart(3);
                }}
                hearts={hearts}
                heartNumber={3}
              >
                Court
              </Heart>
              <Heart
                duration={5.5}
                x="75%"
                y="75px"
                delay={0.8}
                onClick={() => {
                  handleClickHeart(4);
                }}
                hearts={hearts}
                heartNumber={4}
              >
                You?
              </Heart>
            </>
          )}
        </div>

        <div className="flex-1 py-10 flex flex-col items-center justify-center">
          <h4
            className="text-3xl font-bold text-center"
            style={questionare[page].text.style}
          >
            {questionare[page].text.label}
          </h4>
        </div>

        <div className="flex items-center justify-evenly py-10">
          <Button
            variant="secondary"
            id="annoying-button"
            style={{
              position: "absolute",
              left: position.x,
              bottom: position.y,
              display: questionare[page].leftButton.isVisible
                ? "block"
                : "none",
            }}
            onMouseOver={() => {
              questionare[page].leftButton.isAnnoying && handleMove();
            }}
            onClick={() => {
              if (questionare[page].leftButton.canNext) {
                if (page < questionare.length - 1) {
                  setPage(page + 1);
                }
              } else {
                questionare[page].leftButton.isAnnoying && handleMove();
              }
            }}
          >
            {questionare[page].leftButton.text}
          </Button>
          <Button
            className="bottom-[80px] right-[28%]"
            style={{
              position: "absolute",
              display: questionare[page].rightButton.isVisible
                ? "block"
                : "none",
            }}
            onClick={() => {
              // setPosition({ x: "28%", y: "80px" });
              if (questionare[page].rightButton.canNext) {
                if (page < questionare.length - 1) {
                  setPage(page + 1);
                }
              }
            }}
          >
            {questionare[page].rightButton.text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;

// Heart Component with a duration prop
const Heart = ({
  children,
  duration,
  x,
  y,
  delay,
  onClick,
  hearts,
  heartNumber,
}: any) => {
  return (
    <motion.div
      onClick={() => {
        onClick(); // Call the onClick prop
      }}
      className="heart"
      animate={["initial", "beat"]}
      variants={{
        grow: {
          scale: 1.2,
          transition: {
            duration: 0.3,
          },
        },
        beat: {
          scale: [1, 1.2, 1],
          transition: {
            duration: 3,
            delay: delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          },
        },
        initial: {
          transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: "mirror",
          },
        },
      }}
      style={{ position: "absolute", top: y, left: x }}
    >
      {hearts.includes(heartNumber) && <p>{children}</p>}
    </motion.div>
  );
};

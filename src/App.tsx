import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useUserStore from "./store/userStore";
import { toast } from "sonner";

const App = () => {
  const { user, setUser } = useUserStore((state: any) => ({
    user: state.user,
    setUser: state.setUser,
  }));

  const hasBoyfriendRef = useRef<HTMLButtonElement>(null);

  const [hearts, setHearts] = useState<number[]>([]);

  const [position, setPosition] = useState({ x: "28%", y: "80px" } as any);

  const [page, setPage] = useState(0);

  // types
  // next
  // annoying
  // invisible
  // has boyfriend
  const questionare = [
    {
      text: {
        label: "Hello Clarisse!",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "My name is Jimwel.",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "I just want to ask you a question.",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "Do you have a boyfriend? 😬",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "next",
      },
      rightButton: {
        text: "Yes",
        type: "has boyfriend",
      },
      content: "none",
    },
    {
      text: {
        label: "Nice! 🤩",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "How do I say this? 😭",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "I don't know how to start. 😂",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "But I will do it anyway. 👌",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "I just noticed you on facebook.",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "You are always on my suggested friends. And...",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "I find you attractive, beautiful and cute. 😊",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "And then, I have decided to send you a friend request. 😊",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "And...",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "And... and...",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "And... and... and...",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "There are three things I've never seen in my life.",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "invisible",
      },
      content: "threeThings",
    },
    {
      text: {
        label: "Can I...",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
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
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "none",
    },
    {
      text: {
        label: "Tap all the hearts from left to right.",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "invisible",
      },
      content: "hearts",
    },
    {
      text: {
        label: "🙏🙏🙏",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "annoying",
      },
      rightButton: {
        text: "Yes",
        type: "can court",
      },
      content: "hearts",
    },
    {
      text: {
        label: "Yippiee!!! 🥳🥳🥳",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "next",
      },
      content: "hearts",
    },
    {
      text: {
        label: "Please accept my friend request. 😊",
        style: {},
      },
      leftButton: {
        text: "No",
        type: "invisible",
      },
      rightButton: {
        text: "Next",
        type: "invisible",
      },
      content: "hearts",
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

  const handleClick = (type: string) => {
    // next
    // annoying
    // invisible
    // has boyfriend

    if (type === "next") {
      if (page < questionare.length - 1) {
        setPosition({ x: "28%", y: "80px" });
        setPage(page + 1);
      }
    } else if (type === "annoying") {
      handleMove();
    } else if (type === "has boyfriend") {
      if (hasBoyfriendRef.current) {
        hasBoyfriendRef.current.click();
      }
    } else if (type === "really has boyfriend") {
      toast("Okay 😞");

      sendEmail({
        to_name: "Jimwel Dizon",
        from_name: "Clarisse Basilio",
        message: "I have a boyfriend",
      });
    } else if (type === "can court") {
      handleClick("next");
      sendEmail({
        to_name: "Jimwel Dizon",
        from_name: "Clarisse Basilio",
        message: "You can court me",
      });
    }
  };

  const sendEmail = (data: any) => {
    if (import.meta.env.VITE_IS_EMAIL_ON === "true") {
      emailjs.send("service_muzumx5", "template_x8ugqe9", data, {
        publicKey: "_X3U0OUfZWaFIn384",
      });
    }
  };

  useEffect(() => {
    let currentUser = user;

    if (!user) {
      currentUser = generateRandomString(5);
      setUser(currentUser);
    }

    sendEmail({
      to_name: "Jimwel Dizon",
      from_name: "Clarisse Basilio",
      message: `Viewed the website by ${currentUser}`,
    });
  }, []);

  const generateRandomString = (length: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  return (
    <div className="h-screen w-screen bg-blue-400 flex items-center justify-center overflow-hidden">
      <div
        className="h-full w-full sm:w-[400px] sm:h-[600px] bg-red-400 shadow-lg sm:rounded-md p-10 flex flex-col"
        id="form"
        style={{ position: "relative" }}
      >
        <div>
          {questionare[page].content === "hearts" && (
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

          {questionare[page].content === "threeThings" && (
            <>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-6">View</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Three things I've never seen in my life.
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <iframe
                      className="aspect-square"
                      src="https://www.facebook.com/plugins/video.php?height=513&href=https%3A%2F%2Fwww.facebook.com%2FTheGhibliFamily%2Fvideos%2F602475898764105%2F&show_text=false&width=560&t=0"
                      width="100%"
                    ></iframe>

                    <div className="flex justify-end space-x-2">
                      <DialogClose asChild>
                        <Button
                          type="button"
                          onClick={() => handleClick("next")}
                        >
                          Next
                        </Button>
                      </DialogClose>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>

        <div className="flex items-center justify-evenly py-10">
          <Button
            variant="secondary"
            className="main-button"
            id="annoying-button"
            style={{
              position: "absolute",
              left: position.x,
              bottom: position.y,
              display:
                questionare[page].leftButton.type !== "invisible"
                  ? "block"
                  : "none",
            }}
            onMouseOver={() => {
              questionare[page].leftButton.type === "annoying" && handleMove();
            }}
            onClick={() => {
              handleClick(questionare[page].leftButton.type);
            }}
          >
            {questionare[page].leftButton.text}
          </Button>
          <Button
            className="main-button bottom-[80px] right-[28%]"
            style={{
              position: "absolute",
              display:
                questionare[page].rightButton.type !== "invisible"
                  ? "block"
                  : "none",
            }}
            onClick={() => {
              handleClick(questionare[page].rightButton.type);
            }}
          >
            {questionare[page].rightButton.text}
          </Button>
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="hidden" ref={hasBoyfriendRef} variant="outline">
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <div className="grid gap-10 py-4">
            <h4 className="text-center text-xl font-bold">Really? 😭</h4>

            <div className="flex justify-end space-x-2">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => handleClick("next")}
                >
                  No
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button onClick={() => handleClick("really has boyfriend")}>
                  Yes
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
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

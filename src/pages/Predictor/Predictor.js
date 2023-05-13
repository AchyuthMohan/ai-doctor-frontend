import { useState, useRef, useEffect } from "react";
import styles from "./Predictor.module.css";
import ReactMarkdown from "react-markdown";
import CircularProgress from "@mui/material/CircularProgress";
import { baseUrl } from "../../utils/urls";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hi there! How can I help?",
      type: "apiMessage",
    },
  ]);

  const messageListRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    const messageList = messageListRef.current;
    messageList.scrollTop = messageList.scrollHeight;
  }, [messages]);

  useEffect(() => {
    textAreaRef.current.focus();
    window.scrollTo(0, 0);
  }, []);

  const handleError = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        message: "Oops! There seems to be an error. Please try again.",
        type: "apiMessage",
      },
    ]);
    setLoading(false);
    setUserInput("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInput.trim() === "") {
      return;
    }

    setLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { message: userInput, type: "userMessage" },
    ]);

    const response = await fetch(`${baseUrl}/chatbot/predict/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    console.log("resData: ", data);
    if (!response.ok) {
      handleError();
      return;
    }

    setUserInput("");
    console.log(data.answer);
    if (data.error === "Unauthorized") {
      handleError();
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { message: data.answer, type: "apiMessage" },
    ]);
    setLoading(false);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && userInput) {
      if (!e.shiftKey && userInput) {
        handleSubmit(e);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.cloud}>
          <div ref={messageListRef} className={styles.messagelist}>
            {messages.map((message, index) => {
              return (
                <div
                  key={index}
                  className={
                    message.type === "userMessage" &&
                    loading &&
                    index === messages.length - 1
                      ? styles.usermessagewaiting
                      : message.type === "apiMessage"
                      ? styles.apimessage
                      : styles.usermessage
                  }
                >
                  {message.type === "apiMessage" ? (
                    <img
                      src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4"
                      alt="AI"
                      width="30"
                      height="30"
                      className={styles.boticon}
                      priority={true}
                    />
                  ) : (
                    <img
                      src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4"
                      alt="Me"
                      width="30"
                      border-radius="50%"
                      height="30"
                      className={styles.usericon}
                      priority={true}
                    />
                  )}
                  <div className={styles.markdownanswer}>
                    <ReactMarkdown linkTarget={"_blank"}>
                      {message.message}
                    </ReactMarkdown>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.cloudform}>
            <form onSubmit={handleSubmit}>
              <textarea
                disabled={loading}
                onKeyDown={handleEnter}
                ref={textAreaRef}
                autoFocus={false}
                rows={1}
                maxLength={512}
                type="text"
                id="userInput"
                name="userInput"
                placeholder={
                  loading ? "Waiting for response..." : "Type your question..."
                }
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className={styles.textarea}
              />
              <button
                type="submit"
                disabled={loading}
                className={styles.generatebutton}
              >
                {loading ? (
                  <div className={styles.loadingwheel}>
                    <CircularProgress color="inherit" size={20} />{" "}
                  </div>
                ) : (
                  <svg
                    viewBox="0 0 20 20"
                    className={styles.svgicon}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

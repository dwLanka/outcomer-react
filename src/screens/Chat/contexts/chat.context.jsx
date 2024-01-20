import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { ChatAPI, problemIdentifier } from "../api";

export const ChatContext = React.createContext({
  chats: [],
  user: "",
  isAnswerPending: false,
  handleAskMessage: () => {},
});

export const ChatContextProvider = ({ children, name }) => {
  const [chats, setChats] = React.useState([]);
  const [questionCount, setQuestionCount] = React.useState(0);
  const [underlyingProblem, setUnderlyingProblem] = React.useState("");
  const [userIntent, setUserIntent] = React.useState("");

  const chatMutation = useMutation({
    mutationFn: async (payload) => {
      return ChatAPI(payload);
    },
    onSuccess: (data) => {
      if (!data) {
        return;
      }

      const answer = data?.isTriggered ? "Is Triggered" : data?.answer;

      setQuestionCount((prev) => prev + 1);

      setChats((prev) => {
        return [...prev, { type: "bot", answer }];
      });
    },
  });

  const isQueryEnable = React.useMemo(() => {
    return questionCount >= 5;
  }, [questionCount]);

  const { data: problemData, isSuccess } = useQuery({
    queryKey: ["problem_identifier"],
    queryFn: async () => {
      return await problemIdentifier(name);
    },
    enabled: !!isQueryEnable,
  });

  const handleAskMessage = React.useCallback(
    (question) => {
      const payload = {
        question: question,
        userId: name,
        underlyingProblem: underlyingProblem,
        userIntent: userIntent,
      };

      chatMutation.mutateAsync(payload);
      setChats((prev) => [...prev, { type: "user", question: question }]);
    },
    [chatMutation, name, underlyingProblem, userIntent]
  );

  React.useEffect(() => {
    if (isSuccess && problemData) {
      setUnderlyingProblem(problemData?.UnderlyingProblem || "");
      setUserIntent(problemData?.UserIntent || "");
      setQuestionCount(0);
    }

    return () => {
      setUnderlyingProblem("");
      setUserIntent("");
      setQuestionCount(0);
    };
  }, [isSuccess, problemData]);

  const values = {
    chats,
    user: name,
    isAnswerPending: chatMutation?.isPending,
    handleAskMessage,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

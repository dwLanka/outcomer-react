import { API_SERVICE } from "../../../service/services";

export const ChatAPI = async ({
  question,
  underlyingProblem = "",
  userIntent = "",
  userId = "",
}) => {
  const reqBody = {
    Question: question,
    UnderlyingProblem: underlyingProblem,
    UserIntent: userIntent,
    UserId: userId,
  };

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const res = await API_SERVICE.post("/OutcomersChat", reqBody);
      console.log(res?.status);

      if (res?.status === 200) {
        resolve(res?.data);
        return;
      }

      resolve(null);
    } catch (error) {
      reject(error);
    }
  });
};

export const problemIdentifier = async (userId) => {
  const reqBody = {
    UserId: userId,
  };

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const res = await API_SERVICE.post(
        "/OutcomersProblemIdentifier",
        reqBody
      );

      if (res?.status === 200) {
        resolve(res?.data);
        return;
      }

      resolve(null);
    } catch (error) {
      reject(error);
    }
  });
};

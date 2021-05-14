import axios from "axios";
import { PHONENUMBERS } from "./urls";

export const getPhonenumbers = async () => {
  const { data } = await axios.get(`${PHONENUMBERS}`);
  return data;
};

export const postPhonenumber = async (body) => {
  const response = await axios.post(PHONENUMBERS, body);

  return response;
};

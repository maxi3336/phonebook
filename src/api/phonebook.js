import axios from "axios";
import { PHONENUMBERS } from "./urls";

export const getPhonenumbers = async () => {
  const { data } = await axios.get(`${PHONENUMBERS}`);
  return data;
};

export const postPhonenumber = async (name, number) => {
  const body = { name, phonenumber: number };
  const response = await axios.post(PHONENUMBERS, body);

  return response;
};

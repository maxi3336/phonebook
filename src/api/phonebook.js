import axios from "axios";
import { PHONENUMBERS } from "./urls";

export const getPhonenumbers = async (search = "") => {
  const { data } = await axios.get(`${PHONENUMBERS}?search=${search}`);
  return data;
};

export const postPhonenumber = async (body) => {
  const response = await axios.post(PHONENUMBERS, body);

  return response;
};

export const deletePhonenumber = async (id) => {
  const response = await axios.delete(`${PHONENUMBERS}/${id}`);

  return response;
};

export const putPhonenumber = async (id, body) => {
  const response = await axios.put(`${PHONENUMBERS}/${id}`, body);

  return response;
};

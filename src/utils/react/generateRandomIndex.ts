import { assoc } from "../js/assoc";

export const generateRandomString = () =>
  Math.random().toString(36).substring(2, 15);

export const generateId = assoc("id", generateRandomString);
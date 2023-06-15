import fs from "fs";
import users from "../db/users.json" assert { type: "json" };

const DB_PATH = "./db/users.json";

let NEXT = Object.keys(users).reduce(
  (biggest, id) => (biggest > id ? biggest : id),
  0
);

export const create = (req, res) => {
  NEXT++;
  users[NEXT] = req.body;

  fs.writeFile(DB_PATH, JSON.stringify(users, null, " ")), () => {
  res
  .status(201)
  .send({
    message: "user created",
  });
};
}



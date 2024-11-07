import { nanoid } from "nanoid";

let jobs = [
  {
    id: nanoid(),
    company: "apple",
    position: "front-end developer",
  },
  {
    id: nanoid(),
    company: "infy",
    position: "backend developer",
  },
];

export const getAllJobs = async (req, res) => {
  await res.send(200).json({ message: "list fetched successfully", jobs });
};

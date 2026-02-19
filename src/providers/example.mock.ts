import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description:
      "An overview of the fundamental concepts of computer science and programming.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "ENG201",
    name: "English Literature",
    department: "English",
    description:
      "Study of classic and modern works in English literature, focusing on analysis and interpretation.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "MATH150",
    name: "Calculus I",
    department: "Math",
    description:
      "Introduction to limits, derivatives, and integrals with applications.",
    createdAt: new Date().toISOString(),
  },
];

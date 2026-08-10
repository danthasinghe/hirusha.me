export type AchievementCategory =
  | "competition"
  | "award"
  | "other";

export type AchievementResult =
  | {
      type: "placement";
      place: 1 | 2 | 3;
    }
  | {
      type: "runner-up";
      position: 1 | 2;
    }
  | {
      type: "status";
      status: "finalist" | "semi-finalist" | "participant";
    }
  | {
      type: "award";
      label: string;
    };

export type Achievement = {
  id: string;
  year: number;
  title: string;
  description: string;
  organization: string;
  category: AchievementCategory;
  result: AchievementResult;
};

export const achievements: Achievement[] = [
  {
    id: "iesl-robogames-2026",
    year: 2026,
    title: "IESL RoboGames 2025/26",
    description:
      "Robotics competition organized by the Department of Computer Science and Engineering of the University of Moratuwa in collaboration with SLT-Mobitel and the Institution of Engineers, Sri Lanka.",
    organization: "IESL · University of Moratuwa · SLT-Mobitel",
    category: "competition",
    result: {
      type: "status",
      status: "finalist",
    },
  },

  {
    id: "codequest-2025",
    year: 2025,
    title: "CodeQuest '25",
    description:
      "Programming competition in CuttingEdge '25 organized by the Informatics Institute of Technology.",
    organization: "Informatics Institute of Technology",
    category: "competition",
    result: {
      type: "placement",
      place: 3,
    },
  },

  {
    id: "informatique-2024",
    year: 2024,
    title: "INFORMATIQUE '24",
    description:
      "Inter-school ICT quiz competition organized by the ICT Society of S. Thomas' College, Mount Lavinia.",
    organization: "S. Thomas' College, Mount Lavinia",
    category: "competition",
    result: {
      type: "placement",
      place: 1,
    },
  },

  {
    id: "codex-2024",
    year: 2024,
    title: "CodeX '24",
    description:
      "Inter-school ICT quiz competition organized by the ICT Society of Royal Institute International School.",
    organization: "Royal Institute International School",
    category: "competition",
    result: {
      type: "placement",
      place: 1,
    },
  },

  {
    id: "aurora-2024",
    year: 2024,
    title: "Aurora 2024",
    description:
      "Inter-school AI quiz competition organized by the Computer Science Association of the University of Sri Jayewardenepura.",
    organization: "University of Sri Jayewardenepura",
    category: "competition",
    result: {
      type: "runner-up",
      position: 1,
    },
  },

  {
    id: "intellecta-2024",
    year: 2024,
    title: "INTELLECTA '24",
    description:
      "Inter-school ICT quiz competition organized by the ICT Society of Devi Balika Vidyalaya.",
    organization: "Devi Balika Vidyalaya",
    category: "competition",
    result: {
      type: "placement",
      place: 2,
    },
  },

  {
    id: "codequest-2024",
    year: 2024,
    title: "CodeQuest '24",
    description:
      "Programming competition organized by the Informatics Institute of Technology and awarded at the Cutting Edge '24 Exhibition.",
    organization: "Informatics Institute of Technology",
    category: "competition",
    result: {
      type: "placement",
      place: 3,
    },
  },

  {
    id: "iesl-robogames-2024",
    year: 2024,
    title: "IESL RoboGames 2024",
    description:
      "Robotics competition organized by the Department of Computer Science and Engineering of the University of Moratuwa in collaboration with SLT-Mobitel and the Institution of Engineers, Sri Lanka.",
    organization: "IESL · University of Moratuwa · SLT-Mobitel",
    category: "competition",
    result: {
      type: "runner-up",
      position: 2,
    },
  },

  {
    id: "hackx-jr-2024",
    year: 2024,
    title: "HackX Jr. 2024",
    description:
      "Inter-school hackathon organized by the Industrial Management Science Students' Association of the Department of Industrial Management, University of Kelaniya.",
    organization: "University of Kelaniya",
    category: "competition",
    result: {
      type: "status",
      status: "finalist",
    },
  },

  {
    id: "dialog-innovation-challenge-2024",
    year: 2024,
    title: "Dialog Innovation Challenge 2024",
    description:
      "Reached the top 25 teams to pitch ideas on the Dialog Innovation Challenge programme broadcast on TV Derana.",
    organization: "Dialog",
    category: "competition",
    result: {
      type: "status",
      status: "semi-finalist",
    },
  },

  {
    id: "incohost-2024",
    year: 2024,
    title: "INCOHOST 2024",
    description:
      "All-island school IoT innovation competition organized by the Nawaloka College of Higher Studies.",
    organization: "Nawaloka College of Higher Studies",
    category: "competition",
    result: {
      type: "status",
      status: "participant",
    },
  },

  {
    id: "envisage-2023",
    year: 2023,
    title: "ENVISAGE '23",
    description:
      "Inter-school web development competition organized by the ICT Society of Musaeus College, Colombo 07.",
    organization: "Musaeus College",
    category: "competition",
    result: {
      type: "placement",
      place: 1,
    },
  },

  {
    id: "nssc-2022",
    year: 2022,
    title: "National Schools' Software Competition",
    description:
      "National-level school ICT championship organized by the Computer Society of Sri Lanka in collaboration with the Ministry of Education.",
    organization: "Computer Society of Sri Lanka · Ministry of Education",
    category: "award",
    result: {
      type: "award",
      label: "Merit Award",
    },
  },

  {
    id: "ycs-2022",
    year: 2022,
    title: "Young Computer Scientist (YCS) 2022",
    description:
      "Participated in the Young Computer Scientist competition organized by the Federation of Information Technology Industry Sri Lanka, representing ShowCase '22, a project by the Royal College Computer Society.",
    organization: "FITIS",
    category: "competition",
    result: {
      type: "status",
      status: "participant",
    },
  },

  {
    id: "slrc-2021",
    year: 2021,
    title: "Sri Lankan Robotics Challenge 2021",
    description:
      "School-category robotics competition organized by the Electronic Club of the University of Moratuwa.",
    organization: "University of Moratuwa",
    category: "competition",
    result: {
      type: "status",
      status: "finalist",
    },
  },
];
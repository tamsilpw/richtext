export type OptionStatus = "MARKED" | "UNMARKED" | "CORRECT" | "INCORRECT";

export const OptionStatus = {
  MARKED: "MARKED" as OptionStatus,
  UNMARKED: "UNMARKED" as OptionStatus,
  CORRECT: "CORRECT" as OptionStatus,
  INCORRECT: "INCORRECT" as OptionStatus,
};

export interface QuestionMeta {
  text: string;
  subText: string;
}

export interface VideoSolution {
  url: string;
  type: string;
}

export interface Question {
  _id: string;
  serial: string;
  text: string;
  options: Option[];
  meta: QuestionMeta;

  isSolutionEnabled: boolean;
  solution: string;
  videoSolution: VideoSolution;
  references?: string[];

  isBookmarkEnabled: boolean;
  isBookmark: boolean;

  isThreeDotsEnabled: boolean;
}

export interface Option {
  _id: string;
  serial: string;
  text: string;
  subText: string;
  showSubText: boolean;
  status: OptionStatus;
  disabled: boolean;
  isSubTextLoading?: boolean;
}

export type ClickType =
  | "BOOKMARK_CLICK"
  | "THREE_DOTS_CLICK"
  | "OPTION_CLICK"
  | "VIDEO_SOLUTION_CLICK"
  | "IMG_CLICK";

export const ClickType = {
  BOOKMARK_CLICK: "BOOKMARK_CLICK" as ClickType,
  THREE_DOTS_CLICK: "THREE_DOTS_CLICK" as ClickType,
  OPTION_CLICK: "OPTION_CLICK" as ClickType,
  VIDEO_SOLUTION_CLICK: "VIDEO_SOLUTION_CLICK" as ClickType,
  IMG_CLICK: "IMG_CLICK" as ClickType,
};

export const sampleQuestion: Question = {
  _id: "2lc67y07gwxvn9bi9w5j66gbu",
  serial: "1",
  text: '<p style="text-align: left;">A 33-year-old male patient came in after suffering a fall from the bike. He was riding on the pillion and fell to his left and his elbow had an impact on the ground. He complains of tolerable pain with no associated swelling or reduction of ROM. You order an X-ray to rule out any chance of fracture. The X-ray turned out to be a normal study (as seen below). You ask the intern what the pointed structure is and she, being a studious person, answers:</p><p style="text-align: justify;"><img style="display: block; margin-left: auto; margin-right: auto;" title="d8db80ec-b9a1-496c-b69c-c8986d3fa042.jpg" src="https://static.pw.live/5eb393ee95fab7468a79d189/QBG/83d5a708-c0fd-465c-9b72-a72ad3380fd3.jpg" alt="" width="242" height="266" /></p>',
  options: [
    {
      _id: "1",
      serial: "A",
      text: "<p>NTproBNP</p>",
      subText: "25% Students marked this option",
      showSubText: false,
      status: OptionStatus.UNMARKED,
      disabled: false,
    },
    {
      _id: "2",
      serial: "B",
      text: "<p>Myoglobin</p>",
      subText: "15% Students marked this option",
      showSubText: false,
      status: OptionStatus.UNMARKED,
      disabled: false,
    },
    {
      _id: "3",
      serial: "C",
      text: '<p>NTproBNP<img title="Screenshot 2023-08-14 at 2.31.40 PM.png" src="https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/2pgu1cn3qny7445sjte84rhos.png" alt="" width="1280" height="753" /></p>',
      subText: "30% Students marked this option",
      showSubText: false,
      status: OptionStatus.UNMARKED,
      disabled: false,
    },
    {
      _id: "4",
      serial: "D",
      text: "<p>none</p>",
      subText: "30% Students marked this option",
      showSubText: false,
      status: OptionStatus.UNMARKED,
      disabled: false,
    },
  ],
  meta: {
    text: "Cardiology",
    subText: "Medium",
  },
  isSolutionEnabled: true,
  solution:
    '<p style="text-align: justify;">The image below shows the insertion of the transversus abdominis muscle. Identify the conjoint tendon:</p><p style="text-align: justify;"><img style="display: block; margin-left: auto; margin-right: auto;" title="uj.jpg" src="https://static.pw.live/5eb393ee95fab7468a79d189/QBG/f8b1bc30-e319-440f-bb5e-e63c78c4f9e2.jpg" alt="" width="265" height="328" /></p>',
  videoSolution: {
    url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    type: "youtube",
  },
  isBookmarkEnabled: true,
  isBookmark: false,
  isThreeDotsEnabled: true,
  references: [
    "Gray's Anatomy the Anatomical Basis of Clinical Practice, 41st edition - 333",
    "Gray's Anatomy the Anatomical Basis of Clinical Practice, 41st edition - 333",
  ],
};

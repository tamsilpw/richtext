export type OptionStatus = "MARKED" | "UNMARKED" | "CORRECT" | "INCORRECT";

export const OptionStatus = {
  MARKED: "MARKED" as OptionStatus,
  UNMARKED: "UNMARKED" as OptionStatus,
  CORRECT: "CORRECT" as OptionStatus,
  INCORRECT: "INCORRECT" as OptionStatus,
};

export enum QuestionStatus {
  CORRECT = "CORRECT",
  INCORRECT = "INCORRECT",
  SKIPPED = "SKIPPED",
}
export interface QuestionMeta {
  text: string;
  subText: string;
}

export interface VideoSolution {
  url: string;
  type: string;
  parentId?: string;
  secondaryParentId?: string;
  childId?: string;
  secondaryChildId?: string;
  videoType?: string;
}

export interface Question {
  _id: string;
  serial: string;
  text: string;
  options: Option[];
  meta: QuestionMeta;
  hideHeader?: boolean;
  videoQuestion?: VideoSolution;

  isSolutionEnabled: boolean;
  solution: string;
  videoSolution: VideoSolution;
  references?: string[];

  isBookmarkEnabled: boolean;
  isBookmark: boolean;

  isThreeDotsEnabled: boolean;

  isMarkForReviewEnabled?: boolean;
  isMarkedForReview?: boolean;

  questionStatus?: QuestionStatus;
  isSolutionStatusCardEnabled?: boolean;
  timeTaken?: string;
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

export interface QuestionStatusProps {
  status: QuestionStatus;
  time: string;
}

export const questionStatusMap: Record<QuestionStatus, any> = {
  [QuestionStatus.CORRECT]: {
    text: "Correct",
    colorClassName: "text-[#1B7938]",
  },
  [QuestionStatus.INCORRECT]: {
    text: "Incorrect",
    colorClassName: "text-[#BF2727]",
  },
  [QuestionStatus.SKIPPED]: {
    text: "Skipped",
    colorClassName: "text-[#3D3D3D]",
  },
};

export type ClickType =
  | "BOOKMARK_CLICK"
  | "THREE_DOTS_CLICK"
  | "OPTION_CLICK"
  | "VIDEO_SOLUTION_CLICK"
  | "IMG_CLICK"
  | "MARK_FOR_REVIEW_CLICK"
  | "INVALID_TOKEN";

export const ClickType = {
  BOOKMARK_CLICK: "BOOKMARK_CLICK" as ClickType,
  THREE_DOTS_CLICK: "THREE_DOTS_CLICK" as ClickType,
  OPTION_CLICK: "OPTION_CLICK" as ClickType,
  VIDEO_SOLUTION_CLICK: "VIDEO_SOLUTION_CLICK" as ClickType,
  IMG_CLICK: "IMG_CLICK" as ClickType,
  MARK_FOR_REVIEW_CLICK: "MARK_FOR_REVIEW_CLICK" as ClickType,
  INVALID_TOKEN: "INVALID_TOKEN" as ClickType,
};

export const sampleQuestion: Question = {
  _id: "2lc67y07gwxvn9bi9w5j66gbu",
  serial: "1",
  hideHeader: false,
  text: '<p style="text-align: left;">A 33-year-old male patient came in after suffering a fall from the bike. He was riding on the pillion and fell to his left and his elbow had an impact on the ground. He complains of tolerable pain with no associated swelling or reduction of ROM. You order an X-ray to rule out any chance of fracture. The X-ray turned out to be a normal study (as seen below). You ask the intern what the pointed structure is and she, being a studious person, answers:</p><p style="text-align: justify;"><img style="display: block; margin-left: auto; margin-right: auto;" title="d8db80ec-b9a1-496c-b69c-c8986d3fa042.jpg" src="https://static.pw.live/5eb393ee95fab7468a79d189/QBG/83d5a708-c0fd-465c-9b72-a72ad3380fd3.jpg" alt="" width="242" height="266" /></p>',
  videoQuestion: {
    videoType: "IP_QUESTION",
    type: "penpencilvdo",
    url: "https://sec-stage.physicswallah.live/b4f82bda-c494-4103-8f43-3e05540fe9c3/master.mpd",
    secondaryParentId: "",
    childId: "65f57cc3975624c9434e2035",
    secondaryChildId: "",
    parentId: "wwi1hpsif51yu5ucichlmd65t",
  },
  options: [
    {
      _id: "1",
      serial: "A",
      text: "<p>NTproBNP</p>",
      subText: "25% Students marked this option",
      showSubText: false,
      status: "UNMARKED",
      disabled: false,
    },
    {
      _id: "2",
      serial: "B",
      text: "<p>Myoglobin</p>",
      subText: "15% Students marked this option",
      showSubText: false,
      status: "UNMARKED",
      disabled: false,
    },
    {
      _id: "3",
      serial: "C",
      text: '<p>NTproBNP<img title="Screenshot 2023-08-14 at 2.31.40 PM.png" src="https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/2pgu1cn3qny7445sjte84rhos.png" alt="" width="1280" height="753" /></p>',
      subText: "30% Students marked this option",
      showSubText: false,
      status: "UNMARKED",
      disabled: false,
    },
    {
      _id: "4",
      serial: "D",
      text: "<p>none</p>",
      subText: "30% Students marked this option",
      showSubText: false,
      status: "UNMARKED",
      disabled: false,
    },
  ],
  meta: {
    text: "Cardiology",
    subText: "Medium",
  },
  isSolutionEnabled: true,
  solution:
    '<!DOCTYPE html><html><head></head><body><ul><li style="font-weight: 400; text-align: left;" aria-level="1"><span style="font-weight: 400;">he given plain radiograph anteroposterior view of left wrist joint, shows a well defined eccentric, expansile lytic lesion in epiphysis of left radius reaching upto the articular surface. It does not show any aggressive periosteal reaction, soft tissue or cortical breach.&nbsp;</span></li><li style="font-weight: 400; text-align: left;" aria-level="1"><span style="font-weight: 400;">The most likely diagnosis in a skeletally mature person (epiphysis is fused) will be </span><strong>giant cell tumor (GCT).</strong></li><li style="font-weight: 400; text-align: left;" aria-level="1"><span style="font-weight: 400;">GCT shows the non aggressive features on imaging.</span></li><li style="font-weight: 400; text-align: left;" aria-level="1"><span style="font-weight: 400;">The bony lesions which involve the epiphysis are chondroblastoma and GCT.&nbsp;</span></li><li style="font-weight: 400; text-align: left;" aria-level="1"><span style="font-weight: 400;">The chondroblastoma seen in skeletally immature people and GCT seen in skeletally mature people.<img title="Testing 2.png" src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/2ba2c583-1fc1-4771-a15f-be557a74ccfe.png" alt="" width="844" height="664" /></span></li></ul></body></html>',
  videoSolution: {
    url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    type: "youtube",
  },
  isBookmarkEnabled: true,
  isBookmark: true,
  isThreeDotsEnabled: true,
  references: [
    "Gray's Anatomy the Anatomical Basis of Clinical Practice, 41st edition - 333",
    "Gray's Anatomy the Anatomical Basis of Clinical Practice, 41st edition - 333",
  ],
  isMarkedForReview: false,
  isMarkForReviewEnabled: true,
  isSolutionStatusCardEnabled: true,
  questionStatus: QuestionStatus.INCORRECT,
  timeTaken: "2s",
};

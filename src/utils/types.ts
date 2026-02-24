export type OptionStatus = 'MARKED' | 'UNMARKED' | 'CORRECT' | 'INCORRECT';

export const OptionStatus = {
  MARKED: 'MARKED' as OptionStatus,
  UNMARKED: 'UNMARKED' as OptionStatus,
  CORRECT: 'CORRECT' as OptionStatus,
  INCORRECT: 'INCORRECT' as OptionStatus,
};

export interface QuestionMeta{
    text: string
    subText: string
}

export interface VideoSolution {
   url: string
   type: string
}


export interface Question {
    _id: string
    serial: string
    text: string
    options: Option[]
    meta: QuestionMeta

    isSolutionEnabled: boolean
    solution: string
    videoSolution: VideoSolution

    isBookmarkEnabled: boolean
    isBookmark: boolean

    isThreeDotsEnabled: boolean
}

export interface Option{
    _id: string
    serial: string
    text: string
    subText: string
    showSubText: boolean
    status: OptionStatus
    disabled: boolean
    isSubTextLoading?: boolean
}

export type ClickType = 'BOOKMARK_CLICK' | 'THREE_DOTS_CLICK' | 'OPTION_CLICK' | 'VIDEO_SOLUTION_CLICK';

export const ClickType = {
  BOOKMARK_CLICK: 'BOOKMARK_CLICK' as ClickType,
  THREE_DOTS_CLICK: 'THREE_DOTS_CLICK' as ClickType,
  OPTION_CLICK: 'OPTION_CLICK' as ClickType,
  VIDEO_SOLUTION_CLICK: 'VIDEO_SOLUTION_CLICK' as ClickType,
};


export const sampleQuestion: Question = {
    _id: '2lc67y07gwxvn9bi9w5j66gbu',
    serial: '1',
    text: "<p>An 81 year-old male has been brought to the casualty with a 3 day history of fatigue and dyspnea. On examination, there is positive abdominojugular reflux, bibasilar pulmonary rales and 3+ pitting edema at ankles. He also has a history of hypertension since the last 23 years for which he has been taking medication. Which cardiac marker will be significantly abnormal in this patient?</p>",
    options: [
        {
            _id: '1',
            serial: 'A',
            text: '<p>NTproBNP</p>',
            subText: '25% Students marked this option',
            showSubText: false,
            status: OptionStatus.UNMARKED,
            disabled: false,
        },
        {
            _id: '2',
            serial: 'B',
            text: '<p>Myoglobin</p>',
            subText: '15% Students marked this option',
            showSubText: false,
            status: OptionStatus.UNMARKED,
            disabled: false,
        },
        {
            _id: '3',
            serial: 'C',
            text: '<p>NTproBNP<img title="Screenshot 2023-08-14 at 2.31.40 PM.png" src="https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/2pgu1cn3qny7445sjte84rhos.png" alt="" width="1280" height="753" /></p>',
            subText: '30% Students marked this option',
            showSubText: false,
            status: OptionStatus.UNMARKED,
            disabled:   false,
        },
        {
            _id: '4',
            serial: 'D',
            text: '<p>none</p>',
             subText: '30% Students marked this option',
            showSubText: false,
            status: OptionStatus.UNMARKED,
            disabled: false,
        },
    ],
    meta: {
        text: 'Cardiology',
        subText: 'Medium',
    },
    isSolutionEnabled: true,
    solution: '<p>NTproBNP is a marker of myocardial stretch and is elevated in patients with heart failure. In this patient, the history and examination findings are suggestive of heart failure, which is likely to be the cause of his symptoms. Therefore, NTproBNP is expected to be significantly abnormal in this patient.</p>',
    videoSolution: {
        url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
        type: 'youtube',
    },
    isBookmarkEnabled: true,
    isBookmark: false,
    isThreeDotsEnabled: true,   
}
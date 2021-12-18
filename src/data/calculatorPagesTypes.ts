export interface Pages {
  [pageId: string]: PageData;
}

interface PageData {
  header?: string;
  body?: NonEmptyList<Body>;
  buttons?: NonEmptyList<Button>;
  tooltip?: TooltipType;
  footerLink?: FooterLink;
  disclaimer?: string;
  thankYou?: string;
  progressBar?: ProgressBar;
}

interface ProgressBar {
  currentSectionName: string;
  currentSection: number;
  totalSections: number; // TODO: can this be calculated dynamically?
}

type NonEmptyList<T> = {
  0: T;
} & Array<T>;

type Body = ParagraphBody | LinkBody | ListBody;

export enum BodyType {
  PARAGRAPH = "paragraph",
  LINK = "link",
  LIST = "list",
}

interface BaseBody {
  type: BodyType;
}

interface ParagraphBody extends BaseBody {
  text: string;
}

interface LinkBody extends BaseBody {
  text: string;
  href: string;
}

interface ListBody extends BaseBody {
  items: NonEmptyList<string>;
}

interface Button {
  text: string;
  href: string;
  color?: string;
}

export enum TooltipType {
  NOT_SURE = "I'm not sure.",
  NOT_A_MISDEMEANOR = "My conviction is not a misdemeanor or I’m not sure.",
}

interface FooterLink {
  text: string;
  href: string;
}

export const BUTTON_TEXT = {
  YES: "Yes",
  NO: "No",
  NA: "Not Applicable",
  CONTINUE: "Continue",
};

export const BRANCH_TYPES = {
  MAIN: "main",
  ELIGIBLE: "elg",
  INELIGIBLE: "inelg",
  PROSTITUTION: "pro",
  FISHING: "fsh",
  MARIJUANA: "mar",
};

export const QUESTION_NO = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
};

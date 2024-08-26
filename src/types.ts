export type Link = {
  label: string;
  url: string;
};

export type ProjectInfo = {
  url?: string;
  heroSrc?: string;
  logoSrc?: string;
  title: string;
  description: string;
  dateClosedAlpha?: string;
  dateEarlyAccess?: string;
  dateRelease?: string;
  links?: Link[];
};

export type TalkData = {
  date: Date;
  timeZone: string;
  title: string;
  event: string;
  eventUrl?: string;
  resources?: Link[];
};

export type TalkRef = Link;

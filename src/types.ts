export type ProjectInfo = {
  url?: string;
  img?: string;
  title: string;
  description: string;
  dateClosedAlpha?: string;
  dateEarlyAccess?: string;
  dateRelease?: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export type TalkData = {
  date: Date;
  title: string;
  event: string;
  eventUrl?: string;
  resources?: {
    label: string;
    url: string;
  }[];
  references?: {
    label: string;
    url: string;
  }[];
}

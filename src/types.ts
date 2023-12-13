export type ProjectInfo = {
  url?: string;
  img?: string;
  title: string;
  description: string;
  dateClosedAlpha?: string;
  dateOpenBeta?: string;
  dateRelease?: string;
  links?: {
    label: string;
    url: string;
  }[];
}

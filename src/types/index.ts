export interface ProjectType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
  tags: string[];
  dataAiHint?: string;
}

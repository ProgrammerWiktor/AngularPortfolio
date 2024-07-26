import { Project } from './Project.interface';

export interface ProgrammingLanguage {
  id: number;
  name: string;
  imageSrc: string;
  projects: Project[];
}

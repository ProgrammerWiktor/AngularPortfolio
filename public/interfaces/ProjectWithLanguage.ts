import { Project } from "./Project.interface";

export interface ProjectWithLanguage extends Project {
    language: string;
}
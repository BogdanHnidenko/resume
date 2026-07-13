import { ua } from './ua';
import { en } from './en';
import type { Content, Lang } from './types';

export const TRANSLATIONS: Record<Lang, Content> = { ua, en };

export type { Content, Lang, ExperienceItem, SkillGroup, ProjectItem } from './types';

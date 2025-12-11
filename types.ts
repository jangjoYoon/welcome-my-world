import React from 'react';

export enum PageRoute {
  HOME = '/',
  PROFILE = '/profile',
  LINKS = '/links',
  WORK = '/work',
  ASK = '/ask'
}

export interface NavItem {
  id: string;
  label: string;
  path: PageRoute;
  icon: React.ComponentType<any>;
  description: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  category: string;
  icon?: React.ComponentType<any>;
}

export interface SkillItem {
  name: string;
  level: number; // 1-5
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
}
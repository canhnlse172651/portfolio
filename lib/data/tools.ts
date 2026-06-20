import { GitBranch, PenTool, Code2, Database, Cloud, Terminal } from "lucide-react";

export const tools = [
  {
    icon: GitBranch,
    name: "GitHub",
    description:
      "Version control and collaboration platform for managing code repositories and team workflows.",
    link: "https://github.com",
  },
  {
    icon: PenTool,
    name: "Figma",
    description:
      "Design and prototyping tool for creating user interfaces, design systems, and collaborative design work.",
    link: "https://figma.com",
  },
  {
    icon: Code2,
    name: "VS Code",
    description:
      "Primary code editor with extensions for enhanced productivity, debugging, and code formatting.",
    link: "https://code.visualstudio.com",
  },
  {
    icon: Database,
    name: "PostgreSQL",
    description:
      "Relational database for storing and managing application data with complex queries and relationships.",
    link: "https://postgresql.org",
  },
  {
    icon: Cloud,
    name: "AWS",
    description:
      "Cloud infrastructure for deploying, scaling, and managing web applications and services.",
    link: "https://aws.amazon.com",
  },
  {
    icon: Terminal,
    name: "Terminal",
    description:
      "Command-line interface for development tasks, server management, and automation scripts.",
    link: "#",
  },
];

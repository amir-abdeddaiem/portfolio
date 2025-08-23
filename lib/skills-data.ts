import {
  Code,
  Database,
  Wrench,
  Layers,
  FileCode,
  Server,
  Smartphone,
  Globe,
  GitBranch,
  Palette,
  Zap,
  Monitor,
} from "lucide-react"

export const skillsData = {
  languages: [
    { name: "JavaScript", icon: FileCode },
    { name: "Python", icon: Code },
    { name: "Java", icon: Code },
    { name: "PHP", icon: Server },
    { name: "Dart", icon: Smartphone },
    { name: "C#", icon: Code },
  ],
  frameworks: [
    { name: ".NET", icon: Layers },
    { name: "Flutter", icon: Smartphone },
    { name: "Django", icon: Server },
    { name: "ReactJS", icon: Globe },
    { name: "Next.js", icon: Globe },
    { name: "Bootstrap", icon: Palette },
  ],
  databases: [
    { name: "MySQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Firebase", icon: Zap },
    { name: "Oracle", icon: Database },
  ],
  tools: [
    { name: "Git", icon: GitBranch },
    { name: "VS Code", icon: Monitor },
    { name: "Figma", icon: Palette },
    { name: "Postman", icon: Wrench },
    { name: "Eclipse", icon: Monitor },
  ],
}

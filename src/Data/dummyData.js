import { FaWaveSquare } from "react-icons/fa";
import { MessageSquare, Image, Puzzle, Clock } from "lucide-react";

export const NavList = [
  "Models",
  "Solutions",
  "Code Assistance",
  "Showcase",
  "Community",
];

export const infoCards = [
  {
    title: "Try the 1 million token context window",
    description:
      "Explore what is possible with the 1 million token context window.",
    buttonText: "Try it out",
  },
  {
    title: "Get a Gemini API Key",
    description:
      "Grab your API key and start integrating Gemini models into your apps.",
    buttonText: "Get your API key",
  },
  {
    title: "Prompt Gallery",
    description:
      "Visit our prompt gallery for examples of what's possible with Gemini models.",
    buttonText: "Explore the Gallery",
  },
];

export const features = [
  {
    title: "Native speech generation",
    desc: "Generate high quality text to speech with Gemini",
    badge: "New",
    icon: "🎙️",
  },
  {
    title: "Live audio-to-audio dialog",
    desc: "Try Gemini's natural, real-time dialog with audio and video inputs",
    badge: "New",
    icon: "🔊",
  },
  {
    title: "Native image generation",
    desc: "Interleaved text-and-image generation with the new Gemini 2.0 Flash",
    icon: "🖼️",
  },
  {
    title: "Explore and co-develop apps",
    desc: "See Gemini in action with interactive, open source examples",
    icon: "🧑‍💻",
  },
];

export const navItems = [
  { label: "Chat", icon: <MessageSquare className="h-5 w-4" /> },
  { label: "Stream", icon: <FaWaveSquare className="h-5 w-4" /> },
  { label: "Generate Media", icon: <Image className="h-5 w-4" /> },
  { label: "Build", icon: <Puzzle className="h-5 w-4" /> },
  { label: "History", icon: <Clock className="h-5 w-4" /> },
  { label: "Enable saving", icon: <Puzzle className="rotate-45 h-5 w-4" /> },
];

export const menus = {
  Models: [
    { title: "Gemini", links: ["About", "Docs", "API reference", "Pricing"] },
    { title: "Imagen", links: ["About", "Docs", "Pricing"] },
    { title: "Veo", links: ["About", "Docs", "Pricing"] },
    { title: "Gemma", links: ["About", "Docs", "Gemmaverse"] },
  ],
  Solutions: [
    { title: "Developers", links: ["Overview", "API access", "SDKs"] },
    { title: "Enterprises", links: ["Enterprise AI", "Pricing", "Security"] },
  ],
  "Code Assistance": [
    {
      title: "",
      links: [
        "Android Studio",
        "Chrome DevTools",
        "Colab",
        "Firebase",
        "Google Cloud",
        "JetBrains",
        "Jules",
        "VS Code",
      ],
    },
  ],
  Showcase: [
    {
      title: "",
      links: ["Gemini Showcase", "Gemini API Developer Competition"],
    },
  ],
  Community: [{ title: "", links: ["Google AI Forum", "Gemini for Research"] }],
};

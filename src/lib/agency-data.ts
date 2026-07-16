import {
  Camera,
  Clapperboard,
  Code2,
  Mic2,
  Share2,
  Video,
  type LucideIcon,
} from "lucide-react";

export type ServiceKey =
  | "webdev"
  | "photography"
  | "videography"
  | "clipping"
  | "podcasts"
  | "social-media";

export type Service = {
  key: ServiceKey;
  title: string;
  shortTitle: string;
  intro: string;
  href: string;
  Icon: LucideIcon;
  samples: {
    title: string;
    type: "image" | "video" | "youtube" | "instagram";
    format: "landscape" | "portrait" | "square";
    src: string;
    tag?: string;
  }[];
};

export const services: Service[] = [
  {
    key: "webdev",
    title: "Website Development",
    shortTitle: "Website Development",
    intro: "High-performance websites engineered to convert. Clean frontends, instant load times, and design systems that sell.",
    href: "/webdev",
    Icon: Code2,
    
    samples: [
      {
        title: "Founder Roundtable",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/ElwDG9om4DE?autoplay=1&mute=1&loop=1&playlist=ElwDG9om4DE&playsinline=1",

      },
      {
        title: "Studio Talk Set",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/tLXPCw6Yf6M?autoplay=1&mute=1&loop=1&playlist=tLXPCw6Yf6M&playsinline=1",
      },
      {
        title: "Creative Show",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/MbBD2e_7sKQ?si=2eWPYHgjqRzwoKDp&autoplay=1&mute=1&loop=1&playlist=MbBD2e_7sKQ&playsinline=1",
      },
      {
        title: "Creative Show",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/k5OjrYV47r0?si=ElDfrQxWsfvrRzO3&autoplay=1&mute=1&loop=1&playlist=k5OjrYV47r0&playsinline=1",
      },

    ],
  },
  {
    key: "videography",
    title: "Videography",
    shortTitle: "Videography",
    intro: "Brand films and commercial shoots that earn attention. Concept to final cut with every frame built for impact.",
    href: "/videography",
    Icon: Video,
    samples: [
      {
        title: "Brand Film",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/lfwWMXeRqoo?si=LGN3pPqzed5YAwbr&autoplay=1&mute=1&loop=1&playlist=lfwWMXeRqoo&playsinline=1",
        tag: "Hero video",
      },
      {
        title: "Event Coverage",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/o3edIR0EXz0?si=me8Jd_JhTs2ehxrk&autoplay=1&mute=1&loop=1&playlist=o3edIR0EXz0&playsinline=1",
        tag: "Live shoot",
      },
      {
        title: "Product Motion",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/ki2TRlrKcTE?si=LPa0rNbRs7X9e6vr&autoplay=1&mute=1&loop=1&playlist=ki2TRlrKcTE&playsinline=1",
        tag: "Studio edit",
      },
      {
        title: "Product Motion",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/SInoHHlwrqg?si=RAGeA052xub3ds8f&autoplay=1&mute=1&loop=1&playlist=SInoHHlwrqg&playsinline=1",
        tag: "Studio edit",
      },
    ],
  },
  {
    key: "photography",
    title: "Photography",
    shortTitle: "Photography",
    intro: "Premium product and brand imagery. Sharp, on-brand, built for e-commerce and campaigns that convert.",
    href: "/photography",
    Icon: Camera,
    samples: [
      {
        title: "photo1",
        type: "image",
        format: "square",
        src: "/photography/photo1.jpeg",
        tag: "Square",
      },
      {
        title: "photo2",
        type: "image",
        format: "square",
        src: "/photography/photo2.jpeg",
        tag: "Square",
      },
      {
        title: "photo3",
        type: "image",
        format: "square",
        src: "/photography/photo3.jpeg",
        tag: "Square",
      },
      {
        title: "photo4",
        type: "image",
        format: "square",
        src: "/photography/photo4.jpeg",
        tag: "Square",
      },
      {
        title: "photo5",
        type: "image",
        format: "square",
        src: "/photography/photo5.jpeg",
        tag: "Square",
      },
      {
        title: "photo6",
        type: "image",
        format: "square",
        src: "/photography/photo6.jpeg",
        tag: "Square",
      },
      {
        title: "photo7",
        type: "image",
        format: "square",
        src: "/photography/photo7.jpeg",
        tag: "Square",
      },
      {
        title: "photo8",
        type: "image",
        format: "square",
        src: "/photography/photo8.jpeg",
        tag: "Square",
      },
    ],
  },
  {
    key: "clipping",
    title: "Edits & Clips",
    shortTitle: "Video Clipping",
    intro: "Short-form content that stops the scroll. Viral-paced edits for Reels, Shorts, and TikToks that hook in 3 seconds.",
    href: "/clipping",
    Icon: Clapperboard,
    samples: [
      {
        title: "clip1",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/T-kU0iM8wLc?si=KsT3yRV3VAu5LeHh&autoplay=1&mute=1&loop=1&playsinline=1",
      },
      {
        title: "clip2",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/U8gnxgQayTo?si=HC-FNU57o3maXH5o&autoplay=1&mute=1&loop=1&playsinline=1",
      },
      {
        title: "clip3",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/pj9okDlwiBo?si=eDTlm7Aa6TrmB0k0&autoplay=1&mute=1&loop=1&playsinline=1",
      },
      {
        title: "clip4",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/cnt5mAHvWJI?si=kn4dCLmcOBWezYPo&autoplay=1&mute=1&loop=1&playsinline=1",
      }
    ],
  },
  {
    key: "podcasts",
    title: "Podcast Production",
    shortTitle: "Podcasts",
    intro: "Podcast production that sounds professional and feels authentic. Multi-cam shoots, clean audio, full post-production.",
    href: "/podcasts",
    Icon: Mic2,
    samples: [
      {
        title: "podcast1",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/TYJ0MJthIG8?si=TGJoQk9E30CW8EoU&autoplay=1&mute=1&loop=1&playlist=TYJ0MJthIG8&playsinline=1",
        tag: "Website walkthrough",
      },
      {
        title: "podcast2",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/7rkB4O77LR0?si=OUVbi1On3eryZSKw&autoplay=1&mute=1&loop=1&playlist=7rkB4O77LR0&playsinline=1",
        tag: "Web UI",
      },
      {
        title: "podcast3",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/OWi3g8dkzAk?si=YSKIL7gBL7p7IeYh&autoplay=1&mute=1&loop=1&playlist=OWi3g8dkzAk&playsinline=1",
        tag: "UX system",
      },
      {
        title: "podcast4",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/Jy7YC3bejqU?si=wAZqqca4qXpEK1gP&autoplay=1&mute=1&loop=1&playlist=Jy7YC3bejqU&playsinline=1",
        tag: "Web UI",
      },
      {
        title: "podcast5",
        type: "youtube",
        format: "landscape",
        src: "https://www.youtube.com/embed/ePlxW_bXvC0?si=3L9rtsYDKIQeYNUD&autoplay=1&mute=1&loop=1&playlist=ePlxW_bXvC0&playsinline=1",
      }
    ],
  },
  {
    key: "social-media",
    title: "Social Media Management",
    shortTitle: "Social Media",
    intro: "Content planning and daily execution that keeps feeds moving. We manage output, track what works, and iterate fast.",
    href: "/social-media",
    Icon: Share2,
    samples: [
      {
        title: "smm1",
        type: "video",
        format: "portrait",
        src: "/social-media/smm1.mp4",
        tag: "Publishing",
      },
      {
        title: "smm2",
        type: "video",
        format: "portrait",
        src: "/social-media/smm2.mp4",
        tag: "Growth",
      },
      {
        title: "smm3",
        type: "video",
        format: "portrait",
        src: "/social-media/smm3.mp4",
        tag: "Analytics",
      },
      {
        title: "smm4",
        type: "video",
        format: "portrait",
        src: "/social-media/smm4.mp4",
        tag: "Publishing",
      },
      {
        title: "smm5",
        type: "video",
        format: "portrait",
        src: "/social-media/smm5.mp4",
        tag: "Growth",
      }
    ],
  },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Reviews", href: "/#reviews" },
];

export const processSteps = [
  {
    title: "Discovery & Strategy",
    body: "Map the brand, audience, channels, and business goal before we design anything.",
  },
  {
    title: "Creative Sprint",
    body: "Turn concepts into scripts, shot lists, wireframes, and production blueprints.",
  },
  {
    title: "Production & Launch",
    body: "Shoot, edit, design, code, publish. We don't hand off until assets are ready to perform.",
  },
  {
    title: "Insight Analysis",
    body: "Review what worked, learn what didn't, feed insights into the next cycle of creative.",
  },
];

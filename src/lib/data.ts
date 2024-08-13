export const navigationData = {
  home: {
    text: "Home",
    url: "/home",
    list: false,
    visible: true,
    items: {},
  },
  events: {
    text: "Events",
    url: "/events",
    list: false,
    visible: true,
    items: {},
  },
  members: {
    text: "Members",
    url: "/members",
    list: true,
    visible: true,
    items: {
      community: {
        text: "Community",
        url: "/community",
        visible: true,
      },
      leadership: {
        text: "Leadership",
        url: "/leadership",
        visible: true,
      },
      dashboard: {
        text: "Dashboard",
        url: "/dashboard",
        visible: true,
      },
    },
  },
  about: {
    text: "About Us",
    url: false,
    list: true,
    visible: true,
    items: {
      history: {
        text: "History",
        url: "/history",
        visible: true,
      },
      mission: {
        text: "Mission",
        url: "/mission",
        visible: true,
      },
      faq: {
        text: "Questions",
        url: "/faq",
        visible: true,
      },
    },
  },
  involve: {
    text: "Get Involved",
    url: false,
    list: true,
    visible: true,
    items: {
      member: {
        text: "Membership",
        url: "/member",
        visible: true,
      },
      resources: {
        text: "Resources",
        url: "/resources",
        visible: true,
      },
      contact: {
        text: "Contact Us",
        url: "/contact",
        visible: true,
      },
    },
  },
} as const;

export const navigationMobileData: { [key: string]: NavigationButtonProperties } = {
  home: navigationData.home as NavigationButtonProperties,
  events: navigationData.events as NavigationButtonProperties,
  leadership: navigationData.members.items.leadership as NavigationButtonProperties,
  membership: navigationData.involve.items.member as NavigationButtonProperties,
  faq: navigationData.about.items.faq as NavigationButtonProperties,
  contact: navigationData.involve.items.contact as NavigationButtonProperties,
};

export const footerData: { [key: string]: NavigationButtonProperties } = {
  home: navigationData.home as NavigationButtonProperties,
  events: navigationData.events as NavigationButtonProperties,
  leadership: navigationData.members.items.leadership as NavigationButtonProperties,
  membership: navigationData.involve.items.member as NavigationButtonProperties,
  faq: navigationData.about.items.faq as NavigationButtonProperties,
  contact: navigationData.involve.items.contact as NavigationButtonProperties,
};

import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/SocialMediaComponents";
export const socials = [
  {
    name: "facebook",
    url: "https://www.facebook.com/polishclubofhuntercollege",
    icon: FacebookIcon,
  },
  {
    name: "instagram",
    url: "https://instagram.com/hcpolishclub",
    icon: InstagramIcon,
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@naszamaapolskawhuntercolle5154",
    icon: YoutubeIcon,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/company/hcpolishclub/",
    icon: LinkedinIcon,
  },
];

export const SEOKeywords = [
  "Polish Cultural Club",
  "Hunter College",
  "NYC",
  "New York City",
  "Polish heritage",
  "Polish traditions",
  "Polish language",
  "Polish history",
  "Polish events",
  "Polish community",
  "cultural exchange",
  "Polish festivals",
  "Polish art",
  "Polish cuisine",
  "Polish music",
  "Polish dance",
  "Polish literature",
  "Polish students",
  "Polish diaspora",
  "student club",
  "college organizations",
  "cultural organizations",
  "Polish Americans",
  "study abroad",
  "cultural activities",
  "cultural preservation",
  "Eastern European culture",
  "Polish heritage month",
  "Polish holidays",
  "Polish folk art",
  "Polish language classes",
  "cultural diversity",
  "multicultural events",
  "international students",
  "cultural workshops",
  "cultural programs",
  "Hunter College clubs",
  "Hunter College organizations",
  "student life at Hunter College",
  "New York Polish community",
  "Polish traditions in NYC",
  "Polish student events",
  "cultural awareness",
  "Polish customs",
  "Polish New York",
  "Polish NYC",
  "Polish Hunter College",
  "Polish cultural events NYC",
  "Polish community NYC",
  "Polish club activities",
  "Polish heritage celebration",
  "Polish student life",
  "Polish heritage society",
  "Polish cultural heritage",
  "Polish cultural events Hunter College",
  "Polish cultural preservation NYC",
  "Polish culture NYC",
  "Polish student organization",
  "Polish festival NYC",
  "cultural heritage preservation",
  "Polish cultural network",
  "Polish cultural education",
  "Polish cultural awareness",
  "Eastern European student club",
  "Polish cultural exchange NYC",
  "Polish cultural promotion",
  "Polish cultural identity",
  "Polish heritage NYC",
  "Hunter College student activities",
  "Polish history NYC",
  "Polish student club NYC",
  "Polish student community",
  "cultural heritage club",
  "Polish arts and culture",
  "NYC cultural organizations",
  "Polish cultural society",
  "Polish cultural association",
  "Polish events Hunter College",
  "NYC Polish events",
  "Polish cultural club events",
  "Polish studies",
  "Polish cultural education NYC",
  "cultural diversity Hunter College",
  "Polish traditions Hunter College",
  "Polish cultural promotion NYC",
  "Eastern European culture Hunter College",
  "Polish diaspora NYC",
];

export const filler = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export type EventProperties = {
  id: number;
  title: string;
  start: string;
  end: string;
  room: string;
  address: string;
  description: string;
  details: string;
  rsvp: string;
  image: string;
  modified_by: string;
  modified_date: string;
};

export type NavigationButtonProperties = {
  text: string;
  url: string | false;
  list: boolean;
  visible: boolean;
  items: { [key: string]: any };
  path: string;
};

export type QuickLinkProperties = {
  text: string;
  url: string | false;
  list: boolean;
  visible: boolean;
  items: { [key: string]: any };
};

export type MobileNavigationProperties = {
  text: string;
  url: string | false;
  list: boolean;
  visible: boolean;
  items: { [key: string]: any };
  path: string;
  closeMobileNavigation: any;
};

export type TextProperties = {
  text: string;
};

export type TitleProperties = {
  english: string;
  polish: string;
};

export type DirectoryProperties = {
  group: string;
  page: string;
};

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
  about: {
    text: "About Us",
    url: false,
    list: true,
    visible: true,
    items: {
      leadership: {
        text: "Leadership",
        url: "/leadership",
        visible: true,
      },
      faq: {
        text: "FAQ",
        url: "/faq",
        visible: true,
      },
      contact: {
        text: "Contact Us",
        url: "/contact",
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
      membership: {
        text: "Membership",
        url: "/membership",
        visible: true,
      },
      donate: {
        text: "Donations",
        url: "/donate",
        visible: true,
      },
    },
  },
} as const;

export type NavigationButtonProperties = {
  text: string;
  url: string | false;
  list: boolean;
  visible: boolean;
  items: { [key: string]: any };
  path: string;
};

export const navigationMobileData: { [key: string]: NavigationButtonProperties } = {
  home: navigationData.home as NavigationButtonProperties,
  events: navigationData.events as NavigationButtonProperties,
  leadership: navigationData.about.items.leadership as NavigationButtonProperties,
  membership: navigationData.involve.items.membership as NavigationButtonProperties,
  faq: navigationData.about.items.faq as NavigationButtonProperties,
  contact: navigationData.about.items.contact as NavigationButtonProperties,
};

export const socials = {
  facebook: {
    url: "https://www.facebook.com/polishclubofhuntercollege",
  },
  linkedin: {
    url: "https://www.linkedin.com/company/hcpolishclub/",
  },
  instagram: {
    url: "https://instagram.com/hcpolishclub",
  },
  youtube: {
    url: "https://www.youtube.com/@naszamaapolskawhuntercolle5154",
  },
} as const;

export const filler = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

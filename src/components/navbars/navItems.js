export const animeItems = [
  {
    title: "Search Anime",
    path: "/search-anime",
    cName: "dropdown-link",
  },
  {
    title: "Seasonal Anime",
    path: "/seasonal-anime",
    cName: "dropdown-link",
  },
  {
    title: "Top Anime",
    path: "/topanime",
    cName: "dropdown-link",
  },
];

export const mangaItems = [
  {
    title: "Search Manga",
    path: "/search-manga",
    cName: "dropdown-link",
  },
  {
    title: "Top Manga",
    path: "/top-manga",
    cName: "dropdown-link",
  },
];

export const mobileItems = [
  {
    title: "Profile",
    path: "/profile",
    cName: "dropdown-link",
  },
  {
    title: "Anime List",
    path: "/anime-list",
    cName: "dropdown-link",
  },
  {
    title: "Manga List",
    path: "/manga-list",
    cName: "dropdown-link",
  },
  {
    title: "Anime",
    cName: "dropdown-separator",
  },
  ...animeItems,
  {
    title: "Manga",
    cName: "dropdown-separator",
  },
  ...mangaItems,
  {
    title: "Logout",
    cName: "dropdown-separator",
  }
]

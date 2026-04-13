export type ArtworkStatus = "available" | "sold";

export interface Artwork {
  id: string;
  title: string;
  images: string[];
  medium: string;
  size: string;
  year?: number;
  description?: string;
  status: ArtworkStatus;
}

export const artworks: Artwork[] = [
  {
    id: "sunlit-field",
    title: "Last Light on the Water",
    images: [
      "/listings/1.1.jpeg",
      "/listings/1.2.jpeg",
    ],
    medium: "Oil on Canvas",
    size: "60 x 90 cm",
    year: 2025,
    description:
      "Inspired by evenings on the Irish coast, when the sun begins to fall and the sky softens into purples and golds. The moment captured is that brief transition when the sea reflects the last warmth of the day before night begins to settle.",
    status: "available",
  },
  {
    id: "evening-harbor",
    title: "Quiet Reflections",
    images: [
      "/listings/2.1.jpeg",
      "/listings/2.2.jpeg",
    ],
    medium: "Acrylic on Panel",
    size: "50 x 70 cm",
    year: 2024,
    description:
      "This painting is inspired by the stillness of garden ponds, where light, water, and plant life create a quiet world of reflections and colour. The floating lily pads and soft blooms invite the viewer to pause and look more closely.",
    status: "sold",
  },
  {
    id: "quiet-forest",
    title: "Golden Hills of Summer",
    images: [
      "/listings/3.1.jpeg",
      "/listings/3.2.jpeg",
    ],
    medium: "Oil on Linen",
    size: "80 x 80 cm",
    year: 2025,
    description:
      "Inspired by the rolling countryside and farmland landscapes often seen in rural Ireland. The painting captures the warmth of a bright summer day when fields glow with colour and the hills stretch into the distance.",
    status: "available",
  },
  {
    id: "soft-morning",
    title: "Morning Tide",
    images: [
      "/artworks/3.JPG",
      "/artworks/4.JPG",
    ],
    medium: "Watercolor on Paper",
    size: "30 x 40 cm",
    year: 2023,
    description:
      "This painting reflects the peaceful atmosphere of the coastline early in the morning, when the light is soft and the sea moves gently onto the shore.",
    status: "available",
  },
  {
    id: "storm-memory",
    title: "Memory of a Storm",
    images: [
      "/artworks/9.JPG",
      "/artworks/10.JPG",
    ],
    medium: "Mixed Media",
    size: "70 x 90 cm",
    year: 2024,
    description:
      "Inspired by the dramatic energy of the sea during unsettled weather. Even after the storm has passed, the water carries its memory in the movement of the waves and the shifting colours of the sky.",
    status: "sold",
  },
];


import sacrificePreview from "../../assets/art/sacrifice.webm";
import sacrificeFull from "../../assets/art/sacrifice-full.webm";
import whenItFallsFull from "../../assets/art/when-it-falls.webm";
import jojoPreview from "../../assets/art/jojo.webm";
import jojoFull from "../../assets/art/jojo-full.webm";
import zaharaAlibiPreview from "../../assets/art/zahara-alibi-promo.webm";
import theGardenFull from "../../assets/art/the-garden-full.webm";

export interface Media {
  still_url?: string;
  animation_preview?: string;
  animation_full?: string;
  youtube_id?: string;
}

export interface Project {
  title: string;
  type: "animation" | "still" | "youtube";
  mediaCategory: string;
  description: string;
  created_at: string;
  updated_at: string;
  slug: string;
  featured: boolean;
  published_at: string;
  hash_id: string;
  permalink: string;
  tech: string[];
  featuredTech: string[];
  media: Media;
}

const data: Project[] = [
  {
    title: "Sacrifice",
    type: "animation",
    mediaCategory: "Digital Mixed Media",
    description:
      "In dedication to the sacrifices made in Ukraine's fight for sovereignty.",
    created_at: "2022-05-22T15:29:42.800-05:00",
    updated_at: "2022-09-06T11:29:09.917-05:00",
    slug: "sacrifice",
    featured: true,
    published_at: "2022-05-22T15:29:42.787-05:00",
    hash_id: "3qQ9gB",
    permalink: "https://www.artstation.com/artwork/3qQ9gB",
    tech: ["Blender", "Davinci Resolve", "Photoshop"],
    featuredTech: ["Blender"],
    media: {
      animation_preview: sacrificePreview,
      animation_full: sacrificeFull,
      still_url:
        "https://cdna.artstation.com/p/assets/video_clips/images/049/753/662/small_square/sean-swanson-thumb.jpg?1653251251",
    },
  },
  {
    title: "Sacrifice II",
    type: "youtube",
    mediaCategory: "Digital Mixed Media",
    description:
      '"Sacrifice" - 3d Animation | Mixed Digital Media | Made with Blender \n\nIn dedication to the sacrifices made in Ukraine\'s fight for sovereignty.',
    created_at: "2021-01-24T21:26:49.679-06:00",
    updated_at: "2021-01-24T21:26:49.679-06:00",
    slug: "sacrifice-2",
    featured: false,
    published_at: "2021-01-24T21:26:49.679-06:00",
    hash_id: "rAKwGm",
    permalink: "https://www.youtube.com/watch?v=MNdOG5oNWE8",
    tech: ["Blender", "Davinci Resolve", "Photoshop"],
    featuredTech: ["Blender"],
    media: {
      animation_preview: sacrificePreview,
      youtube_id: "MNdOG5oNWE8",
      still_url:
        "https://cdnb.artstation.com/p/assets/covers/images/034/150/777/small_square/sean-swanson-sean-swanson-thumb.jpg?1611546265",
    },
  },
  {
    title: "Zero 7 'The Garden' Remix",
    type: "animation",
    mediaCategory: "Digital Mixed Media",
    description:
      "🌹“The Garden” - 2021 - Modeled, textured, and animated in #Blender. Video edited in DaVinci Resolve.\n⠀\n🎶 Back again with another album art remix from Zero 7… this time “The Garden”! There is just something about album art that leaves me wishing it was more than just a static image. So I gave this one the 3D treatment to bring it to life!\n\n🖼The original album art depicted a tear with a collage by Gideon London revealed underneath. To translate this into 3D meant extracting each layer painstakingly with Photoshop. With each layer now a separate piece in a stack, the pieces will look subtly different/askew depending on the camera perspective because of the variation in distance away from the lens.\n\nAdd some “dust” particles, a bit of movement, and a textured background that dynamically responds to light and 💥 BOOM ~ art ~\n\nHow does your music inspire you? Stay well, lovely people of the internet.",
    created_at: "2021-10-20T12:33:22.906-05:00",
    updated_at: "2022-11-15T01:37:16.050-06:00",
    slug: "zero-7-the-garden-remix",
    featured: false,
    published_at: "2021-10-20T12:33:22.889-05:00",
    hash_id: "8eQZNG",
    permalink: "https://www.artstation.com/artwork/8eQZNG",
    tech: ["Blender", "Davinci Resolve", "Photoshop"],
    featuredTech: ["Blender"],
    media: {
      animation_preview: sacrificePreview,
      animation_full: theGardenFull,
      still_url:
        "https://cdnb.artstation.com/p/assets/images/images/042/530/295/20211020123311/small_square/sean-swanson-1081-with-text.jpg?1634751191",
    },
  },
  {
    title: "Zero 7 'When It Falls' Remix",
    type: "animation",
    mediaCategory: "Digital Mixed Media",
    description:
      "This project is my 3D take on the album art from Zero 7's \"When It Falls\". The scene really comes together at Frame 50, where the original art lines up perfectly with my work. I used different tricks like converting the artwork into SVG and then turning those into 3D meshes to make this happen. \n\nTo give it a little extra something, I added some compositing effects like chromatic aberration and film grain. The original artwork is a piece from Blue Source Studios, but not much is known about them. With this piece, I've tried to keep the spirit of the original while putting my own spin on it. It's art meets music, in 3D.",
    created_at: "2021-01-24T21:25:42.240-06:00",
    updated_at: "2021-03-27T22:20:55.764-05:00",
    slug: "zero-7-when-it-falls-remix",
    featured: true,
    published_at: "2021-01-24T21:26:49.679-06:00",
    hash_id: "rAKwGm",
    permalink: "https://www.artstation.com/artwork/rAKwGm",
    tech: ["Blender", "Davinci Resolve", "Photoshop"],
    featuredTech: ["Blender"],
    media: {
      animation_preview: whenItFallsFull,
      animation_full: whenItFallsFull,
      still_url:
        "https://cdnb.artstation.com/p/assets/covers/images/034/150/777/small_square/sean-swanson-sean-swanson-thumb.jpg?1611546265",
    },
  },
  {
    title: "Alterations - System Infinity EP Visuals",
    type: "youtube",
    mediaCategory: "Digital Mixed Media",
    description:
      " 👾 I had the honor to create visualizations (cover not by me) for “System Infinity”, the third release in a trilogy of EPs from my long time friend @fullbodybrainfreeze. This is the product of months of hard work in between everything else we have going on in life.🤖 Animating for these tracks was an absolute blast. I listened to this EP literally hundreds of times during production to capture the essence of the tracks, individually and as a collective story. Trippy, absurd, cerebral. Modeled and animated in Blender. Video produced by me in DaVinci Resolve 17.",
    created_at: "2021-01-24T21:25:42.240-06:00",
    updated_at: "2021-03-27T22:20:55.764-05:00",
    slug: "alterations-system-infinity-ep-visuals",
    featured: false,
    published_at: "2021-01-24T21:26:49.679-06:00",
    hash_id: "rAKwGm",
    permalink: "https://www.youtube.com/watch?v=iSqwFhvr_ys",
    tech: ["Blender", "Davinci Resolve", "Photoshop"],
    featuredTech: ["Blender"],
    media: {
      animation_preview: whenItFallsFull,
      youtube_id: "iSqwFhvr_ys",
      still_url:
        "https://cdnb.artstation.com/p/assets/covers/images/034/150/777/small_square/sean-swanson-sean-swanson-thumb.jpg?1611546265",
    },
  },
  {
    title: "Zahara - Alibi promo",
    type: "youtube",
    mediaCategory: "Digital Mixed Media",
    description: "Promotional render for Zahara's Alibi single.",
    created_at: "2021-01-24T21:26:49.679-06:00",
    updated_at: "2021-01-24T21:26:49.679-06:00",
    slug: "zahara-alibi-promo",
    featured: true,
    published_at: "2021-01-24T21:26:49.679-06:00",
    hash_id: "rAKwGm",
    permalink: "https://www.youtube.com/watch?v=MNdOG5oNWE8",
    tech: ["Blender", "Davinci Resolve", "Photoshop"],
    featuredTech: ["Blender"],
    media: {
      animation_preview: zaharaAlibiPreview,
      youtube_id: "MNdOG5oNWE8",
      still_url:
        "https://cdnb.artstation.com/p/assets/covers/images/034/150/777/small_square/sean-swanson-sean-swanson-thumb.jpg?1611546265",
    },
  },
  {
    title: "Is that... a JoJo reference?",
    type: "animation",
    mediaCategory: "Digital Mixed Media",
    description:
      "“Is that... a JoJo reference?” - 2021 - 3D, modeled and animated in Blender 🎭⁣⁣\n⁣⁣\nContinuing in the video game item theme, I wanted to bring to life the Red Stone of Aja from JoJo’s Bizarre Adventure. The detail of the silver was generated by some paint.net plugins for creating normal and height map images (tells the 3D software how to “fake” depth with clever lighting) from pictures found online. 🗿⁣⁣\n⁣⁣\nAs always, comments and criticism welcomed! ⁣",
    created_at: "2021-07-12T14:15:09.786-05:00",
    updated_at: "2021-12-08T19:01:04.628-06:00",
    slug: "is-that-a-jojo-reference",
    featured: true,
    published_at: "2021-07-12T14:15:09.766-05:00",
    hash_id: "nYznvo",
    permalink: "https://www.artstation.com/artwork/nYznvo",
    tech: ["Blender", "Davinci Resolve", "Photoshop"],
    featuredTech: ["Blender"],
    media: {
      animation_preview: jojoPreview,
      animation_full: jojoFull,
      still_url:
        "https://cdnb.artstation.com/p/assets/video_clips/images/039/508/337/small_square/sean-swanson-thumb.jpg?1626117034",
    },
  },
  {
    title: "Sol Amulet",
    type: "animation",
    mediaCategory: "Digital Mixed Media",
    description:
      "Praise the Sun! 🌞 \n\nModeled and animated in Blender 2.92.\n\nInspired by the item design in the Dark Souls series.\n\n",
    created_at: "2021-06-03T20:53:04.341-05:00",
    updated_at: "2021-12-08T19:00:49.700-06:00",
    slug: "sol-amulet",
    featured: false,
    published_at: "2021-06-03T20:53:04.329-05:00",
    hash_id: "v2qrg6",
    permalink: "https://www.artstation.com/artwork/v2qrg6",
    tech: ["Blender", "Davinci Resolve", "Photoshop"],
    featuredTech: ["Blender"],
    media: {
      animation_preview: whenItFallsFull,
      animation_full: whenItFallsFull,
      still_url:
        "https://cdna.artstation.com/p/assets/video_clips/images/038/325/184/small_square/sean-swanson-thumb.jpg?1622770180",
    },
  },
  {
    title: "Heirloom",
    type: "animation",
    mediaCategory: "Digital Mixed Media",
    description:
      "This one-of-a-kind guitar was hand crafted by a luthier named Mark Swanson for my pops (also named Mark Swanson). I grew up hearing this instrument and wanted to honor its role in the family. 🎸\n⠀\nThe inlay and sound chamber cover are sustainably sourced abalone shell (from Kauai, I believe). Iridescence from the shell is incredibly difficult to get right in CG imagery but I think I managed it reasonably well here. 😎 I took a couple creative liberties here and there but its essence is retained.\n\nThe only assets that are not made from scratch are the rug (CC0), guitar stand(CC0), and clamps(Purchased) and some of the materials (CC0).",
    created_at: "2021-06-03T21:03:27.212-05:00",
    updated_at: "2021-07-17T14:26:59.824-05:00",
    slug: "heirloom",
    featured: false,
    published_at: "2021-06-03T21:03:27.184-05:00",
    hash_id: "D5Ry0G",
    permalink: "https://www.artstation.com/artwork/D5Ry0G",
    tech: ["Blender", "Davinci Resolve", "Photoshop"],
    featuredTech: ["Blender"],
    media: {
      animation_preview: sacrificePreview,
      animation_full: sacrificeFull,
      still_url:
        "https://cdna.artstation.com/p/assets/video_clips/images/038/325/602/small_square/sean-swanson-thumb.jpg?1622771908",
    },
  },
  {
    title: "Doctor Who?",
    type: "animation",
    mediaCategory: "Digital Mixed Media",
    description:
      "“Doctor Who?” 2021 - Modeled, animated, rendered using Blender ✨👨‍⚕️ 🚀 ",
    created_at: "2021-01-27T18:39:09.028-06:00",
    updated_at: "2021-10-20T12:36:49.695-05:00",
    slug: "doctor-who",
    featured: false,
    published_at: "2021-01-27T18:39:09.018-06:00",
    hash_id: "9mQWOQ",
    permalink: "https://www.artstation.com/artwork/9mQWOQ",
    tech: ["Blender", "Davinci Resolve", "Photoshop"],
    featuredTech: ["Blender"],
    media: {
      animation_preview: sacrificePreview,
      animation_full: sacrificeFull,
      still_url:
        "https://cdna.artstation.com/p/assets/covers/images/042/531/230/small_square/sean-swanson-sean-swanson-artstation-thumbnail.jpg?1634751406",
    },
  },
];

export default data;

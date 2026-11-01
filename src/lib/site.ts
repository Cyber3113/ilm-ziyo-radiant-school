export const SITE = {
  name: "Ilm-u Ziyo",
  fullName: "Ilm-u Ziyo maktabi",
  branch: "Denov",
  address: "Denov, Istiqbol MFY, Turkiston ko'chasi 177A",
  landmark: "Turon mehmonxonasi",
  phones: ["+998 99 242 42 12", "+998 99 252 42 12"],
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
} as const;

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export const NAV = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/dasturlar", label: "Dasturlar" },
  { to: "/ustozlar", label: "Ustozlar" },
  { to: "/natijalar", label: "Natijalar" },
  { to: "/aloqa", label: "Aloqa" },
] as const;

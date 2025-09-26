const images = {
  person: [
    "/avatars/person01.jpg",
    "/avatars/person02.jpg",
    "/avatars/person03.jpg",
    "/avatars/person04.jpg",
    "/avatars/person05.jpg",
    "/avatars/person06.jpg",
    "/avatars/person07.jpg",
    "/avatars/person08.jpg",
  ],
  company: [
    "/avatars/company01.jpg",
    "/avatars/company02.jpg",
    "/avatars/company03.jpg",
    "/avatars/company04.jpg",
    "/avatars/company05.jpg",
  ],
  team: [
    "/avatars/team01.jpg",
    "/avatars/team02.jpg",
    "/avatars/team03.jpg",
    "/avatars/team04.jpg",
    "/avatars/team05.jpg",
  ],
  flag: [
    "/avatars/team01.jpg",
    "/avatars/team02.jpg",
    "/avatars/team03.jpg",
    "/avatars/team04.jpg",
    "/avatars/team05.jpg",
  ],
}

export const mockImage = (type: keyof typeof images, index: number) => {
  const typeImages = images[type] ?? []

  return typeImages[index % typeImages.length]
}

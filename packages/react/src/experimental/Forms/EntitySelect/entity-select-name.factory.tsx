import avatar from "../../../../storybook-assets/avatar.jpeg"
import { EntitySelectEntity, EntitySelectSubEntity } from "./types"

export const famousEmployees: EntitySelectEntity[] = [
  {
    id: 1000,
    name: "Albert Einstein",
    searchKeys: ["Albert", "Albert Einstein", "Al", "Einstein", "genius"],
    avatar: avatar,
  },
  {
    id: 1002,
    name: "Marie Curie",
    avatar: avatar,
  },
  {
    id: 1003,
    name: "Isaac Newton",
    avatar: avatar,
  },
  {
    id: 1004,
    name: "Galileo Galilei",
    avatar: avatar,
  },
  {
    id: 1005,
    name: "Leonardo da Vinci",
    avatar: avatar,
  },
  {
    id: 1006,
    name: "Winston Churchill",
    avatar: avatar,
  },
  {
    id: 1007,
    name: "Abraham Lincoln",
    avatar: avatar,
  },
  {
    id: 1008,
    name: "George Washington",
    avatar: avatar,
  },
  {
    id: 1009,
    name: "Thomas Edison",
    avatar: avatar,
  },
  {
    id: 1010,
    name: "Nikola Tesla",
    avatar: avatar,
  },
  {
    id: 1011,
    name: "Alexander Graham Bell",
    avatar: avatar,
  },
  {
    id: 1012,
    name: "Martin Luther King",
    avatar: avatar,
  },
  {
    id: 1013,
    name: "Mohandas Gandhi",
    avatar: avatar,
  },
  {
    id: 1014,
    name: "Nelson Mandela",
    avatar: avatar,
  },
  {
    id: 1015,
    name: "Pablo Picasso",
    avatar: avatar,
  },
  {
    id: 1016,
    name: "Vincent van Gogh",
    avatar: avatar,
  },
  {
    id: 1017,
    name: "Ludwig van Beethoven",
    avatar: avatar,
  },
  {
    id: 1018,
    name: "Wolfgang Amadeus Mozart",
    avatar: avatar,
  },
  {
    id: 1019,
    name: "William Shakespeare",
    avatar: avatar,
  },
  {
    id: 1020,
    name: "Charles Dickens",
    avatar: avatar,
  },
  {
    id: 1021,
    name: "Mark Twain",
    avatar: avatar,
  },
  {
    id: 1022,
    name: "Jane Austen",
    avatar: avatar,
  },
  {
    id: 1023,
    name: "Agatha Christie",
    avatar: avatar,
  },
  {
    id: 1024,
    name: "Virginia Woolf",
    avatar: avatar,
  },
  {
    id: 1025,
    name: "Oprah Winfrey",
    avatar: avatar,
  },
  {
    id: 1026,
    name: "Elon Musk",
    avatar: avatar,
  },
  {
    id: 1027,
    name: "Steve Jobs",
    avatar: avatar,
  },
  {
    id: 1028,
    name: "Ada Lovelace",
    avatar: avatar,
  },
  {
    id: 1029,
    name: "Grace Hopper",
    avatar: avatar,
  },
  {
    id: 1030,
    name: "Coco Chanel",
  },
]

export const famousEmployeesAsSubItems: EntitySelectSubEntity[] = famousEmployees.map(
  (employee) => ({
    subId: employee.id,
    subName: employee.name,
    subAvatar: employee.avatar,
    subSearchKeys: employee.searchKeys,
  })
)

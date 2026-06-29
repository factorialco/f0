import { fakePeople } from "@/mocks/people"

import avatar from "../../../storybook-assets/avatar.jpeg"
import { EntitySelectEntity, EntitySelectSubEntity } from "./types"

export const famousEmployees: EntitySelectEntity[] = [
  {
    id: 1000,
    name: fakePeople.noor.fullName,
    searchKeys: [
      fakePeople.noor.firstName,
      fakePeople.noor.fullName,
      fakePeople.noor.lastName,
      "genius",
    ],
    avatar: avatar,
  },
  {
    id: 1002,
    name: fakePeople.hana.fullName,
    avatar: avatar,
  },
  {
    id: 1003,
    name: fakePeople.caleb.fullName,
    avatar: avatar,
  },
  {
    id: 1004,
    name: fakePeople.yuki.fullName,
    avatar: avatar,
  },
  {
    id: 1005,
    name: fakePeople.sofia.fullName,
    avatar: avatar,
  },
  {
    id: 1006,
    name: fakePeople.ravi.fullName,
    avatar: avatar,
  },
  {
    id: 1007,
    name: fakePeople.greta.fullName,
    avatar: avatar,
  },
  {
    id: 1008,
    name: fakePeople.iris.fullName,
    avatar: avatar,
  },
  {
    id: 1009,
    name: fakePeople.aaron.fullName,
    avatar: avatar,
  },
  {
    id: 1010,
    name: fakePeople.nadia.fullName,
    avatar: avatar,
  },
  {
    id: 1011,
    name: fakePeople.linus.fullName,
    avatar: avatar,
  },
  {
    id: 1012,
    name: fakePeople.camila.fullName,
    avatar: avatar,
  },
  {
    id: 1013,
    name: fakePeople.theo.fullName,
    avatar: avatar,
  },
  {
    id: 1014,
    name: fakePeople.eva.fullName,
    avatar: avatar,
  },
  {
    id: 1015,
    name: fakePeople.omar.fullName,
    avatar: avatar,
  },
  {
    id: 1016,
    name: fakePeople.mira.fullName,
    avatar: avatar,
  },
  {
    id: 1017,
    name: fakePeople.priya.fullName,
    avatar: avatar,
  },
  {
    id: 1018,
    name: fakePeople.aria.fullName,
    avatar: avatar,
  },
  {
    id: 1019,
    name: fakePeople.felix.fullName,
    avatar: avatar,
  },
  {
    id: 1020,
    name: fakePeople.lena.fullName,
    avatar: avatar,
  },
  {
    id: 1021,
    name: fakePeople.tobias.fullName,
    avatar: avatar,
  },
  {
    id: 1022,
    name: fakePeople.diego.fullName,
    avatar: avatar,
  },
  {
    id: 1023,
    name: fakePeople.bruno.fullName,
    avatar: avatar,
  },
  {
    id: 1024,
    name: fakePeople.mateo.fullName,
    avatar: avatar,
  },
  {
    id: 1025,
    name: fakePeople.noor.fullName,
    avatar: avatar,
  },
  {
    id: 1026,
    name: fakePeople.hana.fullName,
    avatar: avatar,
  },
  {
    id: 1027,
    name: fakePeople.caleb.fullName,
    avatar: avatar,
  },
  {
    id: 1028,
    name: fakePeople.yuki.fullName,
    avatar: avatar,
  },
  {
    id: 1029,
    name: fakePeople.sofia.fullName,
    avatar: avatar,
  },
  {
    id: 1030,
    name: fakePeople.ravi.fullName,
  },
]

export const famousEmployeesAsSubItems: EntitySelectSubEntity[] =
  famousEmployees.map((employee) => ({
    subId: employee.id,
    subName: employee.name,
    subAvatar: employee.avatar,
    subSearchKeys: employee.searchKeys,
  }))

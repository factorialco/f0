// packages/react/src/flags/flagsMap.ts
import type { ComponentType, ReactElement } from "react"

// Import all flags
import { CountryCode } from "@/lib/countries"
import Ad from "./Ad"
import Ae from "./Ae"
import Af from "./Af"
import Ag from "./Ag"
import Ai from "./Ai"
import Al from "./Al"
import Am from "./Am"
import Ao from "./Ao"
import Ar from "./Ar"
import As from "./As"
import At from "./At"
import Au from "./Au"
import Aw from "./Aw"
import Ax from "./Ax"
import Az from "./Az"
import Ba from "./Ba"
import Bb from "./Bb"
import Bd from "./Bd"
import Be from "./Be"
import Bf from "./Bf"
import Bg from "./Bg"
import Bh from "./Bh"
import Bi from "./Bi"
import Bj from "./Bj"
import Bm from "./Bm"
import Bo from "./Bo"
import Br from "./Br"
import Bt from "./Bt"
import Bw from "./Bw"
import By from "./By"
import Bz from "./Bz"
import Ca from "./Ca"
import Cd from "./Cd"
import Cf from "./Cf"
import Cg from "./Cg"
import Ch from "./Ch"
import Ci from "./Ci"
import Ck from "./Ck"
import Cl from "./Cl"
import Cm from "./Cm"
import Cn from "./Cn"
import Co from "./Co"
import Cr from "./Cr"
import Cu from "./Cu"
import Cv from "./Cv"
import Cw from "./Cw"
import Cy from "./Cy"
import Cz from "./Cz"
import De from "./De"
import Dj from "./Dj"
import Dk from "./Dk"
import Dm from "./Dm"
import Do from "./Do"
import Dz from "./Dz"
import Ec from "./Ec"
import Ee from "./Ee"
import Eg from "./Eg"
import Er from "./Er"
import Es from "./Es"
import Et from "./Et"
import Fi from "./Fi"
import Fj from "./Fj"
import Fk from "./Fk"
import Fm from "./Fm"
import Fo from "./Fo"
import Fr from "./Fr"
import Ga from "./Ga"
import Gb from "./Gb"
import Gd from "./Gd"
import Ge from "./Ge"
import Gg from "./Gg"
import Gh from "./Gh"
import Gi from "./Gi"
import Gl from "./Gl"
import Gm from "./Gm"
import Gn from "./Gn"
import Gq from "./Gq"
import Gr from "./Gr"
import Gt from "./Gt"
import Gu from "./Gu"
import Gw from "./Gw"
import Hk from "./Hk"
import Hn from "./Hn"
import Hr from "./Hr"
import Ht from "./Ht"
import Hu from "./Hu"
import Id from "./Id"
import Ie from "./Ie"
import Il from "./Il"
import Im from "./Im"
import In from "./In"
import Io from "./Io"
import Iq from "./Iq"
import Ir from "./Ir"
import Is from "./Is"
import It from "./It"
import Je from "./Je"
import Jm from "./Jm"
import Jo from "./Jo"
import Jp from "./Jp"
import Ke from "./Ke"
// Add the rest of your flag imports...

// Create type for the flag component
export type FlagComponent = ComponentType<React.SVGProps<SVGSVGElement>>

// Create the mapping from lowercase country code to flag component
export const flagsMap: Record<CountryCode, FlagComponent> = {
  ad: Ad,
  ae: Ae,
  af: Af,
  ag: Ag,
  ai: Ai,
  al: Al,
  am: Am,
  ao: Ao,
  ar: Ar,
  as: As,
  at: At,
  au: Au,
  aw: Aw,
  ax: Ax,
  az: Az,
  ba: Ba,
  bb: Bb,
  bd: Bd,
  be: Be,
  bf: Bf,
  bg: Bg,
  bh: Bh,
  bi: Bi,
  bj: Bj,
  bm: Bm,
  bo: Bo,
  br: Br,
  bt: Bt,
  bw: Bw,
  by: By,
  bz: Bz,
  ca: Ca,
  cd: Cd,
  cf: Cf,
  cg: Cg,
  ch: Ch,
  ci: Ci,
  ck: Ck,
  cl: Cl,
  cm: Cm,
  cn: Cn,
  co: Co,
  cr: Cr,
  cu: Cu,
  cv: Cv,
  cw: Cw,
  cy: Cy,
  cz: Cz,
  de: De,
  dj: Dj,
  dk: Dk,
  dm: Dm,
  do: Do,
  dz: Dz,
  ec: Ec,
  ee: Ee,
  eg: Eg,
  er: Er,
  es: Es,
  et: Et,
  fi: Fi,
  fj: Fj,
  fk: Fk,
  fm: Fm,
  fo: Fo,
  fr: Fr,
  ga: Ga,
  gb: Gb,
  gd: Gd,
  ge: Ge,
  gg: Gg,
  gh: Gh,
  gi: Gi,
  gl: Gl,
  gm: Gm,
  gn: Gn,
  gq: Gq,
  gr: Gr,
  gt: Gt,
  gu: Gu,
  gw: Gw,
  hk: Hk,
  hn: Hn,
  hr: Hr,
  ht: Ht,
  hu: Hu,
  id: Id,
  ie: Ie,
  il: Il,
  im: Im,
  in: In,
  io: Io,
  iq: Iq,
  ir: Ir,
  is: Is,
  it: It,
  je: Je,
  jm: Jm,
  jo: Jo,
  jp: Jp,
  ke: Ke,
  // Add the rest of your flag mappings...
}

// Helper function to get a flag component by its lowercase code
export const getFlag = (code: string): FlagComponent | ReactElement => {
  const FlagComponent = flagsMap[code.toLowerCase()]

  if (!FlagComponent) {
    console.warn(`Flag component for code "${code}" not found`)
    return <div />
  }

  return FlagComponent
}

export default flagsMap

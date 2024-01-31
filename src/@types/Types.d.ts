import { Attributes, ExtraTypes, MonsterTypes, Rarity } from '@/utils/Enums'
import { Section } from './Section'

type Card = {
  slug: string
  rarity: Rarity
  name: string
  image: {
    url: string
  }
  description: string
  banlist: number
}

export type MonsterCard = Card & {
  attribute: Attributes
  level: number
  monsterType: MonsterTypes
  extraType?: ExtraTypes
  haveEffect: boolean
  isTuner: boolean
  pendulumScale?: number
  atk: string
  def: string
}

export type SpellTrapCard = Card & {
  type: string
}

export type Section = {
  title: string
  description: string
  cards: MonsterCard[] | SpellTrapCard[]
}

export type HomePageData = {
  page: {
    sections: Section[]
  }
}

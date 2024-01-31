import { MonsterCard, SpellTrapCard } from '@/@types/Types'
import { MonsterCardDetails } from '../MonsterCardDetails'
import { SpellTrapCardDetails } from '../SpellTrapCardDetails'

type CardDetailsProps = {
  card: MonsterCard | SpellTrapCard
}

export const CardDetails = ({ card }: CardDetailsProps) => {
  const isMonsterCard = 'atk' in card

  return (
    <>
      {isMonsterCard ? (
        <MonsterCardDetails card={card} />
      ) : (
        <SpellTrapCardDetails card={card} />
      )}
    </>
  )
}

import { SpellTrapCard } from '@/@types/Types'
import { CardImage } from '../CardThumbnail/CardImage'
import { CardDescription } from '../MonsterCardDetails/CardDescription'

type SpellTrapCardDetailsProps = {
  card: SpellTrapCard
}

export const SpellTrapCardDetails = ({ card }: SpellTrapCardDetailsProps) => {
  return (
    <section className="flex w-full max-w-[750px] items-stretch gap-4 rounded-lg bg-zinc-950 p-6">
      <CardImage
        url={card.image.url}
        rarity={card.rarity}
        banlist={card.banlist}
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-title text-lg font-bold text-gray-200">
          {card.name}
        </h1>

        <strong>{`[${card.type}]`}</strong>

        <CardDescription description={card.description} />
      </div>
    </section>
  )
}

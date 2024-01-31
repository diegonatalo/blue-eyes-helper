'use client'

import { MonsterCard, SpellTrapCard } from '@/@types/Types'
import * as HoverCard from '@radix-ui/react-hover-card'
import Image from 'next/image'
import { CardDetails } from './CardDetails'

type CardThumbnailProps = {
  card: MonsterCard | SpellTrapCard
}

export const CardThumbnail = ({ card }: CardThumbnailProps) => {
  return (
    <HoverCard.Root openDelay={300} closeDelay={200}>
      <HoverCard.Trigger asChild>
        <div className="relative flex flex-col items-end">
          {card.banlist < 3 && (
            <Image
              className="absolute left-0"
              src={`/images/limitation/${card.banlist.toString()}.svg`}
              width={25}
              height={0}
              alt=""
            />
          )}
          <Image
            className="max-w-[2.625rem]"
            src={`/images/rarities/${card.rarity.toLowerCase()}.webp`}
            width={360}
            height={0}
            alt=""
          />
          <Image
            className="max-w-[6.25rem]"
            src={card.image.url}
            width={360}
            height={0}
            alt=""
          />
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content>
          <CardDetails card={card} />
          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}

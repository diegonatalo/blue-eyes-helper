import { MonsterCard } from '@/@types/Types'
import { Attributes, ExtraTypes, MonsterTypes } from '@/utils/Enums'
import Image from 'next/image'
import { CardImage } from '../CardThumbnail/CardImage'
import { CardDescription } from './CardDescription'

type MonsterCardDetailsProps = {
  card: MonsterCard
}

export const MonsterCardDetails = ({ card }: MonsterCardDetailsProps) => {
  const attribute =
    Attributes[card.attribute as unknown as keyof typeof Attributes]

  const monsterType =
    MonsterTypes[card.monsterType as unknown as keyof typeof MonsterTypes]

  const types: string[] = [monsterType]

  if (card.extraType !== null) {
    const extraType =
      ExtraTypes[card.extraType as unknown as keyof typeof ExtraTypes]

    types.push(extraType)
  }

  if (card.isTuner && !types.includes('Regulador')) {
    types.push('Regulador')
  }
  if (card.haveEffect && !types.includes('Efeito')) {
    types.push('Efeito')
  }

  const isLink = types.includes('Link')
  const isXyz = types.includes('Xyz')
  const isPendulum = types.includes('Pêndulo')

  return (
    <section className="flex w-full max-w-[750px] items-stretch gap-4 rounded-lg bg-zinc-950 p-6">
      <CardImage
        url={card.image.url}
        rarity={card.rarity}
        banlist={card.banlist}
      />
      <div className="flex flex-col justify-between gap-2">
        <h1 className="font-title text-lg font-bold text-gray-200">
          {card.name}
        </h1>

        <div className="flex gap-4 font-bold">
          <div className="flex gap-1">
            <Image
              src={`/images/attributes/${attribute.toLowerCase()}.webp`}
              width={25}
              height={0}
              alt=""
            />
            {attribute.toUpperCase()}
          </div>
          {isLink === false && (
            <>
              <div className="flex gap-1">
                <Image
                  src={`/images/attributes/${isXyz ? 'rank' : 'level'}.webp`}
                  width={25}
                  height={0}
                  alt=""
                />
                {card.level}
              </div>

              {isPendulum === true && (
                <div className="flex gap-1">
                  <Image
                    src="/images/attributes/pendulum.webp"
                    width={25}
                    height={0}
                    alt=""
                  />
                  {card.pendulumScale}
                </div>
              )}
            </>
          )}
        </div>

        <strong>{`[${types.join(' / ')}]`}</strong>

        <CardDescription description={card.description} />

        <div className="flex gap-4 text-lg">
          <span>
            <strong>ATK</strong>/{card.atk}
          </span>

          {isLink ? (
            <span>
              <strong>LINK</strong>-{card.level}
            </span>
          ) : (
            <span>
              <strong>DEF</strong>/{card.def}
            </span>
          )}
        </div>
      </div>
    </section>
  )
}

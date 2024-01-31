import Image from 'next/image'

type CardImageProps = {
  url: string
  rarity: string
  banlist: number
}

export const CardImage = ({ url, rarity, banlist }: CardImageProps) => {
  return (
    <div className="relative flex flex-col items-end">
      {banlist < 3 && (
        <Image
          className="absolute left-0"
          src={`/images/limitation/${banlist.toString()}.svg`}
          width={60}
          height={0}
          alt=""
        />
      )}
      <Image
        className="max-w-[5.625rem]"
        src={`/images/rarities/${rarity.toLowerCase()}.webp`}
        width={360}
        height={0}
        alt=""
      />
      <Image
        className="min-w-[16.875rem]"
        src={url}
        width={360}
        height={0}
        alt=""
      />
    </div>
  )
}

import { Section as SectionType } from '@/@types/Types'
import { CardThumbnail } from '../CardThumbnail'

type SectionProps = {
  section: SectionType
}

export const Section = ({ section }: SectionProps) => {
  return (
    <section className="flex w-full  flex-col gap-4">
      <h1 className="font-title text-xl font-bold">{section.title}</h1>
      <div className="flex w-max max-w-full flex-wrap gap-4 rounded-md border border-gray-950 bg-gray-800 p-2">
        {section.cards.map((card) => (
          <CardThumbnail key={card.slug} card={card} />
        ))}
      </div>
      <pre className="whitespace-pre-wrap font-body">{section.description}</pre>
      <hr className="border-2 border-gray-800" />
    </section>
  )
}

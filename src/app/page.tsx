import { HomePageData } from '@/@types/Types'
import { Introduction } from '@/components/Introduction'
import { Section } from '@/components/Section'
import { Warnings } from '@/components/Warnings'
import { fetchHygraphQuery } from '@/utils/FetchHygraphQuery'

const getSections = async (): Promise<HomePageData> => {
  const query = `
    query MyQuery {
      page(where: {slug: "home"}) {
        sections(first: 25) {
          cards(first: 16) {
            ... on MonsterCard {
              id
              name
              atk
              attribute
              banlist
              def
              description
              haveEffect
              image {
                url
              }
              level
              rarity
              isTuner
              monsterType
              extraType
              pendulumScale
            }
            ... on SpellTrapCard {
              id
              name
              banlist
              description
              image {
                url
              }
              rarity
              type
            }
          }
          description
          title
        }
      }
    }
  `

  return fetchHygraphQuery(query)
}

export default async function Home() {
  const { page } = await getSections()

  return (
    <main className="mx-auto flex w-full max-w-[1000px] flex-col gap-8 px-8 py-16">
      <Introduction />
      <Warnings />
      {page.sections.map((section) => (
        <Section key={section.title} section={section} />
      ))}
    </main>
  )
}

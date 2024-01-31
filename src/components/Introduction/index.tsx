import Image from 'next/image'

export const Introduction = () => {
  return (
    <div className="flex w-full justify-evenly rounded-md bg-gray-700/50 p-4">
      <Image src="/images/profile-icon.png" width={100} height={0} alt="" />
      <div className="w-full text-center">
        <h1 className="font-title text-xl font-bold text-gray-200">
          Seja Bem-Vindo!
        </h1>
        <h2 className="text-lg">
          Me chamo Natalo e sou um duelista do tema "Olhos Azuis"
        </h2>
        <p className="text-gray-400">
          Construí esse guia para ajudar duelistas iniciantes ou curiosos a
          aprenderem as principais mecânicas do deck e também algumas de suas
          variações.
        </p>
      </div>
    </div>
  )
}

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import star_wars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident',
    description: 'Description 1',
    category: 'Ação',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows'
  },
  {
    id: 2,
    title: 'Star Wars',
    description: 'Description 2',
    category: 'Ação',
    image: star_wars,
    infos: ['10%', 'R$ 250,00'],
    system: 'PS4'
  },
  {
    id: 3,
    title: 'Diablo',
    description: 'Description 3',
    category: 'Ação',
    image: diablo,
    infos: ['10%', 'R$ 250,00'],
    system: 'PS5'
  },
  {
    id: 4,
    title: 'Zelda',
    description: 'Description 4',
    category: 'RPG',
    image: zelda,
    infos: ['10%', 'R$ 250,00'],
    system: 'Nintendo'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Resident',
    description: 'Description 1',
    category: 'Ação',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows'
  },
  {
    id: 6,
    title: 'Star Wars',
    description: 'Description 2',
    category: 'Ação',
    image: star_wars,
    infos: ['10%', 'R$ 250,00'],
    system: 'PS4'
  },
  {
    id: 7,
    title: 'Diablo',
    description: 'Description 3',
    category: 'Ação',
    image: diablo,
    infos: ['10%', 'R$ 250,00'],
    system: 'PS5'
  },
  {
    id: 8,
    title: 'Zelda',
    description: 'Description 4',
    category: 'RPG',
    image: zelda,
    infos: ['10%', 'R$ 250,00'],
    system: 'Nintendo'
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="grey" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home

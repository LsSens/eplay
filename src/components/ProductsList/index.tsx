import Product from '../Product'
import { Container, List, Title } from './styles'
import Game from '../../models/Game'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.category}
              description={game.description}
              image={game.image}
              infos={game.infos}
              system={game.system}
              title={game.title}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList

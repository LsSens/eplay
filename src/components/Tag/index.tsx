import { TagCointainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagCointainer size={size}>{children}</TagCointainer>
)

export default Tag

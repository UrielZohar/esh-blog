import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: '/',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Blog',
    key: '/blog',
    icon: <AppstoreOutlined />,
  },
]


const Header = () => {
  const navigate = useNavigate()

  const onClick = ({key}: any) => {
    navigate(key)
  }

  return (
    <Menu
      onClick={onClick} 
      mode="horizontal" 
      items={items} 
    />
  )
}

export { Header }
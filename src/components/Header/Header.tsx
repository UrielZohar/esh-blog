import { useTranslation } from "react-i18next";
import { Menu, Select } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'




const Header = () => {
  const { t, i18n } = useTranslation()

  const items: MenuProps['items'] = [
    {
      label: t('home'),
      key: '/',
      icon: <AppstoreOutlined />,
    },
    {
      label: t('blog'),
      key: '/blog',
      icon: <AppstoreOutlined />,
    },
  ]

  const navigate = useNavigate()

  const onClick = ({key}: any) => {
    navigate(key)
  }

  const onLanguageChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <Menu
          onClick={onClick} 
          mode="horizontal" 
          items={items} 
        />
      </div>
      <div className={styles.selectLanguage}>
        <Select
          defaultValue='en'
          style={{ width: 60 }}
          onChange={onLanguageChange}
          options={[
            { value: 'en', label: 'US' },
            { value: 'fr', label: 'FR' },
          ]}
        />
      </div>
    </div>
  )
}

export { Header }
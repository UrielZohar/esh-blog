import { useTranslation } from 'react-i18next'
import styles from './Home.module.css'

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <img 
          src='https://media.licdn.com/dms/image/D4D16AQGQQfTIqjNwYQ/profile-displaybackgroundimage-shrink_200_800/0/1672077236033?e=2147483647&v=beta&t=rbHlAiWG2TlhoTMJKGuoMMY77tflJYKobqPnfVghO5E' 
          className={styles.logoImage}
        />
        
        <h4 className={styles.description}>{t('welcome_message_home_page')}</h4>
      </header>
    </div>
  )
}

export { Home }
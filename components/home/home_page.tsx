import Image from 'next/image'
import { useTranslations } from 'next-intl';
export const HomePage = () => {
  const t = useTranslations('Home')
  return(
    <div className="flex justify-center items-center h-screen">
      {t('hello')}
    </div>
  )
}
import '../styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AppBar, Typography, Toolbar, Box } from '@mui/material'
import Link from 'next/link'
import LanguageMenu from '../components/LanguageMenu'
import useTranslation from 'next-translate/useTranslation'


function MyApp({ Component, pageProps }) {
  const { t: commonI18n } = useTranslation('common')

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ marginRight: '20px' }}>
            <Link href={'/'}>{commonI18n('home')}</Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='h6' component='div'>
              <Link href={'/about'}>{commonI18n('aboutUs')}</Link>
            </Typography>
          </Box>
          <LanguageMenu />
        </Toolbar>
      </AppBar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import Head from 'next/head'
import { Grid, Typography } from '@mui/material'
import styled from 'styled-components'
import CarouselCard from '../components/NewsSlider'
import useTranslation from 'next-translate/useTranslation'

const LayOut = styled.div`
  padding: 40px;
`

function Home() {
  const { t: homeI18n } = useTranslation('home')
  return (
    <LayOut>
      <Head>
        <title>{homeI18n('header.title')}</title>
        <meta name='description' content={homeI18n('header.description')} />
      </Head>
      <Grid container justifyContent={'center'} sx={{ mb: 1 }}>
        <Typography variant='h3' component='div' gutterBottom>
          {homeI18n('main.title')}
        </Typography>
      </Grid>
      <Typography variant='h5' component='p' gutterBottom>
        {homeI18n('main.news.title')}
      </Typography>
      <CarouselCard />
    </LayOut>
  )
}

export default Home

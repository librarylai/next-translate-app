import Head from 'next/head'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'

const LayOut = styled.div`
  padding: 40px;
`
function About() {
  const { t: aboutI18n } = useTranslation('about')
  return (
    <LayOut>
      <Head>
        <title>{aboutI18n('header.title')}</title>
        <meta name='description' content={aboutI18n('header.desc')} />
      </Head>
      <Typography variant='h3' component='div' gutterBottom>
        {aboutI18n('main.title')}
      </Typography>
    </LayOut>
  )
}

export default About

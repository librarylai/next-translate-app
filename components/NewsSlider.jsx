import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { Paper, Button, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'

const DescFont = styled.p`
  font-size: 14px;
  color: #aaa;
`

const StyledPaper = styled(Paper)`
  margin-right: 20px;
  padding: 20px;
  border: solid 1px #ccc;
  cursor: pointer;
`
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
}

const NEWS_DATA = [
  {
    id: '1',
    name: 'news.subject1.title',
    description: 'news.subject1.desc',
  },
  {
    id: '2',
    name: 'news.subject2.title',
    description: 'news.subject2.desc',
  },
  {
    id: '3',
    name: 'news.subject3.title',
    description: 'news.subject3.desc',
  },
]
const CarouselCard = ({ item }) => {
  const { t: newsI18n } = useTranslation('news')
  const { t: commonI18n } = useTranslation('common')
  return (
    <StyledPaper elevation={3}>
      <Typography variant='h5'>{newsI18n(item.name)}</Typography>
      <DescFont>{newsI18n(item.description)}</DescFont>
      <Button className='CheckButton'>{commonI18n('clickGo')}</Button>
    </StyledPaper>
  )
}

function NewsSlider() {
  return (
    <Slider {...sliderSettings}>
      {NEWS_DATA.map((newsItem) => (
        <CarouselCard key={newsItem.id} item={newsItem} />
      ))}
    </Slider>
  )
}

NewsSlider.propTypes = {}

export default NewsSlider

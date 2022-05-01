import { useState } from 'react'
import styled from 'styled-components'
import { Button, Menu, MenuItem } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

const LanguageButton = styled(Button)`
  font-size: 20px;
  color: #ccc;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const StyledMenuItem = styled(MenuItem)`
  min-width: 150px;
  font-size: 18px;
  color: #444;
`
const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  // lang 為當前使用 語言
  const { t: commonI18n, lang } = useTranslation('common')
  const isLangOpen = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <LanguageButton
        id='basic-button'
        aria-controls={isLangOpen ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={isLangOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        {commonI18n(`language.${lang}`)}
      </LanguageButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={isLangOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <StyledMenuItem onClick={()=>setLanguage('zh-Hant')} >{commonI18n('language.zh-Hant')}</StyledMenuItem>
        <StyledMenuItem onClick={()=>setLanguage('fr')}>{commonI18n('language.fr')}</StyledMenuItem>
        <StyledMenuItem>{commonI18n('language.en')}</StyledMenuItem>
      </Menu>
    </>
  )
}

export default LanguageMenu

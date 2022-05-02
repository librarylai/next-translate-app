import { useState } from 'react'
import styled from 'styled-components'
import { Button, Menu, MenuItem } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
  const router = useRouter()
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
        {/* 方法一：使用 setLanguage 在同一頁切換語系*/}
        <StyledMenuItem onClick={() => setLanguage('zh-Hant')}>{commonI18n('language.zh-Hant')}</StyledMenuItem>
        {/* 方法二：使用 Link 跳頁並切換語系 */}
        <StyledMenuItem>
          <Link href='/about' locale={'en'}>
            {commonI18n('language.en')}
          </Link>
        </StyledMenuItem>
        {/* 方法三： 使用 useRouter 跳頁並切換語系*/}
        <StyledMenuItem onClick={() => router.push('/about', undefined, { locale: 'fr' })}>{commonI18n('language.fr')}</StyledMenuItem>
      </Menu>
    </>
  )
}

export default LanguageMenu

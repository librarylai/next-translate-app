import enI18n from '../en/all.json'
import frI18n from '../fr/all.json'
import zhI18n from '../zh-Hant/all.json'

const formatJsonKeyToArr = (json, parentName) => {
  const jsonKeys = Object.keys(json)
  let formatArr = []
  jsonKeys.forEach((keyString) => {
    if (typeof json[keyString] === 'object') {
      const childKeys = formatJsonKeyToArr(json[keyString], parentName ? `${parentName}.${keyString}` : keyString)
      formatArr = formatArr.concat(childKeys)
    } else {
      formatArr.push(parentName ? `${parentName}.${keyString}` : keyString)
    }
  })
  return formatArr
}
describe('unit test for locales', () => {
  // 以 zh-Hant 為基準
  const zhI18nKeyArr = formatJsonKeyToArr(zhI18n)
  // 需要比對的其他語系 json 檔
  const localesI18nArr = [
    { json: enI18n, language: 'en' },
    { json: frI18n, language: 'fr' },
  ]
  describe(`use zh-Hant to compare other i18n json file  `, () => {
    // 一個一個拿出來比對
    localesI18nArr.forEach((item) => {
      // 將 json 結構 format 成字串
      const i18nKeyArr = formatJsonKeyToArr(item.json)
      describe(`${item.language} i18n`, () => {
        zhI18nKeyArr.forEach((key) => {
          it(`${key}`, () => {
            // 把 zh-Hant format 過後的每一個 key 拿出來比對
            // 看看其他語系檔是否也有存在
            const isExist = i18nKeyArr.some((i18n) => i18n === key)
            // 期待都要是 true 
            expect(isExist).toBe(true)
          })
        })
      })
    })
  })
})

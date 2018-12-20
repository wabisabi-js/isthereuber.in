import MobileDetect from 'mobile-detect'
import storeLinks from './app-stores-links.json'

const md = new MobileDetect(
  typeof window !== 'undefined' ? window.navigator.userAgent : ''
)
const mobileOs =
  md && (md.os() === 'iOS' || md.match('Mac')) ? 'ios' : 'android'

const sanitizeAppName = name => name.toLowerCase().trim()

export const getAppStoreLink = app =>
  (storeLinks[sanitizeAppName(app)] || storeLinks.default)[mobileOs]

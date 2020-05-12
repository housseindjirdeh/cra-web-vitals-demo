// To learn more about the web-vitals library, refer to https://github.com/GoogleChrome/web-vitals

import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

export default onPerfEntry => {
  getCLS(onPerfEntry)
  getFID(onPerfEntry)
  getFCP(onPerfEntry)
  getLCP(onPerfEntry)
  getTTFB(onPerfEntry)
}

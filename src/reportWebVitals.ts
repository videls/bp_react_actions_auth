import { ReportHandler } from 'web-vitals'

// eslint-disable-next-line
const reportWebVitals = async (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry !== null) {
    if (onPerfEntry instanceof Function) {
      await import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry)
        getFID(onPerfEntry)
        getFCP(onPerfEntry)
        getLCP(onPerfEntry)
        getTTFB(onPerfEntry)
      })
    }
  }
}

export default reportWebVitals

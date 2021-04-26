import { MIN_TABLET, MOBILE_ONLY } from '../theme/base'
import useMediaQuery from './useMediaQuery'

const useBreakpoints = () => {
  const isTablet = useMediaQuery(MIN_TABLET)
  const isMobileOnly = useMediaQuery(MOBILE_ONLY)

  return {
    isTablet,
    isMobileOnly,
  }
}

export default useBreakpoints

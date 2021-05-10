import { MIN_TABLET, MOBILE_ONLY, MIN_DESKTOP } from '../theme/base'
import useMediaQuery from './useMediaQuery'

const useBreakpoints = () => {
  const isTablet = useMediaQuery(MIN_TABLET)
  const isMobileOnly = useMediaQuery(MOBILE_ONLY)
  const isDesktopOnly = useMediaQuery(MIN_DESKTOP)

  return {
    isTablet,
    isMobileOnly,
    isDesktopOnly,
  }
}

export default useBreakpoints

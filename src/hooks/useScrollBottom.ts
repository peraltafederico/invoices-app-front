import React, { useEffect, useState } from 'react'

interface Props {
  ref: React.RefObject<HTMLElement>
}

const useScrollBottom = ({ ref }: Props) => {
  const [scrollBottom, setScrollBottom] = useState(true)

  useEffect(() => {
    const node = ref.current

    const handleScroll = () => {
      const isScrollBottom =
        (node?.scrollTop || 0) + (node?.offsetHeight || 0) ===
        node?.scrollHeight

      if (isScrollBottom) {
        setScrollBottom(false)
      } else {
        setScrollBottom(true)
      }
    }

    node?.addEventListener('scroll', handleScroll)

    return () => node?.removeEventListener('scroll', handleScroll)
  }, [ref])

  return scrollBottom
}

export default useScrollBottom

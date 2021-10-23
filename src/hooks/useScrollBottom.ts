import React, { useEffect, useState } from 'react'

interface Props {
  ref: React.RefObject<HTMLElement>
  isListeningRoot?: boolean
}

const useScrollBottom = ({ ref, isListeningRoot }: Props) => {
  const [scrollBottom, setScrollBottom] = useState(true)

  useEffect(() => {
    const node = ref.current

    const handleScroll = () => {
      const isScrollBottom =
        (node?.scrollTop || 0) + (node?.clientHeight || 0) ===
        node?.scrollHeight

      if (isScrollBottom) {
        setScrollBottom(false)
      } else {
        setScrollBottom(true)
      }
    }

    if (isListeningRoot) {
      window.addEventListener('scroll', handleScroll)
    } else {
      node?.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (isListeningRoot) {
        window.removeEventListener('scroll', handleScroll)
      } else {
        node?.removeEventListener('scroll', handleScroll)
      }
    }
  }, [ref, isListeningRoot])

  return scrollBottom
}

export default useScrollBottom

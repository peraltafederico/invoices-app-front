export const onPressKeys = (
  e: React.KeyboardEvent,
  keys: ('Enter' | 'Tab')[],
  callback: () => void
) => {
  if ((keys as string[]).includes(e.key)) {
    callback()
  }
}

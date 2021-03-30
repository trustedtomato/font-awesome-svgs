export function chunkArray<T> (array: T[], chunkLength: number): T[][] {
  const newArray: T[][] = []
  for (let i = 0; i < array.length; i += chunkLength) {
    newArray.push(array.slice(i, i + chunkLength))
  }
  return newArray
}

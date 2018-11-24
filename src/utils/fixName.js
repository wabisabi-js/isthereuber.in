import removeAccents from 'remove-accents'

export const fixName = name =>
  name
    .split('-')
    .join(' ')
    .toLowerCase()

export const fixNameB = name =>
  removeAccents(name)
    .split(' ')
    .join('-')
    .toLowerCase()

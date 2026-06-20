export interface CareerItem {
  date: string
  mainTitle: string
  subDescription: string
  skills: string[]
}

export interface EducationalItem {
  name: string
}

export interface LicenseItem {
  year: string
  title: string
  description: string
}

export interface URLListItem {
  title: string
  URL: string
}

export interface URLItem {
  text: string
  list: URLListItem[]
}

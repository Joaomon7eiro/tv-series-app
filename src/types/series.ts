export type Episode = {
  id: number
  name: string
  number: number
  summary: string
  season: number
  image?: {
    medium: string
    original: string;
  }
}

export type Person = {
  id: number;
  name: string
  image?: {
    medium: string
    original: string;
  }
}

export type Season = {
  id: number;
  number: number;
}

export type Series = {
  id: number
  name: string
  schedule: {
    time: string
    days: string[]
  }
  genres: string[]
  summary: string
  image?: {
    medium: string
    original: string;
  }
}

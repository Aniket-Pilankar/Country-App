export interface Country {
  name: string;
  naiveName: string;
  capital: string[];
  tld: string[];
  region: string;
  subregion: string;
  population: number;
  flags: string;
  currencies: string[];
  languages: string[];
  borders: string[];
}

export type Countries = Country[];

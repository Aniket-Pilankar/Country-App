export namespace API {
  type Currency = {
    name: string;
  };
  export interface Country {
    name: {
      official: string;
      common: string;
    };
    capital: string[];
    tld: string[];
    region: string;
    subregion: string;
    population: number;
    flags: {
      png: string;
    };
    currencies: { [key: string]: Currency };
    languages: { [key: string]: string };
    borders: string[];
  }

  export type Countries = Country[];
}

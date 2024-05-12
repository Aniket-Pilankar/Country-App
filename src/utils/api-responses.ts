export namespace API {
  export interface Country {
    name: {
      official: string;
    };
    capital: string[];
    region: string;
    population: number;
    flags: {
      png: string;
    };
  }

  export type Countries = Country[];
}

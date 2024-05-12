export namespace API {
  export interface Country {
    name: {
      official: string;
    };
    capital: string[];
    region: string;
    population: number;
  }

  export type Countries = Country[];
}

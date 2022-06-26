export interface Trip {
  title: string;
  image: string;
  visibility_status: string;
  departure_date: string;
  arrival_date: string;
  hash: string;
  adults: number;
  children: number;
  infants: number;
  summary_date?: string;
}

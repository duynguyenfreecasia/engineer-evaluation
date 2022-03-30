export interface BaseTable {
  name: string;

  width: string;

  className?: string;

  sort?: boolean;

  buttonNamePrimary?: string;

  buttonNameSecond?: string;
}

export interface OptionsTable {
  filter: boolean;
  pagination: boolean;
}

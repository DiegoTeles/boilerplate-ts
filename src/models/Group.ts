export interface Group {
  _id: string;
  name: string;
  system: string;
  description: string;
  userCount?: number;
  roles: string[];
}

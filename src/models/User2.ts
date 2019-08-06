export interface PhoneNumber {
  number: string;
}

export interface Email {
  address: string;
}

export interface ContactInfo {
  phoneNumber: PhoneNumber;
  email: Email;
}

export interface Address {
  country: string;
  state: string;
  city: string;
}

export interface PersonalInfo {
  cpf: string;
  name: string;
  birthDate: '';
}

export interface CompanyInfo {
  cnpj: string;
  namePartner: string;
  birthDatePartner: string;
  companyName: string;
}

export interface User {
  id?: string;
  contactInfo: ContactInfo;
  address: Address;
  type: 'person' | 'company';
  personalInfo: PersonalInfo;
  companyInfo: CompanyInfo;
  politicallyExposedPerson: boolean | undefined;
  origin: string;
  password: string;
  otherOrigin?: string;
}

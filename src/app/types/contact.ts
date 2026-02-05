export type ContactInfo = {
  telefon: string[];
  email: string[];
  ulica: string;
  miejscowoscIKod: string;
};

export type ContactInfosResponse = {
  contactInfos: ContactInfo[];
};

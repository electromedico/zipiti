export interface Reservation {
  dateTime?: Date;
  typeOfService: TypeOfService;
}
export enum ServiceType {
  "party",
  "group",
  "tickets",
}
export interface TypeOfService {
  type: ServiceType;
  party?: Party;
  group?: Group;
  playTimeTickets?: PlayTimeTickets;
}

export interface Party {
  package: string;
  numberOfAdditionalKids: number;
  numberOfAdditionalAdults: number;
  nameOfPartyKid: string;
  nameOfResponsibleAdult: string;
  primaryContactInformation: ContactInformation;
  secondaryContactInformation?: ContactInformation;
  notes: string;
}

export interface Group {
  name: string;
  numberOfAdults: number;
  primaryContactInformation: ContactInformation;
  secondaryContactInformation?: ContactInformation;
  type: string;
  notes: string;
}

export interface PlayTimeTickets {
  primaryAdultInformation: ContactInformation;
  secondaryAdultInformation?: ContactInformation;
  kids: Kid[];
}

export interface Kid {
  age: number;
  timeOfPlay: number;
}

export interface ContactInformation {
  name: string;
  email: string;
  phone: string;
}

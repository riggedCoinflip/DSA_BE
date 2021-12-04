import {attributeStub, attributeCreateStub, attributeUpdateStub,} from './attribute.stub';

export const heroStub = () => {
  return {
    name: 'Hero #1',
    age: 23,
    _id: '1234567890abcdef12345678',
    __v: 0,
    createdAt: '2021-01-01T10:20:30.456Z',
    updatedAt: '2021-01-01T10:20:30.456Z',
    attribute: attributeStub(),
  };
};

export const heroCreateStub = () => {
  return {
    name: heroStub().name,
    age: heroStub().age,
    attribute: attributeCreateStub(),
  };
};

export const heroUpdateStub = () => {
  return {
    name: 'Renamed',
    age: 98,
    attribute: attributeUpdateStub(),
  };
};
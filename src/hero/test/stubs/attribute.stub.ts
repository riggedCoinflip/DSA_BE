import {Attribute} from 'src/hero/schemas/attribute.schema';
import {
  singleAttributecreateStub,
  singleAttributeStub,
  singleAttributeUpdateStub,
} from './single-attribute.stub';

export const attributeStub = (): Attribute => {
  return {
    cou: singleAttributeStub(),
    sgc: singleAttributeStub(),
    int: singleAttributeStub(),
    cha: singleAttributeStub(),
    dex: singleAttributeStub(),
    agi: singleAttributeStub(),
    con: singleAttributeStub(),
    str: singleAttributeStub(),
    totalValue: 80,
    totalAp: 240,
  };
};

export const attributeCreateStub = () => {
  return {
    cou: singleAttributecreateStub(),
    sgc: singleAttributecreateStub(),
    int: singleAttributecreateStub(),
    cha: singleAttributecreateStub(),
    dex: singleAttributecreateStub(),
    agi: singleAttributecreateStub(),
    con: singleAttributecreateStub(),
    str: singleAttributecreateStub(),
  };
};

export const attributeUpdateStub = () => {
  return {
    cou: singleAttributeUpdateStub(),
    sgc: singleAttributeUpdateStub(),
    int: singleAttributeUpdateStub(),
    cha: singleAttributeUpdateStub(),
    dex: singleAttributeUpdateStub(),
    agi: singleAttributeUpdateStub(),
    con: singleAttributeUpdateStub(),
    str: singleAttributeUpdateStub(),
  };
}

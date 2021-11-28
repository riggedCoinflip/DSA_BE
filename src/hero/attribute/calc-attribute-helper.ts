/*
import {calcApAttribute, prefixAp} from '@riggedcoinflip/dsa-shared';
import {CreateAttributeDto} from './dto/attribute.dto';

export const getAllAttributeValuesFromBase = (
  baseAttribute: CreateAttributeDto,
) => {
  const attribute = {
    cou: baseAttribute.cou,
    sgc: baseAttribute.sgc,
    int: baseAttribute.int,
    cha: baseAttribute.cha,
    dex: baseAttribute.dex,
    agi: baseAttribute.agi,
    con: baseAttribute.con,
    str: baseAttribute.str,
  };

  const attributeFull = {
    ...attribute,
    ...calcAllAttribute(attribute),
  };
  return attributeFull;
};

const calcAllAttribute = (baseAttribute: CreateAttributeDto) => {
  const apAttribute = Object.fromEntries(
    Object.entries(baseAttribute).map(([k, v]) => [
      prefixAp(k),
      calcApAttribute(v),
    ]),
  );

  const add = (a: number, b: number) => {
    return a + b;
  };

  const attributeSum = Object.values(baseAttribute).reduce(add);
  const apSum = Object.values(apAttribute).reduce(add);

  const attributeCalculatedValues = {
    ...apAttribute,
    attributeSum,
    apSum,
  };
  return attributeCalculatedValues;
};
*/

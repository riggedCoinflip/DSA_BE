import { SingleAttribute } from "src/hero/schemas/single-attribute.schema";

export const singleAttributeStub = (): SingleAttribute => {
  return {
    value: 10,
    ap: 30
  };
};

export const singleAttributecreateStub = () => {
  return {
    value: singleAttributeStub().value
  }
}

export const singleAttributeUpdateStub = () => {
  return {
    value: 12
  }
}
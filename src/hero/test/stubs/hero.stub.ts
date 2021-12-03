export const heroStub = () => {
  return {
    name: 'Hero #1',
    age: 23,
    _id: '1234567890abcdef12345678',
    __v: 0,
    createdAt: '2021-01-01T10:20:30.456Z',
    updatedAt: '2021-01-01T10:20:30.456Z',
    attribute: {
      attributes: {
        cou: {
          value: 10,
          ap: 30,
        },
        sgc: {
          value: 10,
          ap: 30,
        },
        int: {
          value: 10,
          ap: 30,
        },
        cha: {
          value: 10,
          ap: 30,
        },
        dex: {
          value: 10,
          ap: 30,
        },
        agi: {
          value: 10,
          ap: 30,
        },
        con: {
          value: 10,
          ap: 30,
        },
        str: {
          value: 10,
          ap: 30,
        },
      },
      total: {
        value: 80,
        ap: 240,
      },
    },
  };
};

export const heroCreateStub = () => {
  return {
    name: heroStub().name,
    age: heroStub().age,
    attribute: {
      attributes: {
        cou: {
          value: heroStub().attribute.attributes.cou.value,
        },
        sgc: {
          value: heroStub().attribute.attributes.sgc.value,
        },
        int: {
          value: heroStub().attribute.attributes.int.value,
        },
        cha: {
          value: heroStub().attribute.attributes.cha.value,
        },
        dex: {
          value: heroStub().attribute.attributes.dex.value,
        },
        agi: {
          value: heroStub().attribute.attributes.agi.value,
        },
        con: {
          value: heroStub().attribute.attributes.con.value,
        },
        str: {
          value: heroStub().attribute.attributes.str.value,
        },
      },
    },
  };
};

export const heroUpdateStub = () => {
  return {
    name: "Renamed",
    age: 98,
    attribute: {
      attributes: {
        cou: {
          value: 20,
        },
        sgc: {
          value: 19,
        },
        int: {
          value: 18,
        },
        cha: {
          value: 17,
        },
        dex: {
          value: 16,
        },
        agi: {
          value: 15,
        },
        con: {
          value: 14,
        },
        str: {
          value: 13,
        },
      },
    },
  };
};

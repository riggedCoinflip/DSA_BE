import {Schema} from 'mongoose';

export const AttributeSchemaName = 'Attribute';

export const AttributeSchema = new Schema({
  cou: {
    value: {
      type: Number,
      required: true,
      default: 8,
      min: 8,
      max: 20,
      validate: {
        validator: (v: number) => {
          return Number.isInteger(v);
        },
        message: (props: {value: number}) =>
          `${props.value} is not an integer!`,
      },
    },
    ap: {
      type: Number,
    },
  },
  sgc: {
    value: {
      type: Number,
      required: true,
      default: 8,
      min: 8,
      max: 20,
      validate: {
        validator: (v: number) => {
          return Number.isInteger(v);
        },
        message: (props: {value: number}) =>
          `${props.value} is not an integer!`,
      },
    },
    ap: {
      type: Number,
    },
  },
  int: {
    value: {
      type: Number,
      required: true,
      default: 8,
      min: 8,
      max: 20,
      validate: {
        validator: (v: number) => {
          return Number.isInteger(v);
        },
        message: (props: {value: number}) =>
          `${props.value} is not an integer!`,
      },
    },
    ap: {
      type: Number,
    },
  },
  cha: {
    value: {
      type: Number,
      required: true,
      default: 8,
      min: 8,
      max: 20,
      validate: {
        validator: (v: number) => {
          return Number.isInteger(v);
        },
        message: (props: {value: number}) =>
          `${props.value} is not an integer!`,
      },
    },
    ap: {
      type: Number,
    },
  },
  dex: {
    value: {
      type: Number,
      required: true,
      default: 8,
      min: 8,
      max: 20,
      validate: {
        validator: (v: number) => {
          return Number.isInteger(v);
        },
        message: (props: {value: number}) =>
          `${props.value} is not an integer!`,
      },
    },
    ap: {
      type: Number,
    },
  },
  agi: {
    value: {
      type: Number,
      required: true,
      default: 8,
      min: 8,
      max: 20,
      validate: {
        validator: (v: number) => {
          return Number.isInteger(v);
        },
        message: (props: {value: number}) =>
          `${props.value} is not an integer!`,
      },
    },
    ap: {
      type: Number,
    },
  },
  con: {
    value: {
      type: Number,
      required: true,
      default: 8,
      min: 8,
      max: 20,
      validate: {
        validator: (v: number) => {
          return Number.isInteger(v);
        },
        message: (props: {value: number}) =>
          `${props.value} is not an integer!`,
      },
    },
    ap: {
      type: Number,
    },
  },
  str: {
    value: {
      type: Number,
      required: true,
      default: 8,
      min: 8,
      max: 20,
      validate: {
        validator: (v: number) => {
          return Number.isInteger(v);
        },
        message: (props: {value: number}) =>
          `${props.value} is not an integer!`,
      },
    },
    ap: {
      type: Number,
    },
  },
  total: {
    value: {
      type: Number,
    },
    ap: {
      type: Number,
    },
  },
});

export const SingleAttributeSchema = new Schema(
  {
    value: {
      type: Number,
      required: true,
      default: 8,
      min: 8,
      max: 20,
      validate: {
        validator: (v: number) => {
          return Number.isInteger(v);
        },
        message: (props: {value: number}) =>
          `${props.value} is not an integer!`,
      },
    },
    ap: {
      type: Number,
    },
  },
  {
    _id: false,
  },
);

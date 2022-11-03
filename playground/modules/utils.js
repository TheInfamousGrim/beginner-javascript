// Modules have their own scope
const last = 'Funk';
const middle = 'dude';

export function returnHi(name) {
  return `Hi ${name} ${last}`;
}

// NAMED exports - we can have as many as we want
export { last, middle };

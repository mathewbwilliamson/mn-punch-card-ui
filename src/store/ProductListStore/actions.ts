import { Action } from 'overmind';

export const testAction: Action = ({ state }) => {
  console.log('\x1b[41m%s \x1b[0m', '[matt] HI');
};

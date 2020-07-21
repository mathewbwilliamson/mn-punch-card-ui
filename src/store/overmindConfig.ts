import { IConfig, Overmind } from 'overmind';
import { namespaced } from 'overmind/config';
import { createHook } from 'overmind-react';
import * as ProductListStore from './ProductListStore';

export const config = namespaced({
  ProductListStore,
});

declare module 'overmind' {
  interface Config
    extends IConfig<{
      state: typeof config.state;
      actions: typeof config.actions;
      effects: typeof config.effects;
    }> {}
}

export const oStore = new Overmind(config);
export const useOvermind = createHook<typeof config>();

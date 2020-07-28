import { IConfig, Overmind } from 'overmind';
import { namespaced } from 'overmind/config';
import { createHook } from 'overmind-react';
import * as ProductListStore from './ProductListStore';
import * as ProductDetailStore from './ProductDetailStore';

export const config = namespaced({
  ProductListStore,
  ProductDetailStore,
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

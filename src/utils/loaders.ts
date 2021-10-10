// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Loaders {}

export type CreateLoaders = () => Loaders;

export const createLoaders: CreateLoaders = () => ({});

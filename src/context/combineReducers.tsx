import { ActionType } from "./contextTypes.tsx";

interface RootState {
  checkboxReducer: { input: string };
}

export type Reducer<S> = (state: S, action: ActionType) => S;

type SliceType = {
  [K in keyof RootState]: Reducer<RootState[K]>;
};

export const combineReducers =
  (slices: SliceType) =>
  (state: RootState, action: ActionType): RootState =>
    Object.keys(slices).reduce(
      (acc, prop) => ({
        ...acc,
        [prop]: slices[prop as keyof RootState](
          state[prop as keyof RootState],
          action,
        ),
      }),
      {} as RootState,
    );

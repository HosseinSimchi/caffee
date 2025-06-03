import { createAction, createFeature, createReducer, createSelector, on } from "@ngrx/store";
import { initialState } from "./login.state";

// Actions
export const increment = createAction("[Counter] Increment");
export const decrement = createAction("[Counter] Decrement");
export const reset = createAction("[Counter] Reset");
export const setValue = createAction(
  "[Counter] Set Value",
  (value: number) => ({ value })
);

// Reducer
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 0 })),
  on(setValue, (state, { value }) => ({ ...state, count: value }))
);

// Feature
export const counterFeature = createFeature({
  name: "counter",
  reducer: counterReducer,
  extraSelectors: ({ selectCount }) => ({
    selectDouble: createSelector(selectCount, (count) => count * 2),
  }),
});

// Export selectors
export const { selectCount, selectDouble } = counterFeature;

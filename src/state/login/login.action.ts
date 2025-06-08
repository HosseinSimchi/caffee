import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const loginActions = createActionGroup({
  source: "login",
  events: {
    "save username": props<{ username: string }>(),
    "get username": emptyProps(),
  },
});

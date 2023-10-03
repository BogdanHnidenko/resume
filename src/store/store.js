import { legacy_createStore as createStore } from "redux";
import { reducerSkills } from "./reducerSkills";
import { reducerWorks } from "./reducerWorks";

export const storeSkills = createStore(reducerSkills);
export const storeWorks = createStore(reducerWorks);

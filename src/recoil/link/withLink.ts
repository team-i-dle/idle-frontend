import { selector } from "recoil";
import linkAtom from "./atom";

const withLink = selector({
  key: "withLink",
  get: ({ get }) => {
    return get(linkAtom);
  },
});

export default withLink;

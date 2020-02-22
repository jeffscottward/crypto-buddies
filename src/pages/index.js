/** @jsx jsx */
import { jsx } from "theme-ui";

import LayoutWrap from "../components/LayoutWrap";
import SearchArea from "../components/SearchArea";
import FreshBuddiesArea from "../components/FreshBuddiesArea";

const Index = () => {
  return (
    <LayoutWrap>
      <SearchArea />
      <FreshBuddiesArea/>
    </LayoutWrap>
  );
}

export default Index

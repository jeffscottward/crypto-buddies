/** @jsx jsx */
import { jsx } from 'theme-ui'

import LayoutWrap from "../components/LayoutWrap";
import SearchArea from "../components/SearchArea";
import { navigate } from "gatsby";

const Details = ({ location, buddyId }) => {
  if(location.state === null ) {
    navigate("/");
  } else {
    return (
      <LayoutWrap>
        <SearchArea prepopulatedBuddy={location.state.buddy} />
      </LayoutWrap>
    );
  }
};

export default Details;

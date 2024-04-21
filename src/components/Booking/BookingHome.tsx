import * as React from "react";
import AppFooter from "../common/views/AppFooter";
import AppBarV2 from "../common/views/AppBarV2";
import withRoot from "../common/withRoot";
import BookingWizard from "./BookingWizzard";

function Index() {
  return (
    <React.Fragment>
      <AppBarV2 />
      <BookingWizard />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);

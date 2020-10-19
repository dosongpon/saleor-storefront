import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ScbQrPaymentGateway } from ".";

const processPayment = action("processPayment");

storiesOf("@components/organisms/ScbQrPaymentGateway", module)
  .addParameters({ component: ScbQrPaymentGateway })
  .add("default", () => (
    <ScbQrPaymentGateway processPayment={processPayment} />
  ));

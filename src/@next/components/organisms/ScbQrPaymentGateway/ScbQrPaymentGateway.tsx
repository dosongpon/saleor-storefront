import { Formik } from "formik";
import React from "react";

import { Radio } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

export const qrStatuses = [
  { token: "charged", label: "(QR)Charged" },
  { token: "fully-refunded", label: "(QR)Fully refunded" },
  { token: "not-charged", label: "(QR)Not charged" },
];

/**
 * ScbQr payment gateway.
 */
const ScbQrPaymentGateway: React.FC<IProps> = ({
  processPayment,
  formRef,
  formId,
  initialStatus,
}: IProps) => {
  return (
    <div><p>ฟรีค่าธรรมเนียม</p></div>)
};

export { ScbQrPaymentGateway };

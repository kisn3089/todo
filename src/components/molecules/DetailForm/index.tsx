import Input from "components/atoms/Input";
import React, { useState } from "react";
import { DetailWrapper, TextAreaWrapper } from "./styles";

const DetailForm = () => {
  const [detailvalue, setDetailValue] = useState("q2eqweq");
  console.log(detailvalue);

  return (
    <DetailWrapper>
      <TextAreaWrapper
        value={detailvalue}
        onChange={(e) => setDetailValue(e.target.value)}
      />
    </DetailWrapper>
  );
};

export default DetailForm;

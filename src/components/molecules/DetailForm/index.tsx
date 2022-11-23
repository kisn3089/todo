import Input from "components/atoms/Input";
import React, { useState } from "react";
import { DetailWrapper, TextAreaWrapper } from "./styles";

const DetailForm = () => {
  const [detailvalue, setDetailValue] = useState("");

  return (
    <DetailWrapper>
      <TextAreaWrapper
        value={detailvalue}
        placeholder="간단한 기록을 남기세요."
        onChange={(e) => setDetailValue(e.target.value)}
      />
    </DetailWrapper>
  );
};

export default DetailForm;

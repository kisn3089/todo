import DateBox from "components/molecules/DateBox";
import DetailForm from "components/molecules/DetailForm";
import { DateCenter, DateWrapper, HomeBody } from "./styles";

const dummyDate = [16, 17, 18, 19, 20, 21, 22];

const HomeTemplate = () => {
  return (
    <HomeBody>
      <DetailForm />
      <DateCenter>
        <DateWrapper>
          {dummyDate.map((date: number, index: number) => {
            return <DateBox key={index} date={date} />;
          })}
        </DateWrapper>
      </DateCenter>
    </HomeBody>
  );
};

export default HomeTemplate;

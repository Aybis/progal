import { Content, FilterMonthAndYear } from '../../Components/molecules';

export default function Index() {
  return (
    <Content textHeading="Dashboard">
      <div className="relative mt-4">
        <FilterMonthAndYear />
      </div>
    </Content>
  );
}

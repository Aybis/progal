import { Content, FormSearch } from '../../../Components/molecules';

export default function Index() {
  return (
    <Content
      textHeading="Project Mitra Done"
      subHeading="List Project berdasarkan mitra yang sudah selesai">
      {/* Section Data Table */}
      <div className="relative bg-white p-4 rounded-lg mt-12">
        {/* Filter Input */}
        <FormSearch />

        {/* Section Table */}
      </div>
    </Content>
  );
}

import { FormSearch } from '../../../Components/molecules';
import Layout from '../../../Layouts/Layout';

export default function Index() {
  return (
    <Layout
      textHeading="Project Mitra Done"
      subHeading="List Project berdasarkan mitra yang sudah selesai">
      {/* Section Data Table */}
      <div className="relative bg-white p-4 rounded-lg mt-12">
        {/* Filter Input */}
        <FormSearch />

        {/* Section Table */}
      </div>
    </Layout>
  );
}

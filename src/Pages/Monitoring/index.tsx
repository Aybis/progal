import { useEffect, useState } from 'react';
import { FormSearch } from '../../Components/molecules';
import Layout from '../../Layouts/Layout';
import { getMitraHasProject } from '../../Services/redux/Actions/hasMitra';
import { useAppDispatch, useAppSelector } from '../../Services/redux/hook';
import { DataMitraHasProject } from '../../Services/redux/Types/hasmitra';
import TableMonitoring from './TableMonitoring';

export default function Index() {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);
  const { listMitraPic } = useAppSelector((state) => state.hasMitra);
  const [filterData, setfilterData] = useState<DataMitraHasProject[]>([]);

  const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setfilterData(listMitraPic);
    } else {
      const filter = listMitraPic.filter((item) => {
        return (
          item.project?.no_io

            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item.deskripsi_pekerjaan
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item.project?.inisiasi?.title_project
            ?.toString()
            ?.toLowerCase()
            ?.includes(event.target.value.toLowerCase()) ||
          item?.mitra?.nama_vendor
            ?.toLowerCase()
            .includes(event.target.value.toLowerCase())
        );
      });
      setfilterData(filter);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await dispatch(getMitraHasProject());
      setfilterData(res);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return (
    <Layout
      textHeading="Monitoring Project"
      subHeading="List Project untuk Monitoring Log">
      {/* Section Data Table */}
      <div className="relative bg-white p-4 rounded-lg mt-12">
        {/* Filter Input */}
        <FormSearch
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handlerSearch(event)
          }
        />
        <div className="mt-4 relative">
          <p className="font-normal text-sm leading-relaxed text-gray-600">
            Result : {filterData.length} project
          </p>
        </div>

        {/* Section Table */}
        <TableMonitoring data={filterData} />
      </div>
    </Layout>
  );
}

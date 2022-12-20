import { useEffect } from 'react';
import { Content, FormSearch } from '../../Components/molecules';
import {
  getMitraHasProject,
  setListMitraPicFilter,
} from '../../Services/redux/Actions/hasMitra';
import { useAppDispatch, useAppSelector } from '../../Services/redux/hook';
import TableMonitoring from './TableMonitoring';

export default function Index() {
  const dispatch = useAppDispatch();
  const { listMitraPic, listMitraFilter } = useAppSelector(
    (state) => state.hasMitra,
  );

  const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      dispatch(setListMitraPicFilter(listMitraPic));
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
      dispatch(setListMitraPicFilter(filter));
    }
  };

  useEffect(() => {
    (async () => {
      return await dispatch(getMitraHasProject());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content
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
            Result : {listMitraFilter.length} project
          </p>
        </div>

        {/* Section Table */}
        <TableMonitoring data={listMitraFilter} />
      </div>
    </Content>
  );
}

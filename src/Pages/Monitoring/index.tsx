import { useEffect } from 'react';
import { Content, FormSearch } from '../../Components/molecules';
import {
  getListMonitoringMitra,
  setListMitraPicFilter,
} from '../../Services/redux/Actions/hasMitra';
import { useAppDispatch, useAppSelector } from '../../Services/redux/hook';
import TableMonitoring from './TableMonitoring';

export default function Index() {
  const dispatch = useAppDispatch();
  const { listMonitoring, listMonitoringFilter } = useAppSelector(
    (state) => state.hasMitra,
  );

  const { profile } = useAppSelector((state) => state.user);

  const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      dispatch(setListMitraPicFilter(listMonitoring));
    } else {
      const filter = listMonitoring.filter((item) => {
        return (
          parseInt(item.project?.no_io!)
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
      if (profile?.job_prefix !== undefined) {
        if (profile?.job_prefix === 'AVP') {
          return await dispatch(getListMonitoringMitra());
        } else {
          return await dispatch(getListMonitoringMitra(profile?.id));
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.id]);

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
            Result : {listMonitoringFilter.length} project
          </p>
        </div>

        {/* Section Table */}
        <TableMonitoring data={listMonitoringFilter} />
      </div>
    </Content>
  );
}

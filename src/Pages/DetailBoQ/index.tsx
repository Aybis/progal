import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Content, PreviewBoQ } from '../../Components/molecules';
import { setHeader } from '../../Configs/api';
import progalApi from '../../Middleware/progal-api';
import { DataMitraHasProject } from '../../Services/redux/Types/hasmitra';

export default function Index() {
  const { id } = useParams();
  const [dataProjectMitraSelected, setdataProjectMitraSelected] =
    useState<DataMitraHasProject>();

  useEffect(() => {
    (async () => {
      try {
        setHeader();
        const res = await progalApi.detailProjectMitra({
          params: {
            id: id,
          },
        });

        setdataProjectMitraSelected(res.data[0]);
        return res;
      } catch (error: any) {
        return error;
      }
    })();
  }, [id]);

  return (
    <Content backNavigation textHeading="Detail BoQ">
      {/* Detail Project  */}
      <div className="relative p-4 mt-10 rounded-lg flex justify-center items-center bg-blue-100/70 backdrop-blur-sm">
        <h1 className="text-center text-2xl leading-relaxed text-blue-600 font-semibold">
          {dataProjectMitraSelected?.mitra?.nama_vendor}
        </h1>
      </div>

      <div className="relative p-4 bg-white rounded-lg mt-12">
        <PreviewBoQ
          data={dataProjectMitraSelected?.boq_item}
          nameVendor={dataProjectMitraSelected?.mitra?.nama_vendor}
        />
      </div>
    </Content>
  );
}

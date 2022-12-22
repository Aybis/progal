import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Divider } from '../../Components/atoms';
import {
  Content,
  PreviewDocument,
  PreviewInisiasi,
  PreviewJusbis,
  PreviewMitra,
} from '../../Components/molecules';
import { getDetailProject } from '../../Services/redux/Actions/project';
import { useAppDispatch } from '../../Services/redux/hook';

export default function Index() {
  const { id }: any = useParams();
  const dispatch = useAppDispatch();
  const [dataProject, setdataProject] = useState<any>();

  useEffect(() => {
    (async () => {
      const res: any = await dispatch(getDetailProject(id));
      setdataProject(res?.data?.[0]);

      return res;
    })();
  }, [dispatch, id]);

  console.log(dataProject?.inisiasi);

  return (
    <Content textHeading="Detail Project" backNavigation>
      {/* Detail Project  */}
      <div className="relative p-4 mt-10 rounded-lg flex justify-center items-center bg-blue-100/70 backdrop-blur-sm">
        <h1 className="text-center text-2xl leading-relaxed text-blue-600 font-semibold">
          {dataProject?.no_io} - {dataProject?.inisiasi?.title_project}
        </h1>
      </div>

      {/* PIC  */}
      <div className="relative grid grid-cols-2 mt-4 gap-4 mb-8">
        <div className="relative flex flex-col justify-center items-center bg-white/80 p-4 rounded-lg">
          <p className="text-sm font-light text-gray-600">PIC PROCUREMENT</p>
          <h1 className="mt-4 text-xl font-semibold text-gray-800">
            {dataProject?.pic_procurement?.name}
          </h1>
        </div>
        <div className="relative flex flex-col justify-center items-center bg-white/80 p-4 rounded-lg">
          <p className="text-sm font-light text-gray-600">PIC LEGAL</p>
          <h1 className="mt-4 text-xl font-semibold text-gray-800">
            {dataProject?.pic_legal?.name}
          </h1>
        </div>
      </div>

      <div className="relative mb-20">
        <Divider nameDivide="Detail Justifikasi Bisnis" colorBg="bg-zinc-50" />
        {dataProject?.inisiasi?.jasbisis?.[0]! ? (
          <PreviewJusbis data={dataProject?.inisiasi?.jasbisis?.[0]!} />
        ) : (
          <div className="relative flex justify-center items-center py-4">
            <p className="text-gray-600 font-light text-sm">Tidak ada data</p>
          </div>
        )}

        <Divider nameDivide="Detail Inisiasi" colorBg="bg-zinc-50" />
        {/* Inisiasi */}
        <PreviewInisiasi data={dataProject?.inisiasi} />

        <Divider nameDivide="Detail Project" colorBg="bg-zinc-50" />
        {/* Project  */}
        <PreviewDocument data={dataProject} />

        <Divider nameDivide="Detail Project Mitra" colorBg="bg-zinc-50" />

        {/* Mitra */}
        {dataProject?.project_mitra?.length > 0
          ? dataProject?.project_mitra?.map((item: any) => (
              <PreviewMitra key={item.id} data={item} />
            ))
          : null}
      </div>
    </Content>
  );
}

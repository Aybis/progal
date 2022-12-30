import { useNavigate } from 'react-router-dom';
import { Divider } from '../../../Components/atoms';
import {
  Content,
  PreviewInisiasi,
  PreviewJusbis,
} from '../../../Components/molecules';
import { useAppSelector } from '../../../Services/redux/hook';

export default function Index() {
  const { inisiasiSelected } = useAppSelector((state) => state.inisiasi);
  const navigate = useNavigate();

  if (Object.entries(inisiasiSelected).length < 2) {
    navigate(-1);
  }

  return (
    <Content
      backNavigation={true}
      textHeading="Detail Inisiasi "
      subHeading="Detail Project with status WON and JUSBIS">
      {/* Detail Project  */}
      <div className="relative p-4 mt-10 rounded-lg flex justify-center items-center bg-blue-200/30 backdrop-blur-sm">
        <h1 className="text-center text-xl leading-relaxed text-blue-700 font-semibold">
          {inisiasiSelected?.io?.internal_order} -{' '}
          {inisiasiSelected?.desc_project ?? ''}
        </h1>
      </div>

      <div className="relative mt-8">
        <Divider
          nameDivide="Detail Justifikasi Bisnis"
          colorBg="bg-zinc-50"
          classRoot="mb-4"
        />
        {inisiasiSelected?.jasbisis?.[0]! ? (
          <PreviewJusbis data={inisiasiSelected?.jasbisis?.[0]!} />
        ) : (
          <div className="relative flex justify-center items-center py-4">
            <p className="text-gray-600 font-light text-sm leading-relaxed tracking-wide">
              Tidak ada data Justifikasi Bisnis
            </p>
          </div>
        )}

        <Divider
          nameDivide="Detail Inisiasi"
          colorBg="bg-zinc-50"
          classRoot="my-6"
        />
        <PreviewInisiasi data={inisiasiSelected} />
      </div>
    </Content>
  );
}

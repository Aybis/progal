import { useNavigate } from 'react-router-dom';
import { Divider } from '../../../Components/atoms';
import { Content, FormPreview } from '../../../Components/molecules';
import { useAppSelector } from '../../../Services/redux/hook';

export default function Index() {
  const { inisiasiSelected } = useAppSelector((state) => state.inisiasi);
  const navigate = useNavigate();
  let filterKey: Array<string> = [
    'id',
    'am_id',
    'ubis_id',
    'status_id',
    'customer_id',
    'segment_id',
    'portofolio_id',
    'io_id',
    'customer_inisiasi_id',
    'created_at',
    'updated_at',
    'product_category_id',
    'product_solution_id',
    'deleted_at',
    'bud_id',
    'kbli_id',
    'obl_id',
    'id_lop',
    'end_customer_id',
    'funel_id',
    'is_solution',
    'top_id',
    'durasi_id',
    'io',
    'jasbisis',
    'inisiasi_id',
    'dokumen',
  ];

  let filterCurrency = [
    'indirect_cost',
    'down_payment',
    'harga_penawaran',
    'cogs',
    'ebitda_project',
    'indirect_cost',
    'revenue',
  ];

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
          nameDivide="Detail Inisiasi"
          colorBg="bg-zinc-50"
          classRoot="mb-4"
        />

        <div className="relative flex flex-col gap-4 bg-white p-6 rounded-lg">
          {Object.entries(inisiasiSelected)
            .filter((form) => filterKey.includes(form[0]) === false)
            .map((item) => {
              return (
                <FormPreview
                  isDocument={item[0].includes('dokumen')}
                  key={item[0]}
                  label={item[0].replace(/_/g, ' ')}
                  value={
                    item[0].includes('nilai') ||
                    filterCurrency.includes(item[0])
                      ? item[1].toLocaleString('id-ID')
                      : item[1] || '-'
                  }
                />
              );
            })}
        </div>

        <Divider
          nameDivide="Detail Justifikasi Bisnis"
          colorBg="bg-zinc-50"
          classRoot="my-6"
        />
        <div className="relative flex flex-col gap-4 bg-white p-6 rounded-lg">
          {inisiasiSelected?.jasbisis?.[0] &&
            Object.entries(inisiasiSelected?.jasbisis?.[0])
              .filter((form) => filterKey.includes(form[0]) === false)
              .map((item) => {
                return (
                  <FormPreview
                    isDocument={item[0].includes('dokumen')}
                    key={item[0]}
                    label={item[0].replace(/_/g, ' ')}
                    value={
                      item[0].includes('nilai') ||
                      filterCurrency.includes(item[0])
                        ? item[1].toLocaleString('id-ID')
                        : item[0].includes('margin')
                        ? `${item[1]}%`
                        : item[1] || '-'
                    }
                  />
                );
              })}
        </div>
      </div>
    </Content>
  );
}

import {
  MagnifyingGlassIcon,
  DocumentIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../../Components/atoms';
import { setHeader } from '../../../Configs/api';
import Layout from '../../../Layouts/Layout';
import progalApi from '../../../Middleware/progal-api';

type DataProject = {
  id: number | string;
  inisiasi_id: number;
  kl_dokumen: string;
  no_io: string;
  p6_dokumen: string;
  p8_dokumen: string;
  pic_legal: {
    id: number;
    name: string;
  };
  pic_procurement: {
    id: number;
    name: string;
  };
  inisiasi: {
    desc_project: string;
    end_customer: string;
    nilai_cogs: number;
    nilai_kl: number;
    nilai_penawaran: number;
    nilai_project: number;
    no_insisasi: string;
    tgl_target_win: string;
  };
};

export default function Index() {
  const navigate = useNavigate();
  const [data, setdata] = useState<DataProject[]>([]);

  const getProject = async () => {
    setHeader();

    const response: any = await progalApi.listProject({
      params: {
        user_id: 134,
      },
    });

    setdata(response);
  };

  const handlerTemp = (data: DataProject) => {
    localStorage.setItem('project', JSON.stringify(data));
    navigate(`/detail/${data.id}`);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <Layout
      textHeading="Disposisi"
      subHeading="List Project Disposisi oleh Manager">
      <div className="relative bg-white p-4 rounded-lg mt-12">
        <div className="relative flex gap-2">
          <div className="relative">
            <Input
              classInput="w-64 placeholder:text-gray-400 placeholder:font-normal placeholder:italic pl-10 text-sm"
              placeholder="Search Something"
            />
            <MagnifyingGlassIcon className="h-5 absolute top-2.5 left-3 text-gray-400" />
          </div>
          <Button type="button" typeClass="primary" classButton="text-sm">
            Search
          </Button>
        </div>

        {/* Section Table */}
        <div className="relative w-full mt-8 overflow-x-auto">
          <table className="relative w-full">
            <thead>
              <tr className="bg-zinc-50 text-base">
                <th className="text-center py-3 px-4 w-32">No</th>
                <th className="text-center py-3 px-4">Action</th>
                <th className="text-center py-3 px-4">IO</th>
                <th className="text-center py-3 px-4">Project</th>
                <th className="text-center py-3 px-4">Nilai COGS</th>
              </tr>
            </thead>
            <tbody>
              {
                // eslint-disable-next-line array-callback-return
                data.map((item, index) => {
                  return (
                    <tr
                      key={item.id}
                      className="text-sm text-center border-b border-zinc-100">
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4 flex gap-2 justify-center">
                        <Button
                          handlerClick={() => handlerTemp(item)}
                          type="button"
                          typeClass="primary"
                          title="Mapping Mitra"
                          classButton="text-sm py-1 rounded">
                          <ShareIcon className="h-5" />
                        </Button>
                        <Button
                          title="View Detail Project"
                          type="button"
                          typeClass="others"
                          classButton="text-sm py-1 rounded">
                          <DocumentIcon className="h-5" />
                        </Button>
                      </td>
                      <td className="py-3 px-4">{item.no_io}</td>
                      <td className="py-3 px-4 text-left">
                        {item.inisiasi.desc_project}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-left">
                        Rp {item.inisiasi.nilai_cogs.toLocaleString('id-ID')}
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

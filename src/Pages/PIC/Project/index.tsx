import { PlusIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { Button, Input } from '../../../Components/atoms';
import { setHeader } from '../../../Configs/api';
import Layout from '../../../Layouts/Layout';
import progalApi from '../../../Middleware/progal-api';

type ProjectMitra = {
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
  project_mitra: Array<string>;
};

export default function Index() {
  const [dataProjectMitra, setdataProjectMitra] = useState<ProjectMitra[]>([]);

  useEffect(() => {
    const getProject = async () => {
      setHeader();

      const response: any = await progalApi.listProjectMitra({
        params: {
          user_id: 134,
        },
      });
      setdataProjectMitra(response);
      return response;
    };
    getProject();
  }, []);

  return (
    <Layout
      textHeading="Project Update"
      subHeading="List Project Update oleh PIC">
      {/* Section Table Data */}
      <div className="relative bg-white p-4 rounded-lg mt-12">
        {/* Filter Search */}
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
            <thead className="bg-zinc-50 text-base border-b">
              <tr>
                <th rowSpan={2} className="text-center py-3 px-4 w-32">
                  No
                </th>
                <th rowSpan={2} className="text-center py-3 px-4">
                  Action
                </th>
                <th rowSpan={2} className="text-center py-3 px-4">
                  IO
                </th>
                <th rowSpan={2} className="text-center py-3 px-4">
                  Project
                </th>
                <th rowSpan={2} className="text-center py-3 px-4">
                  Nilai
                </th>
                <th rowSpan={2} className="text-center py-3 px-4 border-r">
                  Mitra
                </th>
                <th colSpan={2} className="text-center py-3 px-4 border-b">
                  PIC
                </th>
              </tr>
              <tr>
                <th className="text-center py-3 px-4">Procurement</th>
                <th className="text-center py-3 px-4 border-l">Legal</th>
              </tr>
            </thead>
            <tbody>
              {dataProjectMitra.length > 0 &&
                dataProjectMitra.map((item, index) => (
                  <tr key={index} className="text-sm">
                    <td className="text-center py-3 px-4">{index + 1}</td>
                    <td className="text-center py-3 px-4">
                      <Button
                        title="Tambah Mitra"
                        type="button"
                        typeClass="primary"
                        classButton="text-sm py-1 rounded bg-blue-100 border border-blue-200 text-blue-600 hover:bg-blue-500 hover:text-white">
                        <PlusIcon className="h-4" /> Mitra
                      </Button>
                    </td>
                    <td className="text-center py-3 px-4">{item.no_io}</td>
                    <td className="text-left py-3 px-4">
                      {item.inisiasi.desc_project}
                    </td>
                    <td className="text-left py-3 px-4 whitespace-nowrap">
                      Rp {item.inisiasi.nilai_project.toLocaleString('id-ID')}
                    </td>
                    <td className="text-center py-3 px-4 ">
                      {item.project_mitra.length}
                    </td>
                    <td className="text-center py-3 px-4">
                      {item.pic_procurement.name}
                    </td>
                    <td className="text-center py-3 px-4 border-l">
                      {item.pic_legal.name}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

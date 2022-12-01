import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Button, Input } from '../../../Components/atoms';
import Layout from '../../../Layouts/Layout';

export default function Index() {
  return (
    <Layout
      textHeading="Project Mitra"
      subHeading="List Project berdasarkan mitra">
      <div className="relative my-8">Filter</div>

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
          <table className="relative w-full border border-zinc-200">
            <thead>
              <tr className="bg-zinc-50 text-base">
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 w-32 font-medium text-gray-700">
                  No
                </th>
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                  Action
                </th>
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                  IO
                </th>
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                  Judul
                </th>
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                  Mitra
                </th>
                <th
                  rowSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  Nilai
                </th>
                <th
                  colSpan={6}
                  className="text-center py-3 px-4 font-medium text-gray-700 border-b">
                  Dokumen
                </th>
                <th
                  colSpan={2}
                  className="text-center py-3 px-4 font-medium text-gray-700 border-b">
                  PIC
                </th>
              </tr>
              <tr className="bg-zinc-50 text-base">
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  SPPH
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  SPH
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  BAKN
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  KHS
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  Kontrak
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  Surat
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 border-r whitespace-nowrap">
                  Proc
                </th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">
                  Legal
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </Layout>
  );
}

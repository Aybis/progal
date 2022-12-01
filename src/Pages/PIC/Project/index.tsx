import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Button, Input } from '../../../Components/atoms';
import Layout from '../../../Layouts/Layout';

export default function Index() {
  return (
    <Layout
      textHeading="Project Update"
      subHeading="List Project Update oleh PIC">
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
          <table className="relative w-full">
            <thead className="bg-zinc-50 text-base">
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
          </table>
        </div>
      </div>
    </Layout>
  );
}

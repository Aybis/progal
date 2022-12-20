import {
  ChevronRightIcon,
  DocumentCheckIcon,
} from '@heroicons/react/24/outline';
import { Content, FilterMonthAndYear } from '../../Components/molecules';

export default function Index() {
  const dummyDataUbis = [
    {
      name: 'Govement',
      project: 250,
      rupiah: 550000000000,
      done: 200,
      progress: 40,
      pending: 10,
      bastDone: 200,
      bastProgress: 40,
    },
    {
      name: 'Enterprise',
      project: 250,
      rupiah: 750000000000,
      done: 200,
      progress: 40,
      pending: 10,
      bastDone: 200,
      bastProgress: 40,
    },
    {
      name: 'Telco',
      project: 250,
      rupiah: 850000000000,
      done: 200,
      progress: 40,
      pending: 10,
      bastDone: 200,
      bastProgress: 40,
    },
    {
      name: 'E-Commerce',
      project: 250,
      rupiah: 950000000000,
      done: 200,
      progress: 40,
      pending: 10,
      bastDone: 200,
      bastProgress: 40,
    },
  ];

  return (
    <Content textHeading="Dashboard">
      <div className="relative mt-4">
        <FilterMonthAndYear />
      </div>

      <div className="relative flex flex-wrap gap-4 mt-12 box-border">
        {/* Section Column 1 */}
        <div className="relative flex flex-1 w-full">
          <div className="grid gap-4 h-fit overflow-auto w-full">
            {/* Unit Currency */}
            <div className="relative grid lg:grid-cols-2 gap-2 h-fit w-full overflow-auto">
              {dummyDataUbis.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-3 rounded-lg hover:bg-blue-500 flex justify-between items-center">
                  <div className="relative flex gap-3">
                    <div className="relative p-2 rounded-md bg-blue-50 flex justify-center items-center flex-shrink-0 h-14 w-14">
                      <DocumentCheckIcon className="h-7 text-blue-500" />
                    </div>
                    <div className="relative text-zinc-800 group-hover:text-white transition-all duration-300">
                      <h1 className="text-2xl font-semibold">
                        {(item.rupiah / 1000000000).toLocaleString('id-ID')}
                        <small className="text-sm font-light"> /M</small>
                      </h1>
                      <p className="text-sm font-normal leading-relaxed tracking-wide">
                        {item.name}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <ChevronRightIcon className="h-5 text-blue-500" />
                  </div>
                </div>
              ))}
            </div>
            {/* Table Section */}
            <div className="relative bg-white p-4 rounded-xl">
              <div className="relative text-zinc-800">
                <p className="text-sm font-normal leading-relaxed tracking-wide">
                  Statistik
                </p>
                <h1 className="text-xl font-semibold leading-relaxed">
                  Unit Report
                </h1>
              </div>

              {/* Main Table Content */}
              <div className="relative w-full mt-4">
                <table className="w-full relative rounded-lg bg-blue-500">
                  <thead className="text-white">
                    <tr className="uppercase">
                      <th
                        className="py-3 px-4 border-b border-blue-300"
                        rowSpan={2}>
                        Unit
                      </th>
                      <th
                        className="py-3 px-4 border-l border-blue-300"
                        colSpan={3}>
                        Project
                      </th>
                      <th
                        className="py-3 px-4 border-l  rounxl border-blue-300"
                        colSpan={2}>
                        BAST
                      </th>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 font-medium border border-blue-300 leading-relaxed text-base">
                        Done
                      </th>
                      <th className="px-4 py-2 font-medium border border-blue-300 leading-relaxed text-base">
                        Progress
                      </th>
                      <th className="px-4 py-2 font-medium border border-blue-300 leading-relaxed text-base">
                        Pending
                      </th>
                      <th className="px-4 py-2 font-medium border border-blue-300 leading-relaxed text-base">
                        Done
                      </th>
                      <th className="px-4 py-2 font-medium border border-blue-300 leading-relaxed text-base">
                        Progress
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyDataUbis.map((item, index) => (
                      <tr
                        className={[
                          (index + 1) % 2 === 0 ? 'bg-white' : 'bg-white',
                        ].join(' ')}
                        key={index}>
                        <td className="px-4 py-3 font-semibold border border-gray-200 leading-relaxed text-base text-zinc-800 text-center">
                          {item.name}
                        </td>
                        <td className="px-4 py-3 font-semibold border border-gray-200 leading-relaxed text-base text-zinc-800 text-center">
                          {item.done}
                        </td>
                        <td className="px-4 py-3 font-semibold border border-gray-200 leading-relaxed text-base text-zinc-800 text-center">
                          {item.progress}
                        </td>
                        <td className="px-4 py-3 font-semibold border border-gray-200 leading-relaxed text-base text-zinc-800 text-center">
                          {item.pending}
                        </td>
                        <td className="px-4 py-3 font-semibold border border-gray-200 leading-relaxed text-base text-zinc-800 text-center">
                          {item.bastDone}
                        </td>
                        <td className="px-4 py-3 font-semibold border border-gray-200 leading-relaxed text-base text-zinc-800 text-center">
                          {item.bastProgress}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Section Column 2 */}
        <div className="relative flex flex-1 w-full  box-border">
          <div className="relative flex flex-col gap-6 w-full">
            {/* Total Amount Project */}
            <div className="relative bg-blue-500 rounded-xl px-4 py-8 h-fit flex flex-col justify-between items-center shadow-lg shadow-blue-500/50">
              <>
                <h3 className="text-xl font-semibold text-white">
                  Total Amount Project
                </h3>
                <p className="text-center text-sm font-normal text-white w-64 mt-1">
                  Project with status done.
                </p>
              </>
              <h1 className="text-4xl font-bold text-white my-4">
                {/* Sum data ubis rupiah */}
                {'Rp ' +
                  (
                    dummyDataUbis.reduce((a, b) => a + b.rupiah, 0) / 1000000000
                  ).toFixed(1)}
                <small className="font-normal text-sm ml-1">/M</small>
              </h1>

              <div className="bg-white text-blue-500 w-2/3 mt-4 px-4 py-3 rounded-xl flex justify-center items-end text-center text-sm font-semibold cursor-pointer hover:scale-105 transition-all duration-300">
                {/* <span className="text-sm font-normal ml-1">Project</span> */}
                View Detail
              </div>
            </div>

            {/* Project by Status */}
            <div className="relative bg-white rounded-xl">
              <div className="relative border-b-2 border-zinc-100 px-4 py-3">
                <h1 className="text-lg font-semibold text-zinc-800 leading-relaxed">
                  Project By Status
                </h1>
              </div>
              <div className="relative flex flex-col justify-center items-center p-4">
                <p className="text-lg font-normal text-zinc-600">
                  Total Project
                </p>
                <h1 className="text-4xl mt-2 -mb-2 font-semibold text-zinc-800">
                  {dummyDataUbis.reduce((a, b) => a + b.project, 0)}{' '}
                </h1>
              </div>
              <div className="relative mt-4 border-t border-zinc-200 grid grid-cols-3 gap-2 bg-blue-500 py-2 place-items-center divide-x-2 rounded-b-xl">
                <div className="relative w-full flex justify-center items-center flex-col gap-2">
                  <p className="text-zinc-100 font-medium text-base leading-relaxed">
                    Done
                  </p>
                  <h1 className="text-2xl font-semibold text-white leading-relaxed tracking-wide">
                    {/* Sum data ubis progress */}
                    {dummyDataUbis.reduce((a, b) => a + b.done, 0)}
                  </h1>
                </div>
                <div className="relative w-full flex justify-center items-center flex-col gap-2">
                  <p className="text-zinc-100 font-medium text-base leading-relaxed">
                    Progress
                  </p>
                  <h1 className="text-2xl font-semibold text-white leading-relaxed tracking-wide">
                    {/* Sum data ubis progress */}
                    {dummyDataUbis.reduce((a, b) => a + b.progress, 0)}
                  </h1>
                </div>
                <div className="relative w-full flex justify-center items-center flex-col gap-2">
                  <p className="text-zinc-100 font-medium text-base leading-relaxed">
                    Pending
                  </p>
                  <h1 className="text-2xl font-semibold text-white leading-relaxed tracking-wide">
                    {/* Sum data ubis progress */}
                    {dummyDataUbis.reduce((a, b) => a + b.pending, 0)}
                  </h1>
                </div>
              </div>
            </div>

            {/* Grouping */}
            <div className="relative">
              <div className="relative mb-4">
                <h1 className="text-lg font-semibold text-zinc-800 leading-relaxed">
                  Project By BAST
                </h1>
              </div>
              <div className="relataive grid grid-cols-2 gap-4 w-full box-border ">
                <div className="relative flex flex-col gap-4 justify-center items-center bg-blue-500 p-4 w-full rounded-lg">
                  <p className="text-base text-center font-medium text-zinc-200">
                    BAST (DONE)
                  </p>
                  <h1 className="text-white text-center font-semibold text-4xl">
                    {dummyDataUbis.reduce((a, b) => a + b.bastDone, 0)}
                  </h1>
                </div>
                <div className="relative flex flex-col gap-4 justify-center items-center bg-blue-500 p-4 w-full rounded-lg">
                  <p className="text-base text-center font-medium text-zinc-200">
                    BAST (PROGRESS)
                  </p>
                  <h1 className="text-white text-center font-semibold text-4xl">
                    {dummyDataUbis.reduce((a, b) => a + b.bastDone, 0)}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default function Index() {
  return (
    <div className="relative flex gap-3 max-w-md mx-auto container mt-4">
      <div className="relative flex flex-col gap-1">
        <label htmlFor="" className="text-base font-light text-zinc-700">
          Bulan
        </label>
        <select
          name=""
          id=""
          className="relative px-4 text-sm w-44 font-medium py-2 rounded-md border border-zinc-200 text-zinc-800">
          <option value="">Desember</option>
        </select>
      </div>
      <div className="relative flex flex-col gap-1">
        <label htmlFor="" className="text-base font-light text-zinc-700">
          Tahun
        </label>
        <select
          name=""
          id=""
          className="relative px-4 text-sm w-44 font-medium py-2 rounded-md border border-zinc-200 text-zinc-800">
          <option value="">2022</option>
        </select>
      </div>
    </div>
  );
}

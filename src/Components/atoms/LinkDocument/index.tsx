import { DocumentIcon } from '@heroicons/react/24/solid';

type Props = {
  url?: string;
  name?: string;
  data: any;
};

export default function Index(props: Props) {
  return props?.data ? (
    <div className="relative flex flex-col gap-2 justify-center items-center">
      <a
        href={props?.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:text-blue-700 text-center flex justify-center items-center gap-1">
        {props?.name}
        <DocumentIcon className="h-5" />
      </a>

      <p className="text-xs text-gray-400 text-center my-2 whitespace-nowrap">
        {new Date(props?.data?.created_at).getDate() +
          '/' +
          (new Date(props?.data?.created_at).getMonth() + 1) +
          '/' +
          new Date(props?.data?.created_at).getFullYear() +
          ' - ' +
          new Date(props?.data?.created_at).getHours() +
          ':' +
          new Date(props?.data?.created_at).getMinutes()}
      </p>
    </div>
  ) : (
    <p className="text-center w-full">-</p>
  );
}

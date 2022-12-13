import { CheckIcon } from '@heroicons/react/24/solid';

type Props = {
  url?: string;
  name?: string;
};

export default function Index(props: Props) {
  return (
    <a
      href={props?.url}
      target="_blank"
      rel="noreferrer"
      className="text-blue-500 hover:text-blue-700 text-center flex justify-center items-center gap-1">
      {props?.name}
      <CheckIcon className="h-5" />
    </a>
  );
}

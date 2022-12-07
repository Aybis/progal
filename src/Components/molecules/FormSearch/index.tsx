import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Input } from '../../atoms';

type InputSelectProps = {
  placeholder?: string;
  classInput?: string;
  onChange?: (e: any) => void;
};

export default function Index(props: InputSelectProps) {
  return (
    <div className="relative">
      <Input
        onChange={props.onChange}
        classInput={[
          'w-64 placeholder:text-gray-400 placeholder:font-normal placeholder:italic pl-10 text-sm',
        ].join(' ')}
        placeholder={props.placeholder ?? 'Search Something'}
      />
      <MagnifyingGlassIcon className="h-5 absolute top-2.5 left-3 text-gray-400" />
    </div>
  );
}

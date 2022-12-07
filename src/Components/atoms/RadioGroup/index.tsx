import { RadioGroup } from '@headlessui/react';

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ');
}

type PropsRadioGroup = {
  label: string;
  setDokumenSelected?: (data: string) => void;
  dokumenSelected?: string;
  listData?: Array<string>;
};

export default function Index(props: PropsRadioGroup) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="block text-sm font-medium text-gray-700">
          {props.label}
        </h2>
      </div>

      <RadioGroup
        value={props.dokumenSelected}
        onChange={props.setDokumenSelected}
        className="mt-2">
        <RadioGroup.Label className="sr-only">
          Choose jenis dokumen
        </RadioGroup.Label>
        <div className="relative flex flex-wrap gap-4">
          {props?.listData?.map((option) => (
            <RadioGroup.Option
              key={option}
              value={option}
              className={({ active, checked }) =>
                classNames(
                  option
                    ? 'cursor-pointer focus:outline-none'
                    : 'opacity-25 cursor-not-allowed',
                  active ? 'ring-2 ring-offset-2 ring-blue-600' : '',
                  checked
                    ? 'bg-blue-500 font-semibold border-transparent text-white hover:bg-blue-700'
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                  'border rounded-md py-3 px-3 flex items-center justify-center text-center text-sm font-medium uppercase sm:flex-1 transition-all duration-300',
                )
              }>
              <RadioGroup.Label as="span">{option}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

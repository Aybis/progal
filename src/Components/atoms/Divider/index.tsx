type Props = {
  classRoot?: string;
  nameDivide?: string;
  colorBg?: string;
};

export default function Index(props: Props) {
  return (
    <div
      className={['relative', props.classRoot ? props.classRoot : 'mt-4'].join(
        ' ',
      )}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span
          className={[
            props.colorBg ? props.colorBg : 'bg-zinc-100',
            'px-3 text-lg font-medium text-gray-900',
          ].join(' ')}>
          {props.nameDivide}
        </span>
      </div>
    </div>
  );
}

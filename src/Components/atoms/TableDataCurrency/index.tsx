type Props = {
  value: number;
  className?: string;
  currency?: 'Rp' | 'IDR' | '$' | 'USD' | string;
};

export default function Index(props: Props) {
  return props?.value !== 0 ? (
    <div
      className={[
        'relative flex justify-between items-center text-center',
        props.value < 0 ? 'text-red-600' : 'text-gray-800',
        props.className,
      ].join(' ')}>
      {props.value === null || props.value === undefined ? (
        <p className="text-center w-full">-</p>
      ) : (
        <p>{props.currency}</p>
      )}
      <p>{props.value !== 0 ? props.value?.toLocaleString('id-ID') : 0}</p>
    </div>
  ) : (
    <p className="text-center">-</p>
  );
}

type Props = {
  value: number;
  className?: string;
  currency?: 'Rp' | 'IDR' | '$' | 'USD' | string;
};

export default function Index(props: Props) {
  return props?.value !== 0 ? (
    <div
      className={[
        'relative flex justify-between items-center',
        props.className,
      ].join(' ')}>
      <p>{props.currency}</p>
      <p>{props.value !== 0 ? props.value?.toLocaleString('id-ID') : 0}</p>
    </div>
  ) : (
    <p>-</p>
  );
}

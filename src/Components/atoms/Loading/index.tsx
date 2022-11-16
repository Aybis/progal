type LoadingProps = {
  height?: string;
  width?: string;
  color?: string;
};

export default function Index(props: LoadingProps) {
  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <div
          className={[
            'animate-spin rounded-full border-t-2 border-b-2 transition-all duration-300',
            `h-${props.height ?? '8'} w-${props.width ?? '8'}`,
            `border-${props.color ?? 'blue'}-500`,
          ].join(' ')}></div>
        <p
          className={[
            'text-sm font-normal tracking-wide leading-relaxed',
            `text-${props.color ?? 'blue'}-500`,
          ].join(' ')}>
          Loading ...
        </p>
      </div>
    </div>
  );
}

type Props = {
  text: string;
  hasHashtag: boolean;
  clickHandler?: (tagString: string) => void;
};

export default function Tag({ text, hasHashtag, clickHandler }: Props) {
  return clickHandler ? (
    <span
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-slate-900 dark:text-zinc-100 cursor-pointer"
      onClick={() => clickHandler && clickHandler(text)}
    >
      {' '}
      {hasHashtag && '#'}
      {text}
    </span>
  ) : (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-slate-900 dark:text-zinc-100 select-none">
      {' '}
      {hasHashtag && '#'}
      {text}
    </span>
  );
}

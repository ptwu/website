type Props = {
  text: string;
  hasPeriod: boolean;
};

// shortest component name 😂
export default function AttentionGrabbingHeading({ text, hasPeriod }: Props) {
  return (
    <h1 className="font-sourcepro text-5xl font-bold text-purple-900 dark:text-fuchsia-200 mb-1">
      {text}
      {hasPeriod && (
        <span className="text-purple-300 dark:text-fuchsia-400">.</span>
      )}
    </h1>
  );
}

import Image from 'next/image';
import Tag from '../Tag';

type Props = {
  name: string;
  year: number;
  description: (string | JSX.Element)[] | string;
  image: StaticImageData;
  imageAltText: string;
  tags: string[];
};

export default function ProjectCard({
  name,
  year,
  description,
  image,
  imageAltText,
  tags,
}: Props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto dark:text-zinc-100 dark:bg-gray-600 ml-1 mr-1">
      <Image
        className="h-48 w-full object-contain bg-white"
        src={image.src}
        alt={imageAltText}
        width={1000}
        height={1000}
      />
      <div className="px-6 py-4">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <div className="font-bold text-xl">{name}</div>
          <span className="shrink-0 text-sm text-gray-500 dark:text-zinc-300">{year}</span>
        </div>
        <p className="text-gray-700 text-base dark:text-zinc-100">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, idx) => (
          <Tag text={tag} hasHashtag={false} key={idx} />
        ))}
      </div>
    </div>
  );
}

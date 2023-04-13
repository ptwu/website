import { StaticImageData } from 'next/image';

type Props = {
  name: string;
  description: (string | JSX.Element)[] | string;
  image: StaticImageData;
  imageAltText: string;
  tags: string[];
};

export default function ProjectCard({
  name,
  description,
  image,
  imageAltText,
  tags,
}: Props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img className="w-full" src={image.src} alt={imageAltText} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, idx) => (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            key={`project-tag-${idx}`}
          >
            {' '}
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

import Image from 'next/image';

export type ProjectProps = {
  index: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function Project({
  index,
  title,
  description,
  image,
  link,
}: ProjectProps) {
  const orderClass = index % 2 === 0 ? 'sm:order-first' : 'sm:order-last';

  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:underline-offset-4"
      >
        <h3 className="mb-4 text-xl">{title}</h3>
      </a>
      <div className="mb-12 flex flex-wrap gap-6 sm:gap-10">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`transform shadow transition-all duration-200 ease-in-out hover:translate-y-0.5 hover:shadow-lg ${orderClass}`}
        >
          <Image
            src={image}
            alt={title}
            width={240}
            height={240}
            className="h-[360px] rounded-lg sm:basis-[47%]"
          />
        </a>
        <p className="sm:basis-[47%] sm:self-center">{description}</p>
      </div>
    </li>
  );
}

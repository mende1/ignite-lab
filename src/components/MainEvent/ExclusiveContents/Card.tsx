import { CaretRight } from "phosphor-react";

interface CardProps {
  url: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

export function Card(props: CardProps) {
  return (
    <a
      href={props.url}
      className="bg-gray-700 rounded overflow-hidden flex gap-6 items-stretch hover:bg-gray-600 transition-colors"
    >
      <div className="bg-green-700 h-full flex p-6 items-center">
        {props.icon}
      </div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{props.title}</strong>
        <p className="text-sm text-gray-200 mt-2">{props.description}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}

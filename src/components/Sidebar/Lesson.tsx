import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'dd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div
        className={`rounded border mt-2 p-4 ${
          isActiveLesson
            ? "border-green-500 bg-green-500"
            : "border-gray-500 group-hover:border-green-500"
        } `}
      >
        <header className="flex items-center justify-between mb-4">
          {isLessonAvailable ? (
            <span
              className={`flex text-sm font-semibold items-center gap-2 ${
                isActiveLesson ? "text-white" : "text-blue-500"
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="flex text-orange-500 text-sm font-semibold items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={` text-xs font-bold border rounded px-2 py-[0.125rem] ${
              isActiveLesson
                ? "text-white border-white"
                : "text-green-300 border-green-300"
            }`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={`mt-5 block ${
            isActiveLesson ? "text-white" : "text-gray-200"
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}

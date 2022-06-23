import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'dd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <a href="#">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div className="rounded border border-gray-500 mt-2 p-4">
        <header className="flex items-center justify-between mb-4">
          {isLessonAvailable ? (
            <span className="flex text-blue-500 text-sm font-semibold items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="flex text-orange-500 text-sm font-semibold items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-green-300 text-xs font-bold border rounded px-2 py-[0.125rem] border-green-300">
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
}

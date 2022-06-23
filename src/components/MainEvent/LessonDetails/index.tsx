interface LessonDetailsProps {
  title: string;
  description: string;
  teacher: {
    name: string;
    bio: string;
    avatarURL: string;
  };
}

export function LessonDetails(props: LessonDetailsProps) {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <p className="mt-4 text-gray-200 leading-relaxed">{props.description}</p>
      <div className="flex items-center gap-4 mt-6">
        <img
          className="h-16 w-16 rounded-full border-2 border-blue-500"
          src={props.teacher.avatarURL}
          alt={`Foto de perfil do Professor ${props.teacher.name}`}
        />
        <div className="leading-relaxed">
          <strong className="font-bold text-2xl block">
            {props.teacher.name}
          </strong>
          <span className="text-gray-200 text-sm block">
            {props.teacher.name}
          </span>
        </div>
      </div>
    </div>
  );
}

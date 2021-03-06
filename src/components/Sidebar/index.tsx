import { gql, useQuery } from "@apollo/client";
import { LoadingCard } from "../LoadingCard";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC) {
      id
      availableAt
      lessonType
      slug
      title
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: Array<{
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }>;
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] p-6 border-l border-gray-600 bg-gray-700">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de Aulas
      </span>

      {data ? (
        <div className="flex flex-col gap-8">
          {data.lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      )}
    </aside>
  );
}

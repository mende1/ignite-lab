import { gql, useQuery } from "@apollo/client";
import { ComunityButtons } from "./ComunityButtons";
import { ExclusiveContents } from "./ExclusiveContents";
import { LessonDetails } from "./LessonDetails";
import { LoadingPage } from "./LoadingPage";
import { PlayerVideo } from "./PlayerVideo";

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      description
      videoId
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;

interface GetLessonBySlugQueryProps {
  lesson: {
    title: string;
    description: string;
    videoId: string;
    teacher: {
      name: string;
      bio: string;
      avatarURL: string;
    };
  };
}

interface MainEventProps {
  lessonSlug: string;
}

export function MainEvent(props: MainEventProps) {
  const { data } = useQuery<GetLessonBySlugQueryProps>(
    GET_LESSON_BY_SLUG_QUERY,
    {
      variables: {
        slug: props.lessonSlug,
      },
    }
  );

  if (!data) {
    return <LoadingPage />;
  }

  return (
    <div className="flex-1">
      <PlayerVideo videoId={data?.lesson.videoId} />
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <LessonDetails
            title={data.lesson.title}
            description={data.lesson.description}
            teacher={data.lesson.teacher}
          />
          <ComunityButtons />
        </div>
        <ExclusiveContents />
      </div>
    </div>
  );
}

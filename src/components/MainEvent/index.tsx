import { ComunityButtons } from "./ComunityButtons";
import { ExclusiveContents } from "./ExclusiveContents";
import { LessonDetails } from "./LessonDetails";
import { PlayerVideo } from "./PlayerVideo";

export function MainEvent() {
  return (
    <div className="flex-1">
      <PlayerVideo />
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <LessonDetails />
          <ComunityButtons />
        </div>
        <ExclusiveContents />
      </div>
    </div>
  );
}

export function PlayerVideo() {
  return (
    <div className="bg-black flex justify-center">
      <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/KJj70dBgRPo"
          title="YouTube video player"
          frameBorder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}

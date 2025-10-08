export default function MediaPlayer() {
  return (
    <div className="col-12 col-xl-8" style={{ marginTop: '15px' }}>
      <video
        controls
        crossOrigin="anonymous"
        playsInline
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
        id="player"
        style={{
          width: "70vw",
          height: "60vh",
          objectFit: "cover",
          display: "block",
        }}
      >
        {/* Video files */}
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
          type="video/mp4"
          data-size="576"
        />
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
          type="video/mp4"
          data-size="720"
        />
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
          type="video/mp4"
          data-size="1080"
        />

        {/* Caption files */}
        <track
          kind="captions"
          label="English"
          srcLang="en"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
          default
        />
        <track
          kind="captions"
          label="Français"
          srcLang="fr"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
        />

        {/* Fallback for browsers that don't support the <video> element */}
        <a
          href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
          download
        >
          Download
        </a>
      </video>

      <div className="article__actions article__actions--details">
        <div className="article__download">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z" />
          </svg>
          Download:
          <a href="#" download="#">
            480p
          </a>
          <a href="#" download="#">
            720p
          </a>
          <a href="#" download="#">
            1080p
          </a>
          <a href="#" download="#">
            4k
          </a>
        </div>

        {/* add .active class */}
        <button className="article__favorites" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path>
          </svg>
          Add to favorites
        </button>
      </div>
    </div>
  );
}
// filepath: d:\Project1\DOAN\fe-recommend-system\src\components\detail\MediaPlayer.tsx

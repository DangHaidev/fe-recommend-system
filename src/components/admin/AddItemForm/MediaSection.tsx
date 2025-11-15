// components/admin/AddItemForm/MediaSection.tsx
export default function MediaSection() {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="form__video">
            <label htmlFor="form__video-upload">Upload video</label>
            <input
              id="form__video-upload"
              className="form__video-upload"
              type="file"
              accept="video/mp4,video/x-m4v,video/*"
            />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="form__group form__group--link">
            <input type="text" className="form__input" placeholder="or add a link" />
          </div>
        </div>

        <div className="col-12">
          <button type="button" className="form__btn">Publish</button>
        </div>
      </div>
    </div>
  );
}
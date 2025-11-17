// components/admin/AddItemForm/CoverUpload.tsx
export default function CoverUpload() {
  return (
    <div className="col-12 col-md-5 form__cover">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-12">
          <div className="form__img">
            <label htmlFor="form__img-upload">Upload cover (190 x 270)</label>
            <input id="form__img-upload" type="file" accept=".png,.jpg,.jpeg" />
            <img id="form__img" src="#" alt=" " />
          </div>
        </div>
      </div>
    </div>
  );
}
// components/admin/AddItemForm/BasicInfo.tsx
export default function BasicInfo() {
  return (
    <div className="col-12 col-md-7 form__content">
      <div className="row">
        <div className="col-12">
          <div className="form__group">
            <input type="text" className="form__input" placeholder="Title" />
          </div>
        </div>

        <div className="col-12">
          <div className="form__group">
            <textarea className="form__textarea" placeholder="Description"></textarea>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="form__group">
            <input type="text" className="form__input" placeholder="Release year" />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="form__group">
            <input type="text" className="form__input" placeholder="Running time in minutes" />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="form__group">
            <select className="js-example-basic-single" id="quality">
              <option value="FullHD">FullHD</option>
              <option value="HD">HD</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="form__group">
            <input type="text" className="form__input" placeholder="Age" />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="form__group">
            <select className="js-example-basic-multiple" id="country" multiple>
              <option value="United States">United States</option>
              <option value="Vietnam">Viet Nam</option>
              <option value="Japan">Japan</option>
              {/* Thêm tùy ý */}
            </select>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="form__group">
            <select className="js-example-basic-multiple" id="genre" multiple>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
            </select>
          </div>
        </div>

        <div className="col-12">
          <div className="form__gallery">
            <label htmlFor="form__gallery-upload">Upload photos</label>
            <input
              id="form__gallery-upload"
              className="form__gallery-upload"
              type="file"
              accept=".png,.jpg,.jpeg"
              multiple
            />
          </div>
        </div>
      </div>
    </div>
  );
}
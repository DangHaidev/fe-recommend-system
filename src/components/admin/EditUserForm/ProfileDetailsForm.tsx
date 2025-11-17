// components/admin/EditUserForm/ProfileDetailsForm.tsx
export default function ProfileDetailsForm() {
  return (
    <form className="sign__form sign__form--profile sign__form--first">
      <div className="row">
        <div className="col-12">
          <h4 className="sign__title">Profile details</h4>
        </div>

        {["username", "email", "firstname", "lastname"].map((field) => (
          <div key={field} className="col-12 col-md-6 col-lg-12 col-xl-6">
            <div className="sign__group">
              <label className="sign__label" htmlFor={field}>
                {field === "username" ? "Login" : field.charAt(0).toUpperCase() + field.slice(1).replace("name", " name")}
              </label>
              <input
                id={field}
                type={field === "email" ? "email" : "text"}
                className="sign__input"
                placeholder={field === "username" ? "User123" : field === "email" ? "email@email.com" : "John"}
              />
            </div>
          </div>
        ))}

        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
          <div className="sign__group">
            <label className="sign__label" htmlFor="subscription">Subscription</label>
            <select className="js-example-basic-single" id="subscription">
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="Cinematic">Cinematic</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
          <div className="sign__group">
            <label className="sign__label" htmlFor="rights">Rights</label>
            <select className="js-example-basic-single" id="rights">
              <option value="User">User</option>
              <option value="Moderator">Moderator</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="col-12">
          <button className="sign__btn" type="button">Save</button>
        </div>
      </div>
    </form>
  );
}
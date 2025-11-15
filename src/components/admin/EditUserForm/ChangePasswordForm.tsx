// components/admin/EditUserForm/ChangePasswordForm.tsx
export default function ChangePasswordForm() {
  return (
    <form className="sign__form sign__form--profile">
      <div className="row">
        <div className="col-12">
          <h4 className="sign__title">Change password</h4>
        </div>

        {["oldpass", "newpass", "confirmpass"].map((field) => (
          <div key={field} className="col-12 col-md-6 col-lg-12 col-xl-6">
            <div className="sign__group">
              <label className="sign__label" htmlFor={field}>
                {field === "oldpass" ? "Old password" : field === "newpass" ? "New password" : "Confirm new password"}
              </label>
              <input id={field} type="password" className="sign__input" />
            </div>
          </div>
        ))}

        <div className="col-12">
          <button className="sign__btn" type="button">Change</button>
        </div>
      </div>
    </form>
  );
}
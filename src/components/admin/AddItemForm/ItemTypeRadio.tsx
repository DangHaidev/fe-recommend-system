// components/admin/AddItemForm/ItemTypeRadio.tsx
export default function ItemTypeRadio() {
  return (
    <div className="col-12">
      <ul className="form__radio">
        <li><span>Item type:</span></li>
        <li>
          <input id="type1" type="radio" name="type" defaultChecked />
          <label htmlFor="type1">Movie</label>
        </li>
        <li>
          <input id="type2" type="radio" name="type" />
          <label htmlFor="type2">TV Show</label>
        </li>
      </ul>
    </div>
  );
}
// components/admin/AddItemForm/AddItemForm.tsx
import CoverUpload from "./CoverUpload";
import BasicInfo from "./BasicInfo";
import ItemTypeRadio from "./ItemTypeRadio";
import MediaSection from "./MediaSection";

export default function AddItemForm() {
  return (
    <form action="#" className="form">
      <div className="row">
        <CoverUpload />
        <BasicInfo />
        <ItemTypeRadio />
        <MediaSection />
      </div>
    </form>
  );
}
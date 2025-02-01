import { DynamicHtmlTag } from "components";

export default function TableLoader() {
  return (
    <DynamicHtmlTag type="div" className="ag-overlay-loading-center" style={{ padding: "20px", background: "rgba(255, 255, 255, 0.9)" }}>
      <DynamicHtmlTag type="div" className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }}>
        <output className="visually-hidden">Loading...</output>
      </DynamicHtmlTag>
      <DynamicHtmlTag type="div" style={{ marginLeft: "15px", fontSize: "1.2em" }}>
        Loading...
      </DynamicHtmlTag>
    </DynamicHtmlTag>
  );
}

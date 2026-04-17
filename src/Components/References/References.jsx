import "./references.css";

export function References({
  pictoSrc,
  pictoState,
  pictoTrigger,
  reference,
  nameReferent,
}) {
  return (
    <div className="reference">
      <lord-icon src={pictoSrc} delay="2000" trigger={pictoTrigger}></lord-icon>
      <p className="referenceText">{reference}</p>
      <p className="referentName">{nameReferent}</p>
    </div>
  );
}

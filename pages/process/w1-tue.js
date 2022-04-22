import NavigationProcessDay from "../../components/NavigationProcessDay";

export default function ProcessDay() {
  const data = [
    "- Haustür",
    "- Schlüssel",
    "- Treppen",
    "- Briefkasten",
    "- 2 Räder",
    "- Vorfahrt",
    "- Kreisel",
    "- Hauptstrasse",
    "- Fussballfelder",
    "- Polizei",
    "- Rathaus",
    "- Abfahrt",
    "- Auffahrt",
    "- (gefährliche) Kreuzung",
    "- Gleise",
    "- 745",
    "- Parkplatz suchen",
    "- Viele Schritte",
    "- 742",
    "- Tür",
    "- 3 Etagen",
    "- Durchatmen",
    "- Hinsetzen",
  ];
  const listItems = data.map((loc, index) => (
    <li className="writing-mode-vertical-rl text-6xl whitespace-nowrap origin-top-left -rotate-45" key={index}>
      {loc}
    </li>
  ));

  return (
    <>
      <NavigationProcessDay title={"Week 1 | Tuesday"} />
      {/* <div className="w-max">
        <div className="flex px-12 pt-24 justify-between">
          <p>- Start -</p>
          <p>- Finish -</p>
        </div>
      </div> */}

        <ul className="flex h-72 overflow-y-visible pt-24 mx-12 gap-16">{listItems}</ul>
    </>
  );
}

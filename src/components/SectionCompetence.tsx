import CompetencesFRAME from "./CompetencesFrame";
import CompetencesPROG from "./CompetencesProg";

export const SectionCompetence = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <CompetencesPROG />
        <CompetencesFRAME />
      </div>
    </>
  );
};

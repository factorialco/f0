import { CandidateEntityRef as e } from "../entities/candidate/CandidateEntityRef.js";
import { ExpenseEntityRef as t } from "../entities/expense/ExpenseEntityRef.js";
import { JobPostingEntityRef as n } from "../entities/jobPosting/JobPostingEntityRef.js";
import { RequisitionEntityRef as r } from "../entities/requisition/RequisitionEntityRef.js";
import { PersonEntityRef as i } from "../entities/person/PersonEntityRef.js";
import { VacancyEntityRef as a } from "../entities/vacancy/VacancyEntityRef.js";
//#region src/kits/ai/F0AiChat/components/markdownRenderers/entityRef/components/entityRefRegistry.ts
var o = {
	person: i,
	candidate: e,
	expense: t,
	"job-posting": n,
	requisition: r,
	vacancy: a
};
function s(e) {
	return o[e];
}
//#endregion
export { s as getEntityRefRenderer };

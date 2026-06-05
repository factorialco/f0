import { CandidateEntityRef as e } from "../entities/candidate/CandidateEntityRef.js";
import { ExpenseEntityRef as n } from "../entities/expense/ExpenseEntityRef.js";
import { JobPostingEntityRef as i } from "../entities/jobPosting/JobPostingEntityRef.js";
import { RequisitionEntityRef as o } from "../entities/requisition/RequisitionEntityRef.js";
import { PersonEntityRef as r } from "../entities/person/PersonEntityRef.js";
import { VacancyEntityRef as f } from "../entities/vacancy/VacancyEntityRef.js";
const m = {
  person: r,
  candidate: e,
  expense: n,
  "job-posting": i,
  requisition: o,
  vacancy: f
};
function c(t) {
  return m[t];
}
export {
  c as getEntityRefRenderer
};

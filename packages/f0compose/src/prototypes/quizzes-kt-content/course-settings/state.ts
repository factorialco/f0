
/**
 * Static copy for the Trainings list, taken verbatim from the real product
 * (frontend `en.json` → `trainings.*`). No co-creation / language switching yet
 * — the goal of this prototype is a 1:1 pixel-perfect recreation of the screen.
 */
export const strings = {
  title: "Training",

  // Page tabs (top level)
  tabCourses: "Courses",
  tabRequests: "Requests",
  tabBudgets: "Budgets",
  tabInsights: "Insights",

  // Sub-tabs (under Courses)
  subAllCourses: "All courses",
  subCategories: "Categories",
  subAxes: "Axes",
  subSurveyTemplates: "Survey templates",

  // Upsell banner (Factorial Campus / EU AI Act)
  bannerTitle: "EU AI Act: train your team before August 2nd or get fined",
  bannerSubtitle:
    "Give your team the AI literacy training required under Article 4. Built-in courses and an automated audit trail keep compliance covered without extra admin work.",
  bannerCta: "View free course",

  // Actions
  newCourse: "New course",
  exportName: "Export course",
  exportDescription: "Export as .csv or excel",
  importName: "Import course and participants",
  importDescription: "Import a CSV or Excel file",
  importCoursesName: "Import course",
  importCoursesDescription: "Import a CSV or Excel file",
  duplicate: "Duplicate",
  delete: "Delete",
  displayCatalog: "Display in catalog",
  hideCatalog: "Hide from catalog",
  removeFromCatalog: "Hide from catalog",

  // Columns (labels as shown in the live product)
  colName: "Course",
  colCode: "Internal code",
  colParticipants: "Participants",
  colExpired: "Validity expired",
  colCatalog: "Catalogue",
  colStatus: "Status",
  colType: "Requirement",
  colTags: "Categories",
  colAxes: "Axes",
  colCompetencies: "Competencies",

  // Cell values
  expiredField: (count: number) => `${count} people`,
  onCatalog: "On catalog",
  factorialCampus: "Factorial campus",
  statusPublished: "Published",
  statusDraft: "Draft",
  mandatory: "Mandatory",
  nonMandatory: "Not mandatory",

  // Presets
  presetExpired: "Validity expired",
  presetPublished: "Published",
  presetFactorialCampus: "Factorial campus",

  // Filters
  filterStatus: "Status",
  filterCompetencies: "Competencies",
  filterTags: "Categories",
  filterParticipant: "Participant",
  filterYear: "Year",
  filterRetake: "Re-take",
  filterMandatory: "Mandatory",
  filterCampus: "Factorial campus",
  filterActiveCourses: "Active Courses",
  yes: "Yes",
  no: "No",
  activeCoursesYes: "Courses with active groups",
  activeCoursesNo: "All Courses",

  // Course creation entry (ONE landing)
  create: {
    greeting: "Hi Hellen,",
    headline: "Tell me the course you want to create — I'll ask what I need and build it with you.",
    placeholder: 'e.g. "A leadership course for new managers"',
    or: "OR",
    fromScratch: "Build it from scratch",
    fromScratchDesc: "Use the wizard to create a course manually",
    disclaimer: "One works within your permissions.",
    disclaimerLink: "See more",
  },

  // Course creation wizard
  wizard: {
    title: "New course",
    stepBasic: "Basic information",
    stepBasicDesc: "Name the course and give it an internal reference.",
    stepDetails: "Details",
    stepDetailsDesc: "Describe the course and classify it.",
    stepSettings: "Settings",
    stepSettingsDesc: "Set requirement, validity and catalog visibility.",
    fName: "Course name",
    fNamePh: "e.g. Cybersecurity Awareness",
    fCode: "Internal code",
    fCodePh: "e.g. SEC-007",
    fProvider: "Provider",
    fProviderPh: "e.g. Factorial Campus",
    fDescription: "Description",
    fDescriptionPh: "What is this course about?",
    fCategories: "Categories",
    fCompetencies: "Competencies",
    fMandatory: "Mandatory for participants",
    fValidity: "Course validity (years)",
    fCatalog: "Publish to catalog",
  },

  // Empty state
  emptyTitle: "Optimize your learning processes",
  emptyDescription:
    "Maximize your course operations' efficiency. Strategically plan sessions, seamlessly enroll employees, and effortlessly track progress while gathering valuable insights—all simply and efficiently.",
  emptyCreate: "Create course",

  // ---- Course detail ----
  detail: {
    // header
    back: "Back",
    edit: "Edit",
    publish: "Publish",
    settings: "Settings",
    copyLink: "Copy link",
    revert: "Revert to draft",
    metaType: "Type",
    metaTypeInternal: "Internal",
    metaDuration: "Duration",
    metaGroups: "Groups",
    metaParticipants: "Participants",

    // publish readiness (draft)
    publishReadinessTitle: "Finish setting up this course",
    publishReadinessDesc:
      "Add at least one group and publish the course so participants can be enrolled.",

    // empty states (draft / no data)
    groupsEmptyTitle: "No groups",
    groupsEmptyDesc:
      "Structure your course into student groups to schedule sessions for participants to attend.",
    participantsEmptyTitle: "No participants yet",
    participantsEmptyDesc: "Add participants to enrol them in this course.",
    surveysEmptyTitle: "No surveys",
    surveysEmptyDesc: "Create your first survey from scratch to get started.",
    materialsEmptyTitle: "No course materials yet",
    materialsEmptyDesc: "Upload any files you want to share with participants.",
    documentsEmptyTitle: "No documents yet",
    documentsEmptyDesc: "Add any course-related documents you want to store here. Participants won't see them.",

    // detail tabs
    tabOverview: "Overview",
    tabContent: "Content",
    tabGroups: "Groups",
    tabParticipants: "Participants",
    tabMaterials: "Materials",
    tabDocuments: "Documents",
    tabSurveys: "Surveys",

    // overview sections
    overviewScores: "Form scores",
    overviewCompetencies: "Competencies",
    overviewObjectives: "Objectives",
    overviewDescription: "Description",
    overviewValidity: "Course validity",
    validityYears: (n: number) => `${n} ${n === 1 ? "year" : "years"} valid`,
    overviewLearningPlatform: "Learning platform",
    overviewCompletionSettings: "Completion settings",
    overviewSubsidy: "Subsidy",
    overviewWorkflow: "Workflow",
    overviewInternalCode: "Internal code",
    overviewProvider: "Provider",
    overviewTags: "Categories",
    overviewAxes: "Axes",
    overviewTotalCost: "Total cost",
    overviewTotalSalaryCost: "Total salary cost",
    overviewSubsidizedCost: "Subsidiary cost",
    overviewYear: "Creation year",
    overviewThumbnail: "Course thumbnail",

    // content tab
    contentTitle: "Course content",
    contentEdit: "Edit content",
    // content empty (create options) — verbatim from production
    contentCreateTitle: "Build your course content",
    contentCreateSubtitle:
      "Build a professional structure in seconds with One using the SCORM importer, or start from scratch.",
    contentStartOne: "Create with One",
    contentStartOneDesc: "Build an entire course in seconds with One, from structure to content.",
    contentImportScorm: "Import SCORM package",
    contentImportScormDesc: "Upload a SCORM package to quickly fill your training content.",
    contentBuildManually: "Create from scratch",
    contentBuildManuallyDesc: "Design your course content step by step with our editor.",

    // groups tab
    groupsNew: "New group",
    groupCol: "Group",
    groupStart: "Start date",
    groupEnd: "End date",
    groupSessions: "Sessions",
    groupParticipants: "Participants",
    groupCompletion: "Group completion rate",

    // participants tab
    participantsAdd: "Add participants",
    participantsExport: "Export certificates",
    pCol: "Participant",
    pStatus: "Status",
    pCertificate: "Certificate",
    pCompletion: "Completion date",
    pGroup: "Group",
    pAttendance: "Session attendance",
    notSet: "Not set",
    statusCompleted: "Completed",
    statusInProgress: "In progress",
    statusNotStarted: "Not started",
    statusNotAssigned: "Not assigned",
    statusAbsent: "Absent",
    files: (n: number) => `${n} file${n === 1 ? "" : "s"}`,

    // materials tab
    materialsTitle: "Course materials",
    materialsDescription:
      "Files shared with participants (e.g., syllabus, slides, readings, and other helpful resources).",
    materialsUpload: "Upload",
    materialsEmbed: "Embed file",

    // documents tab
    documentsTitle: "Course documents",
    documentsDescription:
      "Internal files for this course (e.g., attendance sheets, training records, or compliance documents). These are only visible to training managers and admins.",
    documentsUpload: "Upload",

    // surveys tab
    surveysNew: "New survey",
    surveyName: "Survey name",
    surveyStatus: "Status",
    surveyType: "Type",
    surveyParticipation: "Participation rate",
    surveyPublished: "Published",
    surveyDraft: "Draft",
  },

  // ---- LMS content Builder (verbatim from production) ----
  builder: {
    breadcrumb: "Course content",
    goToOverview: "Go to overview",
    preview: "Preview",
    modules: "Modules",
    addContent: "Add content",
    page: "Page",
    quiz: "Quiz",
    newPageTitle: "New page title",
    bodyPlaceholder: "Write something here...",
    dropTitle: "Drag and drop or click here",
    dropHelp:
      "Upload .jpg, .jpeg, or .png files up to 5MB. Recommended size: 1280 × 720 px (16:9).",
    save: "Save",
    discard: "Discard",
    unsaved: "You have changes pending to be saved",
    extracting: "Extracting more modules…",
    emptyTitle: "Start creating your new course!",
    emptyDesc: "Create your first module from scratch.",
    // ONE's chat follow-up once the content build finishes
    contentReadyThinking: "Drafted the modules and blocks",
    contentReadySessions:
      "Your content's ready — I've laid out the modules with their lessons and a quick check at the end of each. Take a look and tweak anything that feels off.",
    contentReady:
      "Your content's ready — I've laid out the modules with their lessons and a quick check at the end of each. Review it and hit Save when it looks good.",
    // Save offer — ONE saves the content for the TM, then moves on to setup
    saveClarify: "Want me to save the content?",
    savedReply:
      "Saved — the content's locked in. Next is the training group: that's the cohort that takes the course, and where its sessions are scheduled. Once it's set up you can add participants — or waitlist them until the sessions are on the calendar.",
    notYetReply:
      "No rush — review it and hit Save when you're happy, and I'll set up the group next.",
    // The sessions clarifyings (shown in the chat composer)
    groupClarify: "How do you want to set up the group?",
    sessionModalityClarify: "Will the sessions run in person or virtually?",
    sessionCountClarify: "One session or several?",
    // ONE's reasoning steps while it sets up the group (shown live in the chat)
    stepCreatingGroup: "Creating the group",
    stepStartDate: "Start date: today",
    // ONE narrating the sessions/groups step
    groupsCreatedSingle:
      "Created Group 1 — starts today, no end date. Add the sessions and participants whenever you're ready.",
    groupsCreatedSeveral:
      "Created 3 groups — each with a start date and no end date. Tweak the dates, sessions and participants as you like.",
    groupLater: "No problem — set up the groups and sessions whenever you're ready.",
  },

  // ---- My training (learner) — strings verbatim from production trainings en.json ----
  learner: {
    // module / nav
    title: "My training",
    personaAdmin: "Manage (admin)",
    personaLearner: "My training",

    // top-level section tabs
    tabMyCourses: "My courses",
    tabCatalog: "Catalog",
    tabRequests: "My requests",
    tabSurveys: "My surveys",

    // Factorial Campus
    factorialCampusHeader: "Factorial Campus",
    campusCourse1Title: "AI literacy - all employees",
    campusCourse1Desc: "Mandatory for every employee in your company.",
    campusCourse2Title: "AI literacy for managers",
    campusCourse2Desc:
      "For anyone in charge of hiring, evaluating performance, allocating tasks, or monitoring employees",
    campusCourse3Title: "AI literacy for HR, Legal and IT",
    campusCourse3Desc:
      "For whoever owns compliance or decides which AI tools your company deploys.",
    campusLearnMore: "Learn more",
    campusEnroll: "Enroll to course",

    // Catalog tab
    catalogEmptyTitle: "No courses found",
    catalogEmptyDesc: "No courses found in the catalog",

    // Requests tab
    requestsEmptyTitle: "No requests yet",
    requestsEmptyDesc: "Request a course from the catalog to get started.",
    requestsNew: "New request",

    // Surveys tab
    surveysEmptyTitle: "No surveys",
    surveysEmptyDesc: "Surveys assigned to you will appear here.",

    // overview widgets
    nextSessionTitle: "Next session",
    completedWidgetTitle: "Progress",
    completedCourses: "Courses completed",
    noTrainingsAvailable: "No trainings assigned",

    // grouping + card datatable
    groupMandatory: "Mandatory learning",
    groupOptional: "Optional learning",
    noProgress: "No progress tracked",
    sessionsProgress: (done: number, total: number) => `${done} of ${total} sessions`,
    modulesProgress: (done: number, total: number) => `${done} of ${total} modules`,
    overviewEmptyTitle: "No trainings found",
    overviewEmptyDesc: "No trainings assigned",

    // filters
    filterStatus: "Status",
    filterYear: "Year",

    // status badges (membership) — production header.status / all_courses_table
    statusNotStarted: "Not started",
    statusStarted: "Started",
    statusPartial: "Partially Completed",
    statusCompleted: "Completed",
    statusAbsent: "Absent",

    // CTA
    ctaStart: "Start learning",
    ctaResume: "Resume course",
    ctaReview: "Review course",

    // modalities
    modalityOnline: "Virtual",
    modalityInperson: "On site",
    modalityMixed: "Hybrid",

    // detail tabs
    tabOverview: "Overview",
    tabContent: "Course content",
    tabMaterials: "Materials",
    tabSessions: "Sessions",
    tabCertificates: "Certificates",

    // detail overview sections
    objectives: "Objectives",
    description: "Description",
    competencies: "Competencies",
    instructors: "Instructor(s)",
    learningPlatform: "Learning platform",
    courseContent: "Course content",

    // content tab
    contentEmptyTitle: "No content yet",
    contentEmptyDesc: "This course has no learning content to display.",
    scormContentLabel: "Course content",

    // sessions tab
    sessionName: "Session",
    sessionDate: "Date",
    sessionLocation: "Location",
    sessionStatus: "Status",
    sessionsEmptyTitle: "No sessions",
    sessionsEmptyDesc: "This course has no scheduled sessions.",
    attPending: "Not started",
    attInProgress: "In progress",
    attCompleted: "Completed",
    attMissing: "Absent",

    // materials tab
    materialName: "Name",
    materialMeta: "Details",
    materialsEmptyTitle: "No materials",
    materialsEmptyDesc: "Files shared by your trainer will appear here.",

    // certificates tab
    certName: "Certificate",
    certMeta: "Details",
    certUpload: "Upload certificate",
    certificatesEmptyTitle: "No certificates yet",
    certificatesEmptyDesc: "Upload your completion certificate, or it will appear here once issued.",
  },

  // ---- My training requests — verbatim from trainings.training_requests en.json ----
  requests: {
    // table columns
    colCourseName: "Course name",
    colCompetencies: "Competencies",
    colRequestDate: "Request date",
    colApplicant: "Applicant",
    colStatus: "Status",

    // status badge labels
    statusDraft: "Draft",
    statusPending: "Pending",
    statusApproved: "Approved",
    statusRejected: "Rejected",

    // header actions
    btnFromCatalog: "From catalog",
    btnNewProposal: "New proposal",

    // empty state
    emptyTitle: "Begin requesting course courses and track their status from here.",
    emptyCta: "Request course",
    checkCatalog: "Check the course catalog",

    // request detail — side panel (1:1 with production RequestDetailSidepanelComponent)
    detailTitle: "Request detail",
    detailModuleLabel: "Course request",
    detailCourseType: "Course type",
    detailTypeNew: "New proposal",
    detailTypeFromCatalog: "From catalog",
    detailCourseName: "Course name",
    detailCourseNeed: "Course need",
    detailAdditionalComments: "Additional information",
    detailBasicInfo: "Basic information",
    detailTimingCost: "Timing and cost",
    detailAdditionalInfo: "Additional information",
    detailCompetencies: "Related competencies",
    detailCompetenciesEmpty: "No competencies added to this course request",
    detailProviderName: "Provider name",
    detailExternalLink: "External link",
    detailLink: "Link",
    detailTotalHours: "Total course hours",
    detailHoursPh: "Hours",
    detailMinutesPh: "Minutes",
    detailDates: "Dates",
    detailStartDate: "Start date",
    detailEndDate: "End date",
    detailCost: "Cost",
    detailSubsidized: "This is a subsidized course.",
    detailSubsidizedCost: "Subsidized cost",
    detailSchedule: "Course schedule",
    detailSelectPlaceholder: "Select",
    detailParticipants: "Participants",
    detailViewApplicant: "View applicant",
    detailApprovalHistory: "Approval history",
    detailApprovalEmptyTitle: "No approval history",
    detailApprovalEmptyDesc: "This kind of request did not need or have an approval flow",
    detailRequester: "Requester",
    detailCreated: "Created",
    detailSendForApproval: "Send for approval",
    detailSave: "Save",
    detailSaveAsDraft: "Save as draft",
    detailApprove: "Approve",
    detailReject: "Reject",
    detailDelete: "Delete",
    yes: "Yes",
    no: "No",
    // header status (matches production header.status)
    statusHeaderDraft: "Draft",
    statusHeaderPending: "Pending approval",
    statusHeaderApproved: "Approved",
    statusHeaderRejected: "Rejected",

    // wizard — creation flow
    wizardTitle: "Training request",
    // step titles (verbatim from production sections)
    wizardStepCourseNeed: "Course need",
    wizardStepBasicInfo: "Basic information",
    wizardStepTimingCost: "Timing and cost",
    wizardStepParticipants: "Participants",
    wizardStepAdditionalInfo: "Additional information",
    wizardStepTraining: "Select one course to request",
    wizardSend: "Send for approval",
    wizardSaveDraft: "Save as draft",
    // course need step
    wizardCourseNeedLabel: "Explain why you are making this request",
    wizardCourseNeedPh: "To reduce the risk of workplace discrimination and help gain knowledge on how to work well together.",
    // basic info step
    wizardBasicInfoDesc: "Complete this optional information if you have a specific course in mind.",
    wizardCourseName: "Course name",
    wizardCourseNamePh: "Diversity course",
    wizardProviderName: "Provider name",
    wizardProviderNamePh: "Add provider name",
    wizardExternalRef: "External link",
    wizardExternalRefPh: "Add a link to have more information",
    wizardCompetencies: "Related competencies",
    wizardSelectPlaceholder: "Select",
    // timing & cost step
    wizardTimingCostTitle: "Timing and cost",
    wizardTimingCostDesc: "Complete this optional information if you have any further details",
    wizardDates: "Dates",
    wizardFrom: "From",
    wizardTo: "To",
    wizardDuration: "Duration",
    wizardDurationHoursPh: "Hours",
    wizardDurationMinsph: "Minutes",
    wizardSchedule: "Course schedule",
    wizardCost: "Cost",
    wizardSubsidized: "This is a subsidized course.",
    // additional info / comments step
    wizardAdditionalInfoTitle: "Additional information",
    wizardAdditionalInfoDesc: "Feel free to include any further details regarding this request to help clarify, or justify, this course.",
    wizardAdditionalInfoPh: "Examples:\n- The cost I put is only approximate.\n- Diana in Marketing told me about a great introductory course she took last year.",
    // from-catalog training selector step
    wizardTrainingStepTitle: "Select one course to request",
    wizardTrainingStepDesc: "Select one of the options from the list.",
    wizardTrainingLabel: "Course",
    wizardSelectDefault: "Choose an option",
    scheduleWorkingHours: "During working hours",
    scheduleMixed: "Mixed, during and outside working hours",
    scheduleNotSure: "I'm not sure",
    scheduleOutside: "Outside working hours",
    successPending: "We've sent your request for approval. Once there is a status update, we'll let you know",
    successDraft: "The course request has been added.",
  },

  // Admin "Requests" tab (module Trainings → Requests) — 1:1 with production
  // `components/Requests/RequestsDataCollection` + the TrainingRequest activity.
  adminRequests: {
    count: (n: number) => `${n} ${n === 1 ? "request" : "requests"}`,
    colTrainingName: "Course name",
    colRequestDate: "Request date",
    colRequestedBy: "Requested by",
    colParticipants: "Participants",
    colStatus: "Status",
    // preset tabs
    presetPending: "Pending",
    presetApproved: "Approved",
    presetRejected: "Rejected",
    // status badges
    statusReview: "Pending review",
    statusApproved: "Approved",
    statusRejected: "Rejected",
    // filters
    filterApplicant: "Applicant",
    filterDate: "Request date",
    filterCompetencies: "Competencies",
    filterStatus: "Status",
    // actions
    approve: "Approve",
    reject: "Reject",
    export: "Export",
    // detail panel
    detailRequestedBy: "Requested by",
    // reject modal
    rejectModalTitle: "Reject course request",
    rejectModalCommentsLabel: "Comments",
    rejectModalReject: "Reject",
    rejectModalCancel: "Cancel",
    // empty
    emptyTitle: "Set up your course request hub",
    emptyDesc:
      "Configure approval workflows and enable course requests for employees to begin requesting courses.",
  },

  // Catalog tab (learner "From catalog" destination) — verbatim from
  // production `trainings.my_training.catalog.*`.
  catalog: {
    durationSplit: (hours: number, minutes: number) => `${hours}h ${minutes}m`,
    durationEmpty: "0 hours",
    datesEmpty: "No dates",
    competenciesEmpty: "No competencies",
    filterNextSession: "Next session date",
    filterTags: "Categories",
    filterCompetencies: "Competencies",
    requestNewProposal: "Request new proposal",
    requestFromCatalog: "Request",
    emptyTitle: "No courses found",
    emptyDescription: "No courses found in the catalog",
    requestCourse: "Request course",
    // detail tabs
    tabOverview: "Overview",
    tabSessions: "Sessions",
    tabMaterials: "Materials",
    detailCompetencies: "Competencies",
    detailObjectives: "Objectives",
    detailDescription: "Description",
    materialsEmptyTitle: "No materials yet",
    materialsEmptyDesc: "All course materials will appear here once uploaded.",
    sessionsEmptyTitle: "No sessions yet",
    sessionsEmptyDesc: "Scheduled sessions for this course will appear here.",
    colSession: "Session",
    colDate: "Date",
    colLocation: "Location",
  },

  // My surveys tab — verbatim from production `trainings.my_surveys.*`.
  surveys: {
    colName: "Survey name",
    colStatus: "Status",
    colCourse: "Course name",
    colAssignedAt: "Assigned date",
    colParticipant: "Participant",
    colFormType: "Form type",
    statusPending: "Pending",
    statusCompleted: "Completed",
    filterType: "Type",
    filterStatus: "Status",
    typeSatisfaction: "Satisfaction",
    typeEffectiveness: "Effectiveness",
    typeKnowledge: "Knowledge test",
    typeCustom: "Custom",
    answer: "Answer survey",
    viewAnswers: "View answers",
    emptyTitle: "No surveys assigned",
    emptyDescription: "Surveys assigned to you will appear here.",
    // answer dialog (prototype placeholder)
    answerTitle: "Answer survey",
    answerBody: "The survey form opens here in the real product. Submit to mark it as completed.",
    answerSubmit: "Submit",
    viewTitle: "Your answers",
    viewBody: "Your submitted answers are shown here in the real product.",
    scoreLabel: "Your score",
    close: "Close",
  },

  // Content tab syllabus (modules + blocks) — verbatim from production
  // `trainings.content.syllabus.*` / `content_modal.types.*`.
  syllabus: {
    statusCompleted: "Completed",
    statusInProgress: "In progress",
    statusNotStarted: "Not started",
    typeModule: "Module",
    typePage: "Page",
    typeVideo: "Video",
    typeQuiz: "Quiz",
    statusColLabel: "Status",
    emptyTitle: "No content yet",
    emptyDescription:
      "Start building your course by creating modules and adding readings, videos, and knowledge tests.",
  },

  // Content viewer / player — verbatim from production `trainings.content.consumer.*`.
  player: {
    progress: "Progress",
    exit: "Exit course",
    back: "Back",
    next: "Next",
    submit: "Submit",
    retry: "Retry",
    completed: "Completed",
    startModule: "Start",
    // completed interstitial
    congratsTitle: "Congratulations!",
    congratsDesc: "You have successfully completed the course.",
    contentCompleteTitle: "Content complete!",
    contentCompleteDesc: "You have successfully completed all the content modules.",
    restart: "Restart",
    backToCourse: "Back to course",
    takeSurvey: "Take survey",
    // quiz
    quizScore: (pct: number) => `You scored ${pct}%`,
    quizPassed: "Passed",
    quizFailed: "Not enough — try again",
    quizSelectAnswer: "Select one answer per question.",
    quizQuestionOf: (n: number, total: number) => `Question ${n} of ${total}`,
  },

  // ---- Course Settings (Edit Training) — verbatim from production
  // `trainings.edit_mode.*`, `trainings.trainings_revamp.new_training.wizard.*`,
  // `trainings.{fundae,subsidy,workflows}.toggle.*` and
  // `trainings.training_relatorio_fields.*`. ----
  settings: {
    pageTitle: "Settings",
    breadcrumb: "Course settings",
    back: "Go to course",
    footerNeedSave: "Need to save the changes",
    footerAllSaved: "All changes saved",
    footerDone: "Done",
    discard: "Discard",

    // section nav / titles
    secBasic: "Basic information",
    secInternal: "Admin information",
    secCompletion: "Completion configuration",
    secEnrollment: "Enrollment",
    secRelatorio: "Relatório Único",

    // Basic information
    basicDesc: "Provide details to easily identify this course.",
    nameLabel: "Course name",
    namePh: "Course name",
    nameDesc: "Employees will identify this course by the assigned name",
    thumbLabel: "Thumbnail",
    thumbDesc: "Add an image to show as the course thumbnail in the Catalog.",
    thumbPh: "Upload .jpeg, .png, .gif or .webp files up to 200MB.",
    objLabel: "Objectives",
    objDesc: "Define this course's goals and outcomes",
    descLabel: "Description",
    descDesc: "Add information about the content and structure of the course",
    compLabel: "Competencies",
    compDesc: "Select the competencies developed within this course",
    compPh: "Select competencies",
    durationLabel: "Total duration of the course",
    mandatoryTitle: "Mandatory course",
    mandatoryDesc:
      "Mark this course as mandatory to track completion and meet compliance requirements.",
    validityTitle: "Course validity",
    validityDesc:
      "This course is valid for a limited time and must be retaken afterward.",
    validityLabel: "Validity period",
    selectPh: "Select value",

    // Internal information
    internalDesc:
      "Details in this section are for administrative purposes, and this information won't display for participants.",
    yearLabel: "Year",
    codeLabel: "Internal code",
    codeDesc:
      "If you use an internal code in other applications or files, add it here as well",
    typeLabel: "Instructor type",
    providerLabel: "External provider",
    tagsLabel: "Categories",
    tagsDesc:
      "Adding categories facilitates the process of identifying and filtering course",
    tagsPh: "Select categories",
    axesLabel: "Axes",
    axesDesc: "Axes help classify trainings for French regulatory reporting",
    axesPh: "Select axes",
    // FUNDAE subsidy
    fundaeTitle: "Subsidized by FUNDAE",
    fundaeDesc:
      "Activate this feature to enter information regarding the subsidization process.",
    fundaeCalloutTitle: "Required information for subsidization",
    fundaeCalloutDesc:
      "Complete the fields below to generate FUNDAE certificates, surveys, and the .xml export.",
    fundaeCodeLabel: "Course code",
    fundaeCodeDesc: "4-digit code used to register the course in FUNDAE",
    fundaeProfileLabel: "Profile",
    fundaeProfileDesc: "Type of company used to access FUNDAE",
    fundaeFileLabel: "File",
    fundaeFileDesc: "Company registration code in FUNDAE",
    // Workflows
    workflowTitle: "Link this course with Workflows",
    workflowDesc:
      "Use our Workflows solution to automate actions such as generating course certificates or sending questionnaires.",
    workflowLink: "More information",
    workflowSelectLabel: "Select a workflow",

    // Completion configuration
    completionDesc:
      "Define the conditions participants must meet to complete the course.",
    cModulesTitle: "Complete all LMS modules",
    cModulesDesc:
      "Participants must complete all course modules and pass every quiz.",
    cModulesScoreTitle: "Minimum quiz score",
    cModulesScoreDesc: "Choose the minimum score required to pass each quiz",
    cWatchFullTitle: "Watch each video to the end",
    cWatchFullDesc:
      "Participants can't skip ahead — every video must be watched fully.",
    cAttendanceTitle: "Attend sessions",
    cAttendanceDesc:
      "Set the minimum percentage of sessions in this course each participant needs to attend.",
    cAttendanceFieldTitle: "Minimum attendance",
    cAttendanceFieldDesc: "Choose the required percentage",
    cKnowledgeTitle: "Pass the knowledge test",
    cKnowledgeDesc:
      "Participants must pass a test that assesses their understanding of this course's content.",
    cKnowledgeScoreTitle: "Minimum score to pass",
    cKnowledgeScoreDesc: "Choose the score required to pass the test",
    cAlertTitle: "Recalculate participant statuses",
    cAlertDesc:
      "This will update the progress status for all the participants in the course.",

    // Relatório Único
    relatorioDesc:
      "Extra information about the course useful for Annex C of Relatorio Único",
    rAreaLabel: "Area of education",
    rModalityLabel: "Course modality",
    rInitiativeLabel: "Course initiative",
    rEntityLabel: "Course entity",
    rCertLabel: "Type of Certificate/Diploma",
    rLevelLabel: "Qualification level of course",

    // Enrollment (automatic enrollment) — verbatim from production
    enrTitle: "Automatic enrollment",
    enrDesc: "People who match the criteria are enrolled automatically.",
    enrToggleTitle: "Automatically enrol employees who match a condition",
    enrToggleDesc: "People who match the criteria are enrolled automatically.",
    enrCriteriaLabel: "Enrollment criteria",
    enrCriteriaDesc:
      "Add conditions like team, location, or role — anyone who matches is enrolled.",
    enrCriteriaPh: "Search workplace, team, role…",
    enrMatchSuffix: "people match",
    enrMatchBreakdown: (total: number, enrolled: number, notEnrolled: number) =>
      `Of the ${total} who match, ${enrolled} are already enrolled and ${notEnrolled} aren't enrolled yet.`,
    enrWhereLabel: "Where do matches go?",
    enrWhereDesc: "Choose what happens when someone matches the criteria.",
    enrGroupTitle: "Enroll in a group",
    enrGroupDesc:
      "People who match join the group below and can start the course right away.",
    enrGroupSelectLabel: "Select a group",
    enrGroupSelectHint: "New matches join this group automatically.",
    enrLaterTitle: "Assign to a group later",
    enrLaterDesc:
      "People who match are enrolled but stay in pending group assignment until you add them to a group.",

    // Collaborators (course access) — verbatim from the production Share modal
    secCollaborators: "Collaborators",
    collabDesc: "Manage who can edit or view this course.",
    collabAddTitle: "Add collaborators",
    collabSearchPh: "Search by name or email",
    collabAdd: "Add",
    collabListTitle: "Collaborators with access",
    collabOwner: "Owner",
    collabRemove: "Remove access",

    // Manual save footer — verbatim from the production Edit-course footer
    saveFooterMsg: "Save your changes before proceeding",
    saveFooterCta: "Save",
    savedConfirm: "Changes saved",
  },

  // ---- Module / company Training settings (Settings › Training) — verbatim
  // from production `trainings.training_settings.*` + `annex_c_relatorio_unico.*`
  // (current copy as shown in-product). ----
  trainingSettings: {
    crumbSettings: "Settings",
    crumbTraining: "Training",
    back: "Back",

    // Course requests
    requestsTitle: "Course requests",
    requestsDesc: "Let people submit requests to enrol in courses, initiating an approval workflow.",
    requestsToggleTitle: "Enable course requests",
    requestsToggleDesc:
      "Grant all employees access to request courses, explore the course catalogue, and view their request history.",

    // Factorial Campus (free courses)
    campusTitle: "Factorial Campus",
    campusDesc: "Make Factorial courses available to employees for learning and upskilling.",
    campusToggleTitle: "Activate Factorial Campus",
    campusToggleDesc: "Allow employees to learn and upskill with ready-to-use courses.",

    // Approval configuration — groups list (mirrors the shared Approvals block)
    approvalTitle: "Approval configuration for course requests",
    approvalDesc: "Approval groups let you route course requests to different approvers depending on who is asking.",
    approvalAddGroup: "Add new approval group",
    approvalHelp: "Approval groups let you route course requests to different approvers depending on who is asking.",
    approvalGroupEmployees: (n: number) => `${n} ${n === 1 ? "employee" : "employees"} assigned`,
    approvalTagDefault: "Default",
    approvalTagDefaultTooltip: "New employees will be added to this approval group",
    approvalTagAuto: "Auto-approval",
    approvalTagAutoTooltip: "Employees in this group will have the requests automatically approved.",
    approvalGroupManage: "Manage",
    approvalGroupSetDefault: "Set as default",
    approvalGroupEdit: "Edit approval group",
    approvalGroupDelete: "Delete approval group",

    // New / edit approval group dialog
    approvalNewGroupTitle: "New approval group",
    approvalEditGroupTitle: "Edit approval group",
    approvalGroupNameLabel: "Approval group name",
    approvalGroupDescLabel: "Description",
    approvalAutoLabel: "Auto-approval group",
    approvalAutoTooltip: "Requests for those in this group approve automatically.",

    // Group detail
    approvalRulesTitle: "Approval rules",
    approvalRulesDesc: "Manage your course request approval flow",
    approvalDetailBack: "Approval configuration",
    approvalDefaultFlowName: "Default approval flow",

    // Annex C of Relatório Único (Portugal)
    annexTitle: "Annex C of Relatório Único",
    annexDesc: "Enable all the fields to fill information for the Annex C of the Relatório Único.",
    annexToggleTitle: "Enable Annex C of Relatório Único",

    // FUNDAE subsidization (Spain)
    fundaeTitle: "FUNDAE subsidization",
    fundaeDesc:
      "To export the .xml file, the agreement data must match the FUNDAE data. You can make adjustments directly in the Training settings, but we recommend making them in the 'Employment Data' configuration instead.",
    fundaeProfCategory: "Professional category",
    fundaeEduLevel: "Education level",
    fundaeMapDesc: "Map your current fields with the FUNDAE ones",
    fundaeMappingNeeded: "Mapping needed",

    // FUNDAE mapping modal
    fundaeProfMappingTitle: "Professional category fields mapping",
    fundaeEduMappingTitle: "Education level fields mapping",
    fundaeMappingModalDesc:
      "To export data correctly, the fields must match. You can fix them in the Training settings, but to apply it across all, go to Employment data.",
    fundaeColFactorial: "Factorial fields",
    fundaeColFundae: "FUNDAE fields",
    fundaeMappingSelectPh: "-- Choose an option --",
    done: "Done",

    // Approval flow — levels
    approvalLevel: (n: number) => `Level ${n}`,
    approvalAddLevel: "Add approval level",
    approvalLevelModify: "Modify approval level",
    approvalLevelDelete: "Delete approval level",
    approvalLevelStrategy: "One approval required",

    // Add approver dialog
    addApproverTitle: "Add an approver",
    addApproverDesc:
      "Include here the details of your approver. The approver type allows you to select a dynamic role based on the employee who is making the request. Specific employee allows to select manually the approver.",
    approverType: "Approver type",
    approverRole: "Approver",
    approverUser: "Approver",
    addApproverSave: "Add approver to this level",

    // Modify approver dialog
    modifyApproverTitle: "Modify approver",
    modifyApproverDesc: "Select the approver type from the list and delete it from this approval level",

    cancel: "Cancel",
    save: "Save",

    // ---- Revamp: settings tabs ----
    tabRequests: "Requests",
    tabGeneral: "General",
    tabApprovals: "Approvals",
    tabClassification: "Classification",
    tabTemplates: "Templates",
    tabCompliance: "Compliance",

    // Classification — Categories
    tagsListTitle: "Categories",
    tagsListDesc: "Categories help you classify and filter courses across the catalogue.",
    newTag: "New category",
    tagsEmpty: "No categories yet",
    // Classification — Axes
    axesListTitle: "Axes",
    axesListDesc: "Axes classify courses for French regulatory reporting.",
    newAxis: "New axis",
    axesEmpty: "No axes yet",
    colCourses: (n: number) => `${n} ${n === 1 ? "course" : "courses"}`,

    // Templates — Survey templates
    templatesListTitle: "Survey templates",
    templatesListDesc:
      "Reusable surveys you send to course participants — build once here, send from any course's Surveys tab.",
    newTemplate: "New template",
    templatesEmpty: "No templates yet",
    templatesContextNote: "You can also create a template directly when adding a survey to a course.",
    colTplType: "Type",
    colTplQuestions: "Questions",
    colTplUsed: "Used in",
    tplQuestions: (n: number) => `${n} questions`,
    tplUsedIn: (n: number) => `Used in ${n} ${n === 1 ? "course" : "courses"}`,
    tplDuplicate: "Duplicate",
    tplDelete: "Delete template",
    tplCopySuffix: "(copy)",
    tplCreatedBy: (name: string) => `Created by ${name}`,
    tplTypeLocked: "Type is set when the template is created and can't be changed.",
    tplForwardNote:
      "Changes apply to surveys you send from now on. Surveys already sent keep their original questions.",
    tplDeleteConfirmDesc:
      "Surveys already sent keep working — you just won't be able to send this template to new courses.",

    // Templates — explainer + recipients (what surveys do, who answers)
    tplExplainerTitle: "Reusable surveys you send to course participants",
    tplExplainerDesc:
      "Build a survey once here, then send it from any course's Surveys tab. Responses come back per participant, so you can measure how your training is landing.",
    tplTypesTitle: "Three kinds of survey",
    tplRecipientSatisfaction: "Sent to participants — how they rate the course",
    tplRecipientEffectiveness: "Sent to participants' managers — did the training stick",
    tplRecipientKnowledge: "Sent to participants — scored against a pass mark",

    // New-item dialog
    newTagTitle: "New category",
    newAxisTitle: "New axis",
    editTagTitle: "Rename category",
    editAxisTitle: "Rename axis",
    newItemNameLabel: "Name",
    newItemNamePh: "e.g. Compliance",
    add: "Add",
    remove: "Remove",
    edit: "Edit",

    // Delete confirmation dialog (Classification)
    deleteConfirmTitle: "Delete item",
    deleteConfirmDesc: "This action cannot be undone. Are you sure you want to delete this item?",
    deleteConfirm: "Delete",

    // Template status
    tplStatusPublished: "Published",
    tplStatusDraft: "Draft",

    // Template edit dialog
    editTemplateTitle: "Edit template",
    editTemplateSave: "Save changes",

    // ---- Factorial One (per-capability AI controls) ----
    tabOne: "Factorial One",
    oneTitle: "Factorial One",
    oneDesc:
      "Choose what Factorial One can do in Training. Turn the assistant off entirely, or fine-tune it capability by capability.",
    oneMasterTitle: "Factorial One in Training",
    oneMasterDesc:
      "Let your team use the AI assistant across Training. Turn this off to hide every One feature in this module.",
    capCreateTitle: "Create courses with One",
    capCreateDesc: "Let admins create a course just by describing it to One.",
    capContentTitle: "Generate course content",
    capContentDesc:
      "Let One build course modules, lessons and quizzes — including from a SCORM package.",
    capTestsTitle: "Generate knowledge tests",
    capTestsDesc: "Let One draft quiz questions to assess understanding of a course.",
    capSurveysTitle: "Generate surveys",
    capSurveysDesc: "Let One draft satisfaction and effectiveness surveys for a course.",
    capAssistantTitle: "In-context assistant",
    capAssistantDesc:
      "Let One answer questions and take actions from the course, list and budget screens.",
    lmsRequired: "Requires LMS",
    lmsUpsellCta: "Learn about LMS",

    // Toast notifications (settings toggles)
    toastEnabled: (name: string) => `${name} enabled`,
    toastDisabled: (name: string) => `${name} disabled`,
    toastDismiss: "Dismiss",
  },
} as const


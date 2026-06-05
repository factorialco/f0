import { jsx as e } from "react/jsx-runtime";
import { TaskItem as u } from "./TaskItem/index.js";
function x({
  tasks: n,
  onClickTask: a,
  hideIcons: i = !1,
  maxTasksToShow: p = 5,
  emptyMessage: r = "No tasks assigned"
}) {
  const o = [
    { key: "done", status: "done" },
    { key: "inProgress", status: "in-progress" },
    { key: "todo", status: "todo" }
  ].flatMap(
    ({ key: t, status: l }) => (n[t] || []).map(
      (s) => typeof s == "string" ? {
        id: s,
        text: s
      } : s
    ).map(({ id: s, text: m, badge: c, counter: f }) => ({
      id: s,
      text: m,
      badge: c,
      counter: f,
      status: l
    }))
  ), d = !o.length;
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-0", children: d ? /* @__PURE__ */ e("p", { className: "pl-2 font-medium", children: r }) : o.slice(0, p).map((t) => /* @__PURE__ */ e(
    u,
    {
      task: t,
      status: t.status,
      hideIcon: i,
      onClick: a
    },
    t.id
  )) });
}
export {
  x as TasksList
};

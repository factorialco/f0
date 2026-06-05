import { jsx as o } from "react/jsx-runtime";
import { F0Select as u } from "../../../../components/F0Select/index.js";
import { FORM_SIZE as h } from "../../constants.js";
function s({
  field: a,
  formField: e,
  error: t,
  loading: c,
  status: l
}) {
  const r = {
    label: a.label,
    placeholder: a.placeholder,
    disabled: a.disabled,
    options: a.options,
    showSearchBox: a.showSearchBox,
    searchBoxPlaceholder: a.searchBoxPlaceholder,
    icon: a.icon,
    onCreate: a.onCreate,
    name: e.name,
    onBlur: e.onBlur,
    error: t,
    status: l,
    loading: c,
    size: h,
    hideLabel: !0
  };
  return a.multiple ? /* @__PURE__ */ o(
    u,
    {
      ...r,
      multiple: !0,
      clearable: a.clearable,
      value: e.value ?? [],
      onChange: (n) => {
        e.onChange(n), e.onBlur();
      }
    }
  ) : a.clearable ? /* @__PURE__ */ o(
    u,
    {
      ...r,
      clearable: !0,
      value: e.value ?? void 0,
      onChange: (n) => {
        e.onChange(n), e.onBlur();
      }
    }
  ) : /* @__PURE__ */ o(
    u,
    {
      ...r,
      value: e.value ?? void 0,
      onChange: (n) => {
        e.onChange(n), e.onBlur();
      }
    }
  );
}
function p({
  field: a,
  formField: e,
  error: t,
  loading: c,
  status: l
}) {
  const r = {
    label: a.label,
    placeholder: a.placeholder,
    disabled: a.disabled,
    source: a.source,
    mapOptions: a.mapOptions,
    showSearchBox: a.showSearchBox,
    searchBoxPlaceholder: a.searchBoxPlaceholder,
    icon: a.icon,
    onCreate: a.onCreate,
    name: e.name,
    onBlur: e.onBlur,
    error: t,
    status: l,
    loading: c,
    size: h,
    hideLabel: !0
  };
  return a.multiple ? /* @__PURE__ */ o(
    u,
    {
      ...r,
      multiple: !0,
      clearable: a.clearable,
      value: e.value ?? [],
      onChange: (n) => {
        e.onChange(n), e.onBlur();
      }
    }
  ) : a.clearable ? /* @__PURE__ */ o(
    u,
    {
      ...r,
      clearable: !0,
      value: e.value ?? void 0,
      onChange: (n) => {
        e.onChange(n), e.onBlur();
      }
    }
  ) : /* @__PURE__ */ o(
    u,
    {
      ...r,
      value: e.value ?? void 0,
      onChange: (n) => {
        e.onChange(n), e.onBlur();
      }
    }
  );
}
function C(a) {
  const { field: e } = a;
  return "source" in e && e.source !== void 0 && e.mapOptions !== void 0 ? /* @__PURE__ */ o(
    p,
    {
      ...a,
      field: e
    }
  ) : "options" in e && e.options !== void 0 ? /* @__PURE__ */ o(
    s,
    {
      ...a,
      field: e
    }
  ) : null;
}
export {
  C as SelectFieldRenderer
};

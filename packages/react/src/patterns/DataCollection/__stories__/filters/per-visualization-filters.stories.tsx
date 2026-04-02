import { Meta, StoryObj } from "@storybook/react-vite";

import { Briefcase, Building, Envelope } from "@/icons/app";

import { useDataCollectionSource } from "../../hooks/useDataCollectionSource";
import { OneDataCollection } from "../../index";
import {
  createPromiseDataFetch,
  filterPresets,
  filters,
  MockUser,
  sortings,
} from "../mockData";

const meta = {
  title: "Data Collection/Filters/Per Visualization",
  parameters: {
    layout: "padded",
  },
  tags: ["experimental", "internal"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FiltersPerVisualization: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    });

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            filters: {
              department: filters.department,
            },
            presets: [
              {
                label: "Engineering",
                filter: { department: ["Engineering"] },
              },
            ],
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item: MockUser) => ({
                    type: "person",
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                    },
                  }),
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item: MockUser) => item.email,
                  sorting: "email",
                },
                {
                  label: "Department",
                  render: (item: MockUser) => item.department,
                  sorting: "department",
                },
              ],
            },
          },
          {
            type: "card",
            filters: {
              salary: filters.salary,
              search: filters.search,
            },
            options: {
              title: (item: MockUser) => item.name,
              description: (item: MockUser) => item.role,
              avatar: (item: MockUser) => ({
                type: "person",
                firstName: item.name.split(" ")[0],
                lastName: item.name.split(" ")[1],
              }),
              cardProperties: [
                {
                  label: "Email",
                  icon: Envelope,
                  render: (item: MockUser) => item.email,
                },
                {
                  label: "Department",
                  icon: Building,
                  render: (item: MockUser) => item.department,
                },
                {
                  label: "Role",
                  icon: Briefcase,
                  render: (item: MockUser) => item.role,
                },
              ],
            },
          },
        ]}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const source = useDataCollectionSource({
  filters,
  sortings,
  dataAdapter: { fetchData: ... },
})

<OneDataCollection
  source={source}
  visualizations={[
    {
      type: "table",
      // Only show "department" filter in table view
      filters: { department: filters.department },
      presets: [{ label: "Engineering", filter: { department: ["Engineering"] } }],
      options: { columns: [...] },
    },
    {
      type: "card",
      // Only show "salary" and "search" filters in card view
      filters: { salary: filters.salary, search: filters.search },
      options: { ... },
    },
  ]}
/>
        `,
      },
    },
  },
};

export const MixedGlobalAndPerViewFilters: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    });

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            filters: {
              department: filters.department,
            },
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item: MockUser) => item.name,
                  sorting: "name",
                },
                {
                  label: "Email",
                  render: (item: MockUser) => item.email,
                  sorting: "email",
                },
                {
                  label: "Department",
                  render: (item: MockUser) => item.department,
                  sorting: "department",
                },
              ],
            },
          },
          {
            type: "card",
            options: {
              title: (item: MockUser) => item.name,
              description: (item: MockUser) => item.role,
              cardProperties: [
                {
                  label: "Email",
                  icon: Envelope,
                  render: (item: MockUser) => item.email,
                },
                {
                  label: "Department",
                  icon: Building,
                  render: (item: MockUser) => item.department,
                },
              ],
            },
          },
        ]}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const source = useDataCollectionSource({
  filters,
  presets: filterPresets,
  sortings,
  dataAdapter: { fetchData: ... },
})

<OneDataCollection
  source={source}
  visualizations={[
    {
      type: "table",
      // Table overrides with department-only filter
      filters: { department: filters.department },
      options: { columns: [...] },
    },
    {
      type: "card",
      // Card inherits all global source filters
      options: { ... },
    },
  ]}
/>
        `,
      },
    },
  },
};

export const PerViewPresetsOnly: Story = {
  render: () => {
    const dataSource = useDataCollectionSource({
      filters,
      presets: filterPresets,
      sortings,
      dataAdapter: {
        fetchData: createPromiseDataFetch(),
      },
    });

    return (
      <OneDataCollection
        source={dataSource}
        visualizations={[
          {
            type: "table",
            presets: [
              {
                label: "High Salary",
                filter: {
                  salary: { mode: "single", value: 100000 },
                },
              },
            ],
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item: MockUser) => ({
                    type: "person",
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                    },
                  }),
                  sorting: "name",
                },
                {
                  label: "Department",
                  render: (item: MockUser) => item.department,
                  sorting: "department",
                },
                {
                  label: "Salary",
                  render: (item: MockUser) => ({
                    type: "amount",
                    value: item.salary,
                  }),
                  align: "right",
                  sorting: "salary",
                },
              ],
            },
          },
          {
            type: "list",
            options: {
              itemDefinition: (item: MockUser) => ({
                title: item.name,
                description: [item.email, item.role],
                avatar: {
                  type: "person",
                  firstName: item.name.split(" ")[0],
                  lastName: item.name.split(" ")[1],
                },
              }),
              fields: [
                {
                  label: "Department",
                  render: (item: MockUser) => item.department,
                },
                {
                  label: "Manager",
                  render: (item: MockUser) => ({
                    type: "person",
                    value: {
                      firstName: item.manager.split(" ")[0],
                      lastName: item.manager.split(" ")[1],
                    },
                  }),
                },
              ],
            },
          },
        ]}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const source = useDataCollectionSource({
  filters,
  presets: filterPresets,
  sortings,
  dataAdapter: { fetchData: ... },
})

<OneDataCollection
  source={source}
  visualizations={[
    {
      type: "table",
      // Adds extra presets specific to this view
      presets: [{ label: "High Salary", filter: { salary: { mode: "single", value: 100000 } } }],
      options: { columns: [...] },
    },
    {
      type: "list",
      // No per-view overrides, uses global filters & presets
      options: { ... },
    },
  ]}
/>
        `,
      },
    },
  },
};

## Sorting

Sorting allows users to organize data in ascending or descending order by clicking on column headers or using controls.

**Behavior:**
- **Cycle**: 1st click (Ascending) -> 2nd click (Descending) -> 3rd click (Original/None).
- **Single Column**: Only one column can be sorted at a time. Selecting a new column cancels the previous sort.

**Edge Cases & Gotchas:**
- **Data Types**: Sorting logic varies by type (Text: A-Z, Numbers: 0-9, Dates: Chronological). Ensure your backend `fetchData` logic respects the `sort` parameter passed by the component.
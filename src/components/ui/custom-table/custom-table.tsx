import React from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef, GridReadyEvent, PaginationChangedEvent } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { DynamicHtmlTag } from "components";
import TableLoader from "../custom-loader/table-loader";

ModuleRegistry.registerModules([AllCommunityModule]);

// Add this interface above your component
interface TableData {
  id: string | number;
  [key: string]: string | number | boolean | Date; // for other dynamic fields
}

// Generic type parameter for row data
interface CustomTableProps<T> {
  rowData: T[];
  columnDefs: ColDef<T>[];
  pageSize: number;
  onGridReady: (params: GridReadyEvent<T>) => void;
  onPaginationChanged: (event: PaginationChangedEvent<T>) => void;
  defaultColDef?: ColDef<T>;
  paginationPageSizeSelector?: number[];
  className?: string;
  style?: React.CSSProperties;
}

export const CustomTable = <T extends TableData>({
  rowData,
  columnDefs,
  pageSize,
  onGridReady,
  onPaginationChanged,
  defaultColDef = { flex: 1 },
  paginationPageSizeSelector = [10, 20, 50, 100],
  className = "ag-theme-alpine",
  style,
}: CustomTableProps<T>) => {
  return (
    <DynamicHtmlTag
      type="div"
      className={className}
      style={{
        height: "calc(100vh - 220px)",
        minHeight: "550px",
        width: "100%",
        ...style,
      }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={pageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        onGridReady={onGridReady}
        onPaginationChanged={onPaginationChanged}
        domLayout="normal"
        suppressPaginationPanel={false}
        rowModelType="infinite"
        cacheBlockSize={pageSize}
        maxBlocksInCache={1}
        infiniteInitialRowCount={1}
        loadingOverlayComponent={() => <TableLoader />}
        rowHeight={60}
        headerHeight={50}
        suppressHorizontalScroll={false}
      />
    </DynamicHtmlTag>
  );
};

export default CustomTable;

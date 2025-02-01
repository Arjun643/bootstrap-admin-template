import { useState, useRef } from "react";

import { CustomButton, CustomImage, DynamicHtmlTag } from "components";
import { RowData, userListApi } from "utility";
import { CustomTable } from "components";
import { ColDef, GridApi, GridReadyEvent, ICellRendererParams, IGetRowsParams, PaginationChangedEvent } from "ag-grid-community";
import { useNavigate } from "react-router-dom";
import { CustomDeleteModal } from "components";

const UserList = () => {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState<RowData[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [rowToDelete, setRowToDelete] = useState<RowData | null>(null);
  const gridApi = useRef<GridApi | null>(null);

  const showLoading = () => {
    if (gridApi.current) {
      gridApi.current.showLoadingOverlay();
    }
  };

  const hideLoading = () => {
    if (gridApi.current) {
      gridApi.current.hideOverlay();
    }
  };

  const fetchData = async (page: number, currentPageSize: number) => {
    const response = await userListApi(page, currentPageSize);
    return response;
  };

  const onGridReady = (params: GridReadyEvent) => {
    gridApi.current = params.api;
    showLoading();
    gridApi.current.setGridOption("datasource", createDataSource(pageSize));
  };

  const createDataSource = (currentPageSize: number) => ({
    getRows: async (params: IGetRowsParams) => {
      try {
        showLoading();
        const page = Math.floor(params.startRow / currentPageSize) + 1;
        const response = await fetchData(page, currentPageSize);
        params.successCallback(response.users, response.totalRows);
      } catch (error) {
        console.error("Error fetching data:", error);
        params.failCallback();
      } finally {
        hideLoading();
      }
    },
  });

  const onPaginationChanged = (event: PaginationChangedEvent) => {
    if (gridApi.current && event.newPage === false && event.newPageSize === true) {
      const newPageSize = gridApi.current.paginationGetPageSize();
      if (newPageSize !== pageSize) {
        showLoading();
        setPageSize(newPageSize);
        gridApi.current.paginationGoToPage(0);
        gridApi.current.setGridOption("datasource", createDataSource(newPageSize));
      }
    }
  };

  const [colDefs] = useState<ColDef<RowData>[]>([
    {
      field: "id",
      editable: false,
      width: 80,
      minWidth: 80,
      maxWidth: 80,
      cellStyle: { display: "flex", alignItems: "center", justifyContent: "center" },
    },
    {
      field: "profileImageUrl",
      cellRenderer: (params: ICellRendererParams) => (
        <DynamicHtmlTag type="div" style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
          <CustomImage width={50} height={50} src={params.value} alt="Profile" className="userProfile rounded-circle" />
        </DynamicHtmlTag>
      ),
      editable: false,
      width: 130,
      minWidth: 130,
      maxWidth: 130,
    },
    {
      field: "fullName",
      editable: false,
      minWidth: 200,
      flex: 2,
      cellStyle: {
        display: "flex",
        alignItems: "center",
        paddingLeft: "15px",
        fontSize: "14px",
        fontWeight: 500,
      },
    },
    {
      field: "email",
      editable: false,
      minWidth: 250,
      flex: 2,
      cellStyle: {
        display: "flex",
        alignItems: "center",
        paddingLeft: "15px",
        fontSize: "14px",
      },
    },
    {
      field: "bio",
      editable: false,
      minWidth: 200,
      flex: 2,
      cellStyle: {
        display: "flex",
        alignItems: "center",
        paddingLeft: "15px",
        fontSize: "14px",
      },
    },
    {
      headerName: "Actions",
      cellRenderer: (params: ICellRendererParams) => (
        <DynamicHtmlTag type="div" style={{ display: "flex", gap: "10px", justifyContent: "center", padding: "5px" }}>
          <CustomButton type="button" onClick={() => navigate(`/user/${params.data.id}`)} className="btn btn-primary btn-sm">
            Edit
          </CustomButton>
          <CustomButton type="button" onClick={() => handleDeleteClick(params.data)} className="btn btn-danger btn-sm">
            Delete
          </CustomButton>
        </DynamicHtmlTag>
      ),
      editable: false,
      menuTabs: [],
      width: 180,
      minWidth: 180,
      maxWidth: 180,
    },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    resizable: true,
    sortable: true,
    suppressMovable: true,
    cellStyle: { fontSize: "14px" },
  };

  const handleDeleteClick = (data: RowData) => {
    setRowToDelete(data);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (rowToDelete && gridApi.current) {
      const updatedRows = rowData.filter(row => row.id !== rowToDelete.id);
      setRowData(updatedRows);

      const dataSource = {
        getRows: async (params: IGetRowsParams) => {
          try {
            const page = Math.floor(params.startRow / pageSize) + 1;
            const response = await fetchData(page, pageSize);
            params.successCallback(response.users, response.totalRows);
          } catch (error) {
            console.error("Error fetching data:", error);
            params.failCallback();
          }
        },
      };
      gridApi.current.setGridOption("datasource", dataSource);
    }
    setShowDeleteConfirm(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  return (
    <DynamicHtmlTag type="div" className="userlist h-100">
      <DynamicHtmlTag type="div" className="row g-4 h-100">
        <DynamicHtmlTag type="div" className="col-12 h-100">
          <DynamicHtmlTag type="div" className="card shadow-sm h-100">
            <DynamicHtmlTag type="div" className="card-body p-4 d-flex flex-column">
              <DynamicHtmlTag type="div" className="d-flex justify-content-between align-items-center mb-4">
                <DynamicHtmlTag type="h5" className="card-title mb-0">
                  User List
                </DynamicHtmlTag>
              </DynamicHtmlTag>
              <DynamicHtmlTag type="div" className="flex-grow-1" style={{ minHeight: 0 }}>
                <CustomTable
                  rowData={rowData}
                  columnDefs={colDefs}
                  pageSize={pageSize}
                  onGridReady={onGridReady}
                  onPaginationChanged={onPaginationChanged}
                  defaultColDef={defaultColDef}
                  style={{ height: "100%", width: "100%" }}
                  className="ag-theme-alpine"
                />
              </DynamicHtmlTag>
            </DynamicHtmlTag>
          </DynamicHtmlTag>
        </DynamicHtmlTag>
      </DynamicHtmlTag>

      {/* Delete Confirmation Modal */}
      <CustomDeleteModal
        show={showDeleteConfirm}
        onHide={cancelDelete}
        onConfirm={confirmDelete}
        message={`Are you sure you want to delete ${rowToDelete?.fullName || "this user"}?`}
      />
    </DynamicHtmlTag>
  );
};

export default UserList;

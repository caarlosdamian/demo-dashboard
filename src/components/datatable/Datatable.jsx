import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { ProductsColumns, userColumns } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import {
  collection,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);
  const {pathname} = useLocation()
 const type = (pathname.replace('/',''))
  
  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   const querySnapshot = await getDocs(collection(db, "users"));
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     list.push({ id: doc.id, ...doc.data() });
    //   });
    //   setData(list);
    //   // console.log(list);
    // };
    // fetchData();
    //LISTEN (REAL TIME)
    const unsub = onSnapshot(collection(db, type), (snapshot) => {
      let list = [];
      snapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    });
    return () => {
      unsub();
    };
  }, [type]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, type, id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={ `/${type}/${params.id}`} 
              state={ params.row }
              style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to={`/${type}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={type === 'users'?    userColumns.concat(actionColumn): ProductsColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

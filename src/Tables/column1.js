
export const COLUMNS1 = [
    {
      Header: "Id",
      Footer: "Id",
      accessor: "id",
      disableFilters: true,
      sticky: "left"
    },
    {
      Header: "First Name",
      Footer: "First Name",
      accessor: "first_name",
      sticky: "left"
    },
    {
      Header: "Last Name",
      Footer: "Last Name",
      accessor: "last_name",
      sticky: "left"
    },
    
   
   
    {
      Header: "Email",
      Footer: "Email",
      accessor: "email"
    },
    {
      Header: "Age",
      Footer: "Age",
      accessor: "age"
    }
  ];
  
  export const GROUPED_COLUMNS = [
    {
      Header: "Id",
      Footer: "Id",
      accessor: "id"
    },
    {
      Header: "Name",
      Footer: "Name",
      columns: [
        {
          Header: "First Name",
          Footer: "First Name",
          accessor: "first_name"
        },
        {
          Header: "Last Name",
          Footer: "Last Name",
          accessor: "last_name"
        }
      ]
    },
    {
      Header: "Info",
      Footer: "Info",
      columns: [
        
      ]
    }
  ];
  
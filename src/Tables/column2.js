
export const COLUMNS2 = [
    // {
    //   Header: "Id",
    //   Footer: "Id",
    //   accessor: "id",
    //   disableFilters: true,
    //   sticky: "left"
    // },
    {
      Header: "Land_Provider",
      Footer: "First Name",
      accessor: "first_name",
      sticky: "left"
    },
    {
      Header: "Land Purchased",
      Footer: "Last Name",
      accessor: "last_name",
      sticky: "left"
    },
    
    {
      Header: "Land Unpurchased",
      Footer: "Country",
      accessor: "country"
    },
    {
        Header: "Land Purch",
        Footer: "Email",
        accessor: "Email",
        sticky: "left"
      },
    
  ];
  
  export const GROUPED_COLUMNS = [
    // {
    //   Header: "Id",
    //   Footer: "Id",
    //   accessor: "id"
    // },
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
        {
          Header: "Country",
          Footer: "Country",
          accessor: "country"
        },
        {
            Header: "Email",
            Footer: "Email",
            accessor: "email"
          },
       
      ]
    }
  ];
  
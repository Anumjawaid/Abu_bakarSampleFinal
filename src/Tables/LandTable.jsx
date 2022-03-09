// import "./styles.css";
import { BasicTable } from "./Table";
import { Paginated } from "./Paginated";
import data from "./data";
import { COLUMNS } from "./column";
export default function LandPurchasedTable() {
  // return <BasicTable data={data} columns={COLUMNS} />;
  return <Paginated data={data} columns={COLUMNS} />;
}

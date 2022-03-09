// import "./styles.css";
import { BasicTable } from "./Table";
import { Paginated } from "./Paginated";
import data from "./data";
import { COLUMNS2 } from "./column2";
export default function MuzTable() {
  return <Paginated data={data} columns={COLUMNS2} />;
}

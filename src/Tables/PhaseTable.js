// import "./styles.css";
import { BasicTable } from "./Table";
import { Paginated } from "./Paginated";
import data from "./data";
import { COLUMNS1 } from "./column1";
export default function PhaseTable() {
  return <Paginated data={data} columns={COLUMNS1} />;
}

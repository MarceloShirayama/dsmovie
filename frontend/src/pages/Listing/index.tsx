import { MovieScore } from "component/MovieScore";
import { Pagination } from "component/Pagination";

export function Listing() {
  return (
    <>
      <Pagination />
      <MovieScore />
    </>
  );
}

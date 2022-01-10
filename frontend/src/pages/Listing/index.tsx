import { MovieStars } from "component/MovieStars";
import { Pagination } from "component/Pagination";

export function Listing() {
  return (
    <>
      <Pagination />
      <MovieStars />
    </>
  );
}

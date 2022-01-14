import { FormCard } from "component/FormCard";
import { useParams } from "react-router-dom";

export function Form() {
  const { moveId } = useParams();

  return <FormCard movieId={`${moveId}`} />;
}

import { ReactComponent as StarFull } from "assets/img/star-full.svg";
import { ReactComponent as StarHalf } from "assets/img/star-half.svg";
import { ReactComponent as StarEmpty } from "assets/img/star-empty.svg";
import "./styles.css";
import { getStarFills } from "utils/scores";

function Star({ fill }: { fill: number }) {
  switch (fill) {
    case 1:
      return <StarFull />;
    case 0.5:
      return <StarHalf />;
    default:
      return <StarEmpty />;
  }
}

export function MovieStars({ score }: { score: number }) {
  const starFills = getStarFills(score);
  return (
    <div className="dsmovie-stars-container">
      <Star fill={starFills[0]} />
      <Star fill={starFills[1]} />
      <Star fill={starFills[2]} />
      <Star fill={starFills[3]} />
      <Star fill={starFills[4]} />
    </div>
  );
}

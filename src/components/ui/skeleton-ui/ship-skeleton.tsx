import { FC } from "react";
import "./ship-skeleton.scss";

export const ShipSkeleton: FC = () => (
  <div className="ship-skeleton">
    <div className="ship-skeleton__image" />
    <div className="ship-skeleton__title" />
  </div>
);
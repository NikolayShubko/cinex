import clsx from "clsx";
import s from "./SubscribePlans.module.scss";
import { FC } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
type SubscribePlansProps = {
  variant: "basic" | "standard" | "premium";
  handleClick: () => void;
  bannerPosition?: "left" | "right" | "center";
};
const SubsribePlans: FC<SubscribePlansProps> = ({
  variant,
  handleClick,
  bannerPosition,
}) => {
  const subscribePlanGradient = clsx(
    s.subscribeplan_gradient,
    s[`subscribeplan_gradient_${variant}`]
  );
  const subscribePlanClasses = clsx(
    s.subscribeplan,
    s[`subscribeplan_${bannerPosition}`]
  );
  switch (variant) {
    case "basic":
      return (
        <div className={subscribePlanClasses}>
          <div className={subscribePlanGradient} />
          <h2 className={s.subscribeplan_header}>Basic Plan</h2>
          <p className={s.subscribeplan_price}>$5.99/mo.</p>
          <ul className={s.subscribeplan_conslist}>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />
              Access to movies & TV shows in HD
            </li>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />1 device at a time
            </li>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />
              Ads before streaming
            </li>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />
              No downloads
            </li>
          </ul>
          <Button size="wide" onClick={handleClick}>
            Select Plan
          </Button>
        </div>
      );
    case "standard":
      return (
        <div className={subscribePlanClasses}>
          <div className={subscribePlanGradient} />
          <h2 className={s.subscribeplan_header}>Standard Plan</h2>
          <p className={s.subscribeplan_price}>$9.99/mo.</p>
          <ul className={s.subscribeplan_conslist}>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />
              Access to all content in Full HD
            </li>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />2 device at a time
            </li>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />
              No ads
            </li>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />
              Download for offline viewing
            </li>
          </ul>
          <Button size="wide" onClick={handleClick}>
            Select Plan
          </Button>
        </div>
      );
    case "premium":
      return (
        <div className={subscribePlanClasses}>
          <div className={subscribePlanGradient} />
          <h2 className={s.subscribeplan_header}>Premium Plan</h2>
          <p className={s.subscribeplan_price}>$14.99/mo.</p>
          <ul className={s.subscribeplan_conslist}>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />
              4K + HDR quality
            </li>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />
              No ads
            </li>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />
              Download for offline viewing
            </li>
            <li className={s.subscribeplan_conitem}>
              <Icon iconName="Check" />
              Best bitrate
            </li>
          </ul>
          <Button size="wide" onClick={handleClick}>
            Select Plan
          </Button>
        </div>
      );
  }
};

export default SubsribePlans;

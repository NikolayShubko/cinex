import SubscribePlans from "./SubscribePlans";

const PremiumPlan = ({ handleClick }) => {
  return (
    <SubscribePlans
      variant="premium"
      handleClick={handleClick}
      price="$5.99"
      cons={[
        "4K + HDR quality",
        "4 devices at a time",
        "No ads",
        "Download for offline viewing",
        "Best bitrate",
      ]}
    />
  );
};

export default PremiumPlan;

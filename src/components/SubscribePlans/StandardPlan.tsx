import SubscribePlans from "./SubscribePlans";

const StandardPlan = ({ handleClick, classes }) => {
  return (
    <SubscribePlans
      variant="standard"
      handleClick={handleClick}
      price="$5.99"
      cons={[
        "Access to all content in Full HD",
        "2 devices at a time",
        "No ads",
        "Download for offline viewing",
      ]}
      classes={classes}
    />
  );
};

export default StandardPlan;

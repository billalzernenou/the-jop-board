const Jobs = (propos) => {
  return (
    <div className={propos.color}>
      <div>{propos.title}</div>
      <div>
        {propos.contractType} {propos.cauntry} {propos.city}
      </div>
    </div>
  );
};

export default Jobs;

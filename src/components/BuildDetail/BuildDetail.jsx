import "./BuildDetail.css";
export default function BuildDetail({ build }) {
  if (!build) return null;
  return (
    <>
      <div>
        <h1>DETAILS</h1>
        <div>{build.god.name}</div>
        <br />
        <img
          className={
            Object.keys(build.god).length === 0 && build.constructor === Object
              ? "emptygod"
              : "godicon"
          }
          src={build.god.filename}
          alt="god icon"
          height="200px"
        />
        <br />
        <div className="godtype">{build.god.type}</div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      {build.items.map((i) => (
        <div className="table">
          <div className="itemsdetail">
            <div>
              <div className="white">Icon</div>
              <br />
              <div>
                <img src={i.itemIcon_URL} alt="item icon" />
              </div>
            </div>
            <div>
              <div className="white">Device Name</div>
              <br />
              <div>{i.DeviceName}</div>
            </div>
            <div>
              <div className="white">Price</div>
              <br />
              <div>{i.Price} gold</div>
            </div>
            <div>
              <div className="white">Type</div>
              <br />
              <div>{i.Type}</div>
            </div>
            <div>
              <div className="white">Description</div>
              <br />
              <div>{i.ItemDescription.Description}</div>
            </div>
            <div>
              <div className="white">SecondaryDescription</div>
              <br />
              <div>{i.ItemDescription.SecondaryDescription}</div>
            </div>
          </div>
        </div>
      ))}
      <br />
      <br />
    </>
  );
}

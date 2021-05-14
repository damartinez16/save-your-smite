import "./BuildDetail.css";
export default function BuildDetail({ build }) {
  if (!build) return null;
  return (
    <>
      <div>
        <h1>DETAILS</h1>
        <div>{build.god.name}</div>
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
        <div className="godtype">{build.god.type}</div>
      </div>
      <br />
      <br />
      {build.items.map((i) => (
        <table className="table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Device Name</th>
              <th>Price</th>
              <th>Type</th>
              <th>Description</th>
              <th>Menu Items</th>
              <th>Secondary Description</th>
            </tr>
          </thead>
          <br />
          <tbody>
            <tr className="itemsdetail">
              <td>
                <img src={i.itemIcon_URL} alt="item icon" />
              </td>
              <td>{i.DeviceName}</td>
              <td>{i.Price} gold</td>
              <td>{i.Type}</td>
              <td>{i.ItemDescription.Description}</td>
              <td>{i.ItemDescription.MenuItems}</td>
              <td>{i.ItemDescription.SecondaryDescription}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}

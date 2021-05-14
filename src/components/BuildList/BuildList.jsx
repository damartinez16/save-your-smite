import BuildListItem from "../BuildListItem/BuildListItem";

export default function BuildList({
  savedBuilds,
  user,
  setUser,
  setActiveBuild,
  deleteBuild,
}) {
  return (
    <div>
      {savedBuilds.map((b, idx) => (
        <BuildListItem
          build={b}
          key={idx}
          setActiveBuild={setActiveBuild}
          deleteBuild={deleteBuild}
          user={user}
          buildId={b._id}
        />
      ))}
    </div>
  );
}

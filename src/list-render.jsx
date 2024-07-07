export default function List({ data }) {
  let datashow = data.map((i) => {
    return (
      <li key={i.id}>
        {i.id}. {i.name}
      </li>
    );
  });

  return (
    <>
      {/* this is how List-rendring is doing */}
      <ul>{datashow}</ul>
    </>
  );
}

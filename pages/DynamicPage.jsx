export async function getServerSideProps() {
  // fetch data here
  const res = await fetch(`http://worldtimeapi.org/api/timezone/Europe/London`);
  const data = await res.json();

  return {
    props: { data },
   
  
  };
}

const secondary = {
  fontWeight: "300",
  color:"#95A5B5"
}

export default function DynamicPage({ data }) {
  const date = new Date(data.utc_datetime);
  const formatted = date.toLocaleTimeString();

  return (
    <div className="container">
      <div>
        <div style={secondary}> Time From API </div>
        <div>{formatted}</div>
      </div>
    </div>
  );
}

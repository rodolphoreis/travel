import Carousel from "react-material-ui-carousel";

const items = [
  {
    image: "./big.jpeg",
  },
  {
    image: "./garden.jpeg",
  },
  {
    image: "./people.jpeg",
  },
  {
    image: "./phone.webp",
  },
  {
    image: "./ponte.jpeg",
  },
  {
    image: "./station.webp",
  },
];

function Carossel() {
  return (
    <div style={{ minHeight: "400px" }}>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props: any) {
  return (
    <>
      <img
        src={props.item.image}
        alt={props.item.name}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "5px",
        }}
      />
    </>
  );
}

export default Carossel;

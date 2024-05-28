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
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
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
          height: "100%",
          borderRadius: "5px",
        }}
      />
    </>
  );
}

export default Carossel;

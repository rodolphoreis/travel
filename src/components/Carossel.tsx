import Carousel from "react-material-ui-carousel";
import "./carossel.css";

const items = [
  {
    image:
      "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        {items.map((item, i) => {
          console.log({ item: item });
          return <Item key={i} item={item} />;
        })}
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

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import FeaturedPost from "./FeaturedPost";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Carossel from "./Carossel";

type Section = {
  title: string;
  items: { title: string; url: string }[];
};

const sections: Section[] = [
  {
    title: "Transport",
    items: [
      { title: "Transport for London", url: "https://tfl.gov.uk/" },
      { title: "London Transport Museum", url: "https://www.ltmuseum.co.uk/" },
      { title: "Tube Services", url: "https://tfl.gov.uk/modes/tube/" },
    ],
  },
  {
    title: "Restaurants",
    items: [
      { title: "The Ivy", url: "https://the-ivy.co.uk/" },
      { title: "Dishoom", url: "https://www.dishoom.com/" },
      { title: "Sketch", url: "https://sketch.london/" },
    ],
  },
  {
    title: "Attractions",
    items: [
      { title: "London Eye", url: "https://www.londoneye.com/" },
      { title: "British Museum", url: "https://www.britishmuseum.org/" },
      {
        title: "Tower of London",
        url: "https://www.hrp.org.uk/tower-of-london/",
      },
      { title: "The Shard", url: "https://www.the-shard.com/" },
      { title: "Madame Tussauds", url: "https://www.madametussauds.com/" },
    ],
  },
  {
    title: "Parks",
    items: [
      {
        title: "Hyde Park",
        url: "https://www.royalparks.org.uk/parks/hyde-park",
      },
      {
        title: "Regent's Park",
        url: "https://www.royalparks.org.uk/parks/the-regents-park",
      },
      {
        title: "Richmond Park",
        url: "https://www.royalparks.org.uk/parks/richmond-park",
      },
    ],
  },
  {
    title: "Futebol",
    items: [
      { title: "Premier League", url: "https://www.premierleague.com/" },
      { title: "Arsenal FC", url: "https://www.arsenal.com/" },
      { title: "Chelsea FC", url: "https://www.chelseafc.com/" },
      { title: "Tottenham Hotspur", url: "https://www.tottenhamhotspur.com/" },
      { title: "West Ham United", url: "https://www.whufc.com/" },
    ],
  },
  {
    title: "Museums",
    items: [
      { title: "Natural History Museum", url: "https://www.nhm.ac.uk/" },
      { title: "Science Museum", url: "https://www.sciencemuseum.org.uk/" },
      { title: "Victoria and Albert Museum", url: "https://www.vam.ac.uk/" },
    ],
  },
  {
    title: "Theaters",
    items: [
      { title: "Royal Opera House", url: "https://www.roh.org.uk/" },
      {
        title: "Shakespeare's Globe",
        url: "https://www.shakespearesglobe.com/",
      },
      { title: "National Theatre", url: "https://www.nationaltheatre.org.uk/" },
    ],
  },
];

const featuredPosts = [
  {
    title: "Five Guys",
    date: "",
    description:
      "Five Guys is my favorite burger in London, but this restaurant exists in many places around the world. This meal is more expensive than McDonald's, but it's better. There are plenty of fries and you can have the drink as many times as you want.",
    image:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article17142538.ece/ALTERNATES/s1200c/1_Manchester-Evening-News-goes-behind-the-scenes-at-Five-Guys.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "Picadilly Circus",
    date: "",
    description:
      "Piccadilly Circus is a very famous place in London, it has many famous shops and restaurants. I like visiting the bigger stores, the last time I visited the Harry Potter store, we loved it. There are many street`s artists. Bring plenty of cash.",
    image:
      "https://images.pexels.com/photos/14195029/pexels-photo-14195029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageLabel: "Image Text",
  },
  {
    title: "Waxy O'Connor's Pub",
    date: "",
    description:
      "The Waxy O'Connor's is my favorite Pub, of all than that I know, this was the better. This pub was a church old, this pub there is more 200 years old. I like because is mutch happy, there is ice beer and a lot of good music. I will go back there the next time.",
    image:
      "https://scontent.fopo3-1.fna.fbcdn.net/v/t39.30808-6/295682358_10159167427058737_5812930573920173878_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9TwhDU8735kQ7kNvgEmzghD&_nc_ht=scontent.fopo3-1.fna&oh=00_AYACg91BO87fcJdSKDyrMQUk8Z_tAmbanrwgcR1O38igkg&oe=666B88B7",
    imageLabel: "Image Text",
  },
  {
    title: "Borough Market",
    date: "",
    description:
      "I really liked this place, because in this market there are many stores, there are food stores, cheeses, wines, hamburgers, pizzas, fruits, vegetables and souvenirs. The things is a lot of expencise, but is unique. I will come back for sure",
    image:
      "https://boroughmarket.org.uk/wp-content/uploads/2024/01/Borough-Market-wide-shot.jpg",
    imageLabel: "Image Text",
  },
];

const sidebar = {
  title: "Curiosities",
  description:
    "London is in Europe, but its money is different from other countries, there is the Pound Sterling. There all things are more expensive than Portugal, in London there is a king, his name is Charles III, he is the son of Queen Elizabeth II, queen of England between the years 1952 and 2022.",
  free: [{ title: "British Museum", url: "https://www.britishmuseum.org/" }],
};

const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="London" sections={sections} />

        <main>
          <Carossel />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.free}
          />
        </main>
      </Container>
      <Footer
        title="Let's go London"
        description="I'm a software developer. I'm a front-end developer for about 1 year. This project is for my English class to describe my favorite city. So I invite you to come with me on this adventure."
      />
    </ThemeProvider>
  );
}

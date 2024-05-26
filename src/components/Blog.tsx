import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const sections = [
  { title: "Transport", url: "https://tfl.gov.uk/modes/tube/" },
  { title: "Sky Garden", url: "https://skygarden.london/" },
  { title: "Five Guys", url: "https://fiveguys.co.uk/" },
  {
    title: "London Tickets",
    url: "https://www.london-tickets.co.uk/?gad_source=1&gclid=Cj0KCQjwu8uyBhC6ARIsAKwBGpQlR5vDEzBhNJdx2HCrpmnXNOJ-faqg2gTyyMzmzC2d8aAq5NUaETwaAuFLEALw_wcB",
  },
  {
    title: "Buckingham Palace",
    url: "https://www.rct.uk/visit/buckingham-palace",
  },
  { title: "Premier League", url: "https://www.premierleague.com/" },
  { title: "Science Museum", url: "https://www.sciencemuseum.org.uk/home" },
];

const mainFeaturedPost = {
  title: "London",
  date: "",
  description:
    "For start the plan of visit London, you need to study many plances and plan your trip,  you see what more like, because in my opinion there are many beautiful places and differents.",
  image:
    "https://cdn-lnp.dataweavers.io/-/media/images/london/visit/ecommerce-and-advertising/ecommerce/london-skyline-night-hero.jpg?rev=a20bd6bfc51c445ea757f00304015760&mw=1920&hash=ED7739492B10435D82A63CF2CF39D882",
  imageText: "main image description",
  linkText: "",
};

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
      "Piccadilly Circus is a very famous place in London, it has many famous shops and restaurants. I like visiting the bigger stores, the last time I visited the Harry Potter store, we loved it. There are many street`s artists. Bring plenty of cash. (laughter)",
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
      "https://scontent.fopo3-1.fna.fbcdn.net/v/t39.30808-6/283697377_10159098000303737_8236251131136571177_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XOvmiI9s21sQ7kNvgHocKC7&_nc_ht=scontent.fopo3-1.fna&oh=00_AYBrMDEgtvCXZ07JMRDiatHq4b25BzuoTNQFqiXSsx4Bjw&oe=6659041F",
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
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={0} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.free}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Let's go London"
        description="I'm a software developer. I'm a front-end developer for about 1 year. This project is for my English class to describe my favorite city. So I invite you to come with me on this adventure."
      />
    </ThemeProvider>
  );
}

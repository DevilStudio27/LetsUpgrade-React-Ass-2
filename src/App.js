import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./styles.css";

let card_data = [
  {
    title: "Google",
    subtitle: "Google LLC, Technology Company",
    post_image:
      "https://bsmedia.business-standard.com/_media/bs/img/about-page/1562577931.jpg",
    desp:
      "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
    get_me: "https://en.wikipedia.org/wiki/Google"
  },
  {
    title: "Amazon",
    subtitle: "Amazon.com, E-commerce Company",
    post_image:
      "data:image/png;base64,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",
    desp:
      "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. IT industry, along with Google, Apple, Microsoft, and Facebook.",
    get_me: "https://en.wikipedia.org/wiki/Amazon_(company)"
  },
  {
    title: "Microsoft Corporation",
    subtitle: "Technology company",
    post_image:
      "https://c.s-microsoft.com/en-us/CMSImages/ImgOne.jpg?version=D418E733-821C-244F-37F9-DC865BDEFEC0",
    desp:
      "Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services.",
    get_me: "https://en.wikipedia.org/wiki/Microsoft"
  },
  {
    title: "Apple",
    subtitle: "Apple Inc. Technology company",
    post_image:
      "https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201903191911",
    desp:
      "Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Apple is the world's largest technology company by revenue and, since January 2021, the world's most valuable company.",
    get_me: "https://en.wikipedia.org/wiki/Apple_Inc."
  },
  {
    title: "Tesla",
    subtitle: "Tesla Inc., Electric Car Company",
    post_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMy1K4dKftfDLL1_uWk6J17bSaLh1Zfu2cpA&usqp=CAU",
    desp:
      "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California, United States. Tesla's current products include electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, as well as other related products and services.",
    get_me: "https://en.wikipedia.org/wiki/Tesla,_Inc."
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <h3 className="task">LetsUpgrade Assignment: 2</h3>
      <div className="card-container">
        {card_data.map((c_data, index) => (
          <Card key={index} {...c_data} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

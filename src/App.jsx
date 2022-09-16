import { Container } from "@chakra-ui/react";
import React from "react";
import Name from "./components/Name";
import Project from "./components/Project";
import Top from "./components/Top";
import ProjectWrapper from "./components/ProjectWrapper";

const projects = [
  {
    title: "Random Poetry Generator",
    link: "https://github.com/adamringeisen/LotterySimulator",
    langs: ["C#"],
    frameworks: ["dotnet core", "CLI"],
    desc: "Here the U.S. multi state lottery games Mega Millions and Power Ball simulated. You choose how many tickets you want to play (quick-picks, basically) and then how many games you want to play. Then, it plays all the games and tells you how much money you (probably) wasted playing the lottery.",
  },
  {
    title: "Table Top Dashboard",
    link: "https://tabletopdashboard.azurewebsites.net/",
    langs: ["C#", "HTML", "CSS", "SQL"],
    frameworks: ["dotnet core", "Azure", "MS-SQL", "CI/CD"],
    desc: "Sign up with your table top RPG character and get a dashboard for all of your rolls and keep track of your HP.",
  },
  {
    title: "Random Poetry Generator",
    link: "https://poetry.aqring.com",
    langs: ["Python", "HTML", "CSS", "SQL"],
    frameworks: ["Flask", "SQLite", "htmx"],
    desc: "A site that creates four line 'poems' from a list of dubious '1000 Most Common English Phrases ' found online.",
  },
  {
    title: "This site!",
    link: "https://aqring.com",
    langs: ["Javascript", "HTML", "CSS"],
    frameworks: ["React", "Chakra UI"],
    desc: "This is the website you're looking at!",
  },
];
const projectList = projects.map((project) => {
  return <Project project={project} />;
});

const App = () => {
  return (
    <React.Fragment>
      <Top />
      <Container maxW="container.lg">
        <Name name="Adam Ringeisen" />
        <ProjectWrapper>{projectList}</ProjectWrapper>
      </Container>
    </React.Fragment>
  );
};

export default App;

import React from "react";
import Main from "../components/Hero/Main";
import Row from "../components/Hero/Row";
import requests from "../Request";

const home = () => {
  return (
    <>
      <Main />
      <Row title="UpComing" fetchUrl={requests.requestUpcoming} />
      <Row title="Popular" fetchUrl={requests.requestPopular} />
      <Row title="Trending" fetchUrl={requests.requestTrending} />
      <Row title="Top Rated" fetchUrl={requests.requestTopRated} />
      <Row title="Horror" fetchUrl={requests.requestHorror} />
    </>
  );
};

export default home;

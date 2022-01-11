import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Hero from "../components/Hero";
import Features from "../components/Features";
import axios from "axios";
//http://api.github.com/repos/[username]/[reponame]
export default function Home(): JSX.Element {
  useEffect(() => {
    const gitstars: any = document.querySelector(".github-stars");
    axios.get("http://api.github.com/repos/gominima/minima").then((res) => {
      const data: any = res.data;
      gitstars.innerHTML = `${data.stargazers_count} ⭐`;
    });
  }, []);
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Lightweight and reliable backend framework for Go HTTP services with 0 dependencies"
    >
      <main>
        <Hero />
        <Features />
      </main>
    </Layout>
  );
}

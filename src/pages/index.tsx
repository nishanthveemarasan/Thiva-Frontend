import React from "react";
import Layout from "@/components/Layout";
import { fetchHomeData } from "@/store/reducer/actionReducer";
import { makeStore } from "@/store/store";
import { homeData } from "@/types/store";
import Spinner from "@/components/ui/Spinner";
import PageError from "@/components/Error/PageError";
import HomeHeader from "@/components/HomePage/HomeHeader";
import CarouselImages from "@/components/HomePage/CarouselImages";
import Services from "@/components/HomePage/Services";
import Projects from "@/components/HomePage/Projects";
import HomeFooter from "@/components/HomePage/HomeFooter";


const Home: React.FC<{ data: homeData, error: boolean }> = ({ data, error }) => {
  if (!data) {
    return <Spinner className="min-h-screen" />
  }
  return <Layout>
    {error ? <PageError /> : <>
      <HomeHeader data={data.content} year={data.year_of_experience} />
      <CarouselImages list={data.content.images} />

      <Services list={data.services} />

      <Projects list={data.projects} />
      <HomeFooter />
    </>}


  </Layout>

}

export default Home;

export const getServerSideProps = async () => {
  const store = makeStore();
  const resultAction = await store.dispatch(fetchHomeData());
  const isSuccess = fetchHomeData.fulfilled.match(resultAction);
  return {
    props: {
      data: isSuccess ? resultAction.payload : null,
      error: !isSuccess,
    }
  }

}

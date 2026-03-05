import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { fetchHomeData } from "@/store/reducer/actionReducer";
import { contactInfoStoreActions, makeStore } from "@/store/store";
import { homeData } from "@/types/store";
import Spinner from "@/components/ui/Spinner";
import PageError from "@/components/Error/PageError";
import HomeHeader from "@/components/HomePage/HomeHeader";
import CarouselImages from "@/components/HomePage/CarouselImages";
import Services from "@/components/HomePage/Services";
import Projects from "@/components/HomePage/Projects";
import HomeFooter from "@/components/HomePage/HomeFooter";
import { useAppDispatch } from "@/store/hooks";
import PageMetaHeader from "@/components/Header/PageMetaHeader";


const Home: React.FC<{ data: homeData, error: boolean }> = ({ data, error }) => {
  if (!data) {
    return <Spinner className="min-h-screen" />
  }
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(contactInfoStoreActions.addContactData(data.contact_info));
    }, [])
  return <Layout >
    {error ? <PageError /> : <>
      <PageMetaHeader title="Thumb Engineering Construction - Building Excellence, One Project at a Time" pageUrl="/" description="Discover Thumb Engineering Construction, your trusted partner for top-quality construction services. With years of experience and a commitment to excellence, we bring your vision to life with precision and professionalism." />
      <HomeHeader data={data.content} year={data.year_of_experience} />
      <CarouselImages list={data.content.images} />

      <Services list={data.services} />

      {data.projects.length > 0 && <Projects list={data.projects} />}
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

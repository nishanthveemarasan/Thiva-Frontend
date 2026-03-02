import React from "react";
import Layout from "@/components/Layout";
import { makeStore } from "@/store/store";
import { fetchServicesData } from "@/store/reducer/actionReducer";
import { serviceSliceData } from "@/types/store";
import Spinner from "@/components/ui/Spinner";
import PageError from "@/components/Error/PageError";
import ServiceHeader from "@/components/ServicePage/ServiceHeader";
import ServiceList from "@/components/ServicePage/ServiceList";
import ServiceFooter from "@/components/ServicePage/ServiceFooter";

const Services:React.FC<{ data: serviceSliceData, error: boolean }> = ({ data, error }) => {
  if (!data) {
    return <Spinner className="min-h-screen" />
  }
  return (
    <Layout>
      {error ? <PageError /> : <>
        <ServiceHeader year={data.year_of_experience} />
        <ServiceList list={data.services} />
        <ServiceFooter />
      </>}
    </Layout>
  );
};

export default Services;

export const getServerSideProps = async () => {
  const store = makeStore();
  const resultAction = await store.dispatch(fetchServicesData());
  const isSuccess = fetchServicesData.fulfilled.match(resultAction);
  return {
    props: {
      data: isSuccess ? resultAction.payload : null,
      error: !isSuccess,
    }
  }

}

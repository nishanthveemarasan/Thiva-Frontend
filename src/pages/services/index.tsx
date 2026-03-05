import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { contactInfoStoreActions, makeStore } from "@/store/store";
import { fetchServicesData } from "@/store/reducer/actionReducer";
import { serviceSliceData } from "@/types/store";
import Spinner from "@/components/ui/Spinner";
import PageError from "@/components/Error/PageError";
import ServiceHeader from "@/components/ServicePage/ServiceHeader";
import ServiceList from "@/components/ServicePage/ServiceList";
import ServiceFooter from "@/components/ServicePage/ServiceFooter";
import { useAppDispatch } from "@/store/hooks";
import PageMetaHeader from "@/components/Header/PageMetaHeader";

const Services: React.FC<{ data: serviceSliceData, error: boolean }> = ({ data, error }) => {
  if (!data) {
    return <Spinner className="min-h-screen" />
  }
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(contactInfoStoreActions.addContactData(data.contact_info));
  }, [])
  return (
    <Layout>
      {error ? <PageError /> : <>
      <PageMetaHeader title="Our Services - Thumb Engineering Construction" pageUrl="/services" description="Explore the comprehensive range of construction services offered by Thumb Engineering Construction. From residential to commercial projects, we deliver excellence in every aspect of construction, ensuring your vision becomes a reality." />
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

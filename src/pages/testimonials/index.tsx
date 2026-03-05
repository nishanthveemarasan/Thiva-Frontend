import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { contactInfoStoreActions, makeStore } from "@/store/store";
import { fetchTestimonialData } from "@/store/reducer/actionReducer";
import { testimonialData, testimonialSliceData } from "@/types/store";
import Spinner from "@/components/ui/Spinner";
import PageError from "@/components/Error/PageError";
import TestimonialList from "@/components/TestimonialPage/TestimonialList";
import { useAppDispatch } from "@/store/hooks";
import PageMetaHeader from "@/components/Header/PageMetaHeader";


const Testimonials: React.FC<{data:testimonialSliceData,error: boolean }> = ({data, error}) => {
  if(!data){
    return <Spinner className="min-h-screen" />
  }
  const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(contactInfoStoreActions.addContactData(data.contact_info));
      }, [])
 return <Layout>
    {error ? <PageError /> : <>
    <PageMetaHeader title="Testimonials - Thumb Engineering Construction" pageUrl="/testimonials" description="Read what our clients have to say about their experience working with Thumb Engineering Construction. Our commitment to excellence and client satisfaction is reflected in the testimonials from our valued customers." />
      <section className="bg-primary text-primary-foreground py-20">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl">What our clients say about working with us.</p>
      </div>
    </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialList list={data.testimonials} />
          </div>
        </div>
      </section>
    
    </>}
  </Layout>
};

export default Testimonials;

export const getServerSideProps = async () => {
  const store = makeStore();
  const resultAction = await store.dispatch(fetchTestimonialData());
  const isSuccess = fetchTestimonialData.fulfilled.match(resultAction);
  return {
    props: {
      data: isSuccess ? resultAction.payload : null,
      error: !isSuccess,
    }
  }

}

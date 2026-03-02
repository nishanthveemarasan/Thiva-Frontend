import React from "react";
import Layout from "@/components/Layout";
import { makeStore } from "@/store/store";
import { fetchTestimonialData } from "@/store/reducer/actionReducer";
import { testimonialData } from "@/types/store";
import Spinner from "@/components/ui/Spinner";
import PageError from "@/components/Error/PageError";
import TestimonialList from "@/components/TestimonialPage/TestimonialList";


const Testimonials: React.FC<{data:testimonialData[],error: boolean }> = ({data, error}) => {
  if(!data){
    return <Spinner className="min-h-screen" />
  }
 return <Layout>
    {error ? <PageError /> : <>
      <section className="bg-primary text-primary-foreground py-20">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl">What our clients say about working with us.</p>
      </div>
    </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialList list={data} />
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

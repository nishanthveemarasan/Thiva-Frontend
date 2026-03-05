import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { contactInfoStoreActions, makeStore } from "@/store/store";
import { fetchContactData } from "@/store/reducer/actionReducer";
import { contactDetails } from "@/types/store";
import Spinner from "@/components/ui/Spinner";
import PageError from "@/components/Error/PageError";
import ContactDetails from "@/components/ContactPage/ContactDetails";
import MyCard from "@/components/templates/MyCard";
import ContactForm from "@/components/ContactPage/ContactForm";
import { useAppDispatch } from "@/store/hooks";
import PageMetaHeader from "@/components/Header/PageMetaHeader";

const Contact: React.FC<{ data: contactDetails, error: boolean }> = ({ data, error }) => {
  if (!data) {
    return <Spinner className="min-h-screen" />
  }

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(contactInfoStoreActions.addContactData(data));
  }, [])

  return (
    <Layout>
      {error ? <PageError /> : <>
        <PageMetaHeader title="Contact Us | Thumb Engineering Construction" keywords="contact construction company UK, thumb engineering construction contact, engineering services contact" pageUrl="/contact" description="Contact Thumb Engineering Construction for professional construction and engineering services in the UK. Get in touch for project inquiries." />
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">Have a project in mind? Let's discuss how I can help.</p>
          </div>
        </section>

        <section className="py-16">

          <div className="container">
            <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              <div className="lg:col-span-2 space-y-6">
                <ContactDetails data={data} />
              </div>

              <MyCard cardCalss="lg:col-span-3" contentClass="pt-6">
                <ContactForm />

              </MyCard>
            </div>
          </div>
        </section>
      </>}
    </Layout>
  );
};

export default Contact;

export const getServerSideProps = async () => {
  const store = makeStore();
  const resultAction = await store.dispatch(fetchContactData());
  const isSuccess = fetchContactData.fulfilled.match(resultAction);
  return {
    props: {
      data: isSuccess ? resultAction.payload : null,
      error: !isSuccess,
    }
  }

}

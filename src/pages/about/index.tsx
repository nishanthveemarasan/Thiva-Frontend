import { Award, Users, Clock, CheckCircle } from "lucide-react";


import Layout from "@/components/Layout";
import { makeStore } from "@/store/store";
import { fetchProfileData } from "@/store/reducer/actionReducer";
import { profileData } from "@/types/store";
import Spinner from "@/components/ui/Spinner";
import PageError from "@/components/Error/PageError";
import Background from "@/components/About/Background";
import Specialisation from "@/components/About/Specialisation";
import Experiences from "@/components/About/Experiences";
import Education from "@/components/About/Education";
import Skills from "@/components/About/Skills";

const stats = [
  { icon: Award, value: "17+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Clients Served" },
  { icon: Clock, value: "20+", label: "Projects Completed" },
  { icon: CheckCircle, value: "98%", label: "On-Time Delivery" },
];


const About = ({data, error}:{data:profileData, error: boolean}) => {
  if(!data){
    return <Spinner className="min-h-screen" />
  }
 return <Layout>
    {
      error ? <PageError /> : <>
       <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <div className="text-primary-foreground/80 text-lg max-w-2xl" dangerouslySetInnerHTML={{__html:data.profile.bottom_line}}/>
        </div>
      </section>

      <Background data={data.profile} />

     <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-display font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Specialisation list={data.services} /> 

      <Experiences list={data.experiences} />

      <Education list={data.educations} />

      <Skills list={data.skills} />
      </>
    }
  </Layout>
};

export default About;

export const getServerSideProps = async () => {
  const store = makeStore();
  const resultAction = await store.dispatch(fetchProfileData());
  const isSuccess = fetchProfileData.fulfilled.match(resultAction);
  return {
    props: {
      data: isSuccess ? resultAction.payload : null,
      error: !isSuccess,
    }
  }

}

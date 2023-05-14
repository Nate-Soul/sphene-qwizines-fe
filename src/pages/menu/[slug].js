import { useRouter } from "next/router";
import Header from "@/components/Header";
import GenericHeader from "@/components/GenericHeader";
import SingleMenu from "@/components/SingleMenu";
import Footer from "@/components/Footer";
import { generateCrumbs } from "@/components/BreadCrumbs";

const SingleMenuPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const crumbs = generateCrumbs(`/menu/${slug}`);
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col">
        <GenericHeader title={slug} crumbs={crumbs}/>
        <SingleMenu/>
    </main>
    <Footer/>
    </>
  )
}

export default SingleMenuPage

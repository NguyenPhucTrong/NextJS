"use client";
import AppTable from "@/app/components/app.table";
import useSWR from "swr";

const Facebook = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  console.log(data);
  if (!data) {
    return <div>Loading....</div>;
  }
  return (
    // <div>
    //   facebook page
    //   <div>
    //     <Button variant="primary">Text</Button>
    //     {/* <Button onClick={() => handleButton()} variant="primary">
    //       Text1
    //     </Button> */}
    //     <button onClick={() => handleButton()}>Back Home</button>
    //   </div>
    // </div>
    <div>
      <div>{data?.length}</div>

      <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
    </div>
  );
};

export default Facebook;

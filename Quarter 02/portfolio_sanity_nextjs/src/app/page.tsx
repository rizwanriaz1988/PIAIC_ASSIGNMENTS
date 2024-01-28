import Image from "next/image";
import { client } from "@/lib/sanityClient";



const getData = async () => {
  const query = `*[_type =='pet']`;
  const data = await client.fetch(query, {
    next: { revalidate: 2 },
  });
  console.log("🚀 ~ getData ~ data:", data.length)

  return data;
};


export default async function Home() {

  const data = await getData()

  return (
    <div className="text-white  gap-2">
      <h1>hello</h1>
      {data.map((item: any) =>
        <div className="bg-red-300 mb-5 max-w-fit ">
          <h1>{item.name}</h1>
          <h1>{item.color}</h1>
          <h1>{item._id}</h1>
        </div>
      )}
    </div>
  );
}

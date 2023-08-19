import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="border-4 border-black bg-green-600 text-white">
        Hello World!
      </h1>
      <h1 className="text-2xl text-timid-100 italic underline-offset-8 underline decoration-wavy decoration-red-300">
        Hello World!
      </h1>
      <h1 className="bg-[#bada55] text-sm lg:text-lg">Hello long sentence</h1>
      <h1 className="text-3xl lowercase">Title 1</h1>
      <h2 className="text-2xl">Title 2</h2>
      <h3>Title 3</h3>
      <p className="text-base">A regular paragraph</p>
      <p className="text-sm">A description paragraph</p>
      <p className="text-xs note">A little note</p>
      <div className="flex space-x-4 min-h-screen">
        <div className="w-2/5 min-w-min bg-red-500 ">Sidebar</div>
        <div className="w-3/5  bg-green-500">Main Content</div>
      </div>
      <div style={{ width: "500px" }}>
        <p className="truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          voluptas ut, rerum possimus iusto corporis qui ipsum ea sint dolorem
          accusamus cumque doloremque magni tempora pariatur consequatur
          deleniti omnis quo? Tenetur veniam cumque provident quis laborum ex
          cum, eius molestias laboriosam illum rem officiis quidem sapiente
          dolores? Architecto repellendus veritatis provident numquam atque eum
          officia animi. Quo facilis natus quae. Facere, incidunt obcaecati iste
          quia quisquam, accusamus nesciunt soluta, quam laborum necessitatibus
          dicta quo. Autem, laboriosam ad ratione velit harum ipsam maiores
          nihil! Deserunt, id qui ut ab provident quidem? Eaque doloribus,
          officia fuga blanditiis tempore cumque dolorum, officiis vero, eveniet
          aspernatur temporibus. Laudantium consectetur minus hic laboriosam
          magni numquam, fugit necessitatibus iure molestiae iusto excepturi
          obcaecati beatae assumenda quibusdam. Sunt eius quisquam ipsa dolor
          accusantium modi, beatae magni inventore culpa dolore, delectus quia!
          Animi aperiam soluta facilis, sequi consequuntur ab perferendis
          reiciendis aliquam cum corporis commodi perspiciatis ex earum! Magnam
          earum aspernatur itaque tempora culpa distinctio. Quidem eos eveniet
          eligendi dolores earum natus autem aspernatur iure. Corporis velit, a
          excepturi quod adipisci illum nam reiciendis optio provident quia
          repudiandae! Amet possimus voluptas eveniet! Saepe quas porro expedita
          velit suscipit quo labore nam rerum. Ex molestias doloremque officiis!
          Repellendus ullam magni doloribus tempore ut, accusantium adipisci
          nobis ipsam maiores fuga. Impedit, amet architecto. Natus optio eius
          porro, suscipit praesentium a reiciendis at doloremque obcaecati,
          voluptates ab facilis! Reprehenderit fuga laudantium aperiam placeat
          beatae. Rerum sapiente aperiam ducimus temporibus, consectetur
          possimus. Voluptates quae repellendus a similique tempore alias iusto
          soluta reiciendis tenetur hic, architecto necessitatibus cum dolor
          ratione maiores exercitationem dolores repellat fugit quasi? Debitis
          sint deleniti nobis laboriosam id illo? Reiciendis aliquam ratione
          dolor veritatis perspiciatis magnam consequuntur. Necessitatibus
          consequuntur, eveniet odit cum, atque unde praesentium, nostrum nihil
          iste quaerat officiis animi quam. Officiis at praesentium ea,
          molestias officia inventore?
        </p>

        <p className="leading-normal">
          adkoasdjoijaoidjasoijoijsdaoijdasoijasoijdas jsoa doijdas oijsas
          doijsd oijads oijas doidjas oidjas oi djas
        </p>

        <p className="whitespace-nowrap">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eos
          laboriosam. Maxime autem laudantium et nam beatae qui vero repellendus
          harum neque unde? Autem explicabo est vitae ex sed suscipit? Obcaecati
          debitis enim odio doloribus! Blanditiis veniam dolores quibusdam quos
          itaque repellendus modi sit laborum voluptates eligendi voluptas
          facilis nostrum sint, libero dolore commodi incidunt! Sint culpa minus
          obcaecati iusto. ipsum deserunt similique nostrum consequatur possimus
          ratione incidunt veritatis sequi quas necessitatibus, consectetur
          maiores, velit molestiae. At maxime quidem praesentium distinctio,
          officiis porro? Tempore error nesciunt veritatis consectetur
          praesentium! Accusamus reiciendis corrupti dolore culpa corporis
          officiis aperiam totam. Delectus quisquam iure odit, repudiandae
          praesentium, aliquid amet nihil consectetur architecto eveniet est
          soluta aut doloribus eum veniam consequuntur expedita dolorem? Sint,
          veniam? Deserunt, reprehenderit ipsa quis distinctio, soluta,
          consequatur odit assumenda nam illo dolore dolor dolorum blanditiis
          reiciendis fugiat sunt voluptatum? Mollitia consectetur accusamus
          repudiandae minus, dolor alias placeat commodi!
        </p>

        <span className="bg-gray-500 break-words">
          asdasdasasasasasasasasasasassadddddddddddddddddddddddddddasasasasasReiciendisasdasdasdasdasd
        </span>

        <p className="bg-red-400 p-4 m-4 font-bold text-white">Padding</p>
      </div>
      <div className="Parent">
        <div>Header</div>
        <div className="flex">
          <div className="grow">Main Content</div>
          <div className="flex flex-col-reverse">
            <div>Sidebar</div>
            <div>Menu</div>
          </div>
        </div>
      </div>
      <div className="Parent">
        <div>Header</div>
        <div className="flex">
          <div className="basis-2/4">Main Content</div>
          <div className="basis-1/4">Sidebar</div>
          <div className="basis-1/4">AnotherSidebar</div>
        </div>
      </div>
      <br />
      <br />
      <div className="Parent">
        <div>Header</div>
        <div className="flex flex-col md:flex-row">
          <div className="w-32 bg-sky-300">Main Content</div>
          <div className="w-full bg-orange-400">Sidebar</div>
        </div>
      </div>
      <br />
      <br />
      <div className="Parent">
        <div>Header</div>
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-nowrap">
            <div className="w-full grow">01</div>
            <div className="w-full">02</div>
            <div className="w-full">03</div>
            <div className="w-full">04</div>
          </div>
        </div>
      </div>
      <div className="Parent">
        <div>Header</div>
        <div className="flex justify-center">
          <div>Sidebar</div>
          <div>Main Content</div>
        </div>
      </div>
      <div className="Parent">
        <div>Header</div>
        <div className="flex justify-between">
          <div>Sidebar</div>
          <div>Main Content</div>
        </div>
      </div>
      <div className="Parent">
        <div>Header</div>
        <div className="flex justify-evenly items-baseline">
          <div>Sidebar</div>
          <div>
            Main Content
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              placeat omnis, exercitationem rem ducimus nulla debitis eveniet
              animi, eaque iure maiores cumque officia id itaque, esse ex quod
              maxime nemo. Culpa soluta explicabo nam aliquid quaerat cum
              repudiandae asperiores earum maxime! Recusandae praesentium, ipsam
              officia
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4  gap-4 md:grid-cols-2">
          <div className="bg-sky-500 p-6 rounded-lg">1</div>
          <div className="bg-sky-500 p-6 rounded-lg">2</div>
          <div className="bg-sky-500 p-6 rounded-lg">3</div>
          <div className="bg-sky-500 p-6 rounded-lg col-span-2">4</div>
          <div className="bg-sky-500 p-6 rounded-lg">5</div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4  gap-4 md:grid-cols-2">
          <div className="col-start-2 bg-sky-500 p-6 rounded-lg">1</div>
          <div className="bg-sky-500 p-6 rounded-lg">2</div>
          <div className="col-end-1 bg-sky-500 p-6 rounded-lg">3</div>
          <div className="bg-sky-500 p-6 rounded-lg col-span-2">4</div>
          <div className="bg-sky-500 p-6 rounded-lg">5</div>
        </div>
      </div>
      auto size
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4  gap-4 md:grid-cols-2 auto-cols-max">
          <div className="bg-sky-500 p-6 rounded-lg">1</div>
          <div className="bg-sky-500 p-6 rounded-lg">2</div>
          <div className="bg-sky-500 p-6 rounded-lg">3</div>
          <div className="bg-sky-500 p-6 rounded-lg col-span-2">4</div>
          <div className="bg-sky-500 p-6 rounded-lg">5</div>
        </div>
      </div>
      grid rows
      <div className="container mx-auto">
        <div className="grid grid-flow-col grid-rows-4 gap-4">
          <div className="bg-sky-500 p-6 rounded-lg">1</div>
          <div className="bg-sky-500 p-6 rounded-lg">2</div>
          <div className="bg-sky-500 p-6 rounded-lg">3</div>
          <div className="bg-sky-500 p-6 rounded-lg">4</div>
          <div className="bg-sky-500 p-6 rounded-lg">5</div>
        </div>
      </div>
    </div>
  );
}

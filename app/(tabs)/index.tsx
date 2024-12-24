import React from "react";
import "../../global.css"
import Card from "@/components/card";


export default function HomeScreen() {
  return (
    <>
    <div className='h-full w-full bg-backgreen'>
    <div className="absolute w-[50] h-[50] z-10 p-4 m-7 bg-zinc-400/20 rounded-xl items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.9473 18.6997 5.81278 16.9855 4.27664C15.2714 2.7405 13.0338 1.91951 10.7329 1.98247C8.43203 2.04543 6.24272 2.98756 4.61514 4.61514C2.98756 6.24272 2.04543 8.43203 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8481 21.617 21.7737 21.71 21.68C21.8902 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9922 4.1345 9.63436C4.4046 8.2765 5.07128 7.02922 6.05025 6.05025C7.02922 5.07128 8.2765 4.4046 9.63436 4.1345C10.9922 3.8644 12.3997 4.00303 13.6788 4.53284C14.9579 5.06265 16.0511 5.95986 16.8203 7.111C17.5895 8.26215 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9497 15.9497C14.637 17.2625 12.8565 18 11 18Z" fill="white"/>
      </svg>
    </div>
    <div className=" bg-backgreen w-full h-fit flex flex-col pt-12">
      <div className="flex flex-col items-end">
        <svg className= "z-0 flex flex-col items-end"xmlns="http://www.w3.org/2000/svg" width="299" height="299" viewBox="0 0 299 299" fill="none">
          <path opacity="0.05" d="M57.1749 298.404C37.6749 298.604 8.57494 287.804 13.4749 263.604C16.7749 247.204 2.97494 231.804 0.474936 215.304C-2.42506 196.304 8.17493 176.104 26.2749 166.204C32.6749 162.704 40.2749 160.204 44.6749 154.604C58.3749 137.604 35.3749 116.404 44.1749 93.6038C49.2749 80.5038 64.1749 73.3038 84.0749 74.5038C104.475 75.8038 124.075 72.0038 126.575 53.5038C128.675 38.6038 128.475 28.1038 144.275 15.3038C170.475 -5.99622 235.975 -8.79622 249.275 31.2038C253.175 42.8038 264.175 68.2038 302.475 46.7038C332.275 29.9038 402.875 49.3038 380.275 97.7038C371.375 116.804 388.875 122.904 415.975 132.804C436.275 140.204 453.275 177.104 411.675 208.804C405.675 213.304 419.675 226.204 425.475 230.904C458.875 257.904 427.475 297.704 396.075 298.404C396.075 298.404 76.6749 298.204 57.1749 298.404ZM103.375 39.5038C92.2749 37.0038 88.7749 48.5038 89.1749 56.8038C89.2749 58.4038 89.3749 60.1038 90.0749 61.5038C91.1749 63.5038 93.3749 64.8038 95.5749 65.4038C99.1749 66.4038 103.175 66.2038 106.875 65.4038C109.275 64.9038 111.675 64.1038 113.375 62.4038C120.175 55.6038 111.675 41.3038 103.375 39.5038ZM292.875 34.6038C292.675 37.5038 290.375 40.0038 287.675 41.2038C284.975 42.5038 281.875 42.8038 278.875 43.0038C274.575 43.3038 269.575 43.3038 266.675 40.2038C264.675 38.1038 264.175 34.9038 264.575 32.1038C265.775 24.9038 270.375 17.8038 278.775 18.7038C285.175 19.5038 293.175 28.5038 292.875 34.6038ZM303.375 17.3038C302.375 18.0038 300.975 18.2038 299.775 17.9038C299.175 17.8038 298.475 17.5038 297.975 17.1038C294.375 14.5038 295.775 9.60378 300.375 10.1038C303.975 10.5038 307.475 14.6038 303.375 17.3038ZM412.175 107.304C413.375 109.004 414.275 111.104 413.575 113.004C413.075 114.404 411.775 115.404 410.475 116.004C407.675 117.304 404.275 117.004 401.375 115.804C398.475 114.704 395.975 112.804 393.575 110.804C392.475 109.904 391.475 109.004 390.875 107.804C390.475 106.904 390.375 105.904 390.375 105.004C390.275 103.304 390.475 101.604 390.975 100.004C391.675 97.9038 392.975 96.0038 394.275 94.3038C396.275 91.7038 399.175 88.6038 402.975 89.2038C405.275 89.6038 405.775 90.9038 405.875 93.0038C405.875 95.3038 405.375 97.5038 406.275 99.8038C407.275 102.804 410.375 104.804 412.175 107.304ZM18.7749 156.504C15.0749 159.604 8.77494 159.104 5.57494 155.404C-5.62506 142.404 4.27494 110.404 25.1749 115.004C32.9749 116.704 38.8749 125.404 35.3749 133.004C33.3749 137.304 28.0749 139.504 25.5749 143.504C22.9749 147.704 22.7749 153.204 18.7749 156.504Z" fill="white"/>
        </svg>

        <div className="absolute flex flex-col overflow-visible translate-y-20 z-10">
          <svg className="" width="160" height="211" viewBox="0 0 160 211" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
            <g id="Group_2">
            <path id="Vector" d="M105.272 4.62249L37.304 153.54L40.1241 154.828L108.092 5.90961L105.272 4.62249Z" fill="#00664F"/>
            </g>
            <g id="Group_3">
            <path id="Vector_2" d="M36.7749 158.346C34.4749 157.346 33.4749 154.546 34.4749 152.246C35.4749 149.946 38.2749 148.946 40.5749 149.946C79.3749 167.646 125.275 150.546 142.975 111.746C160.675 72.9463 143.575 27.0463 104.775 9.34627C102.475 8.34627 101.475 5.54627 102.475 3.24627C103.475 0.946268 106.275 -0.0537354 108.575 0.946265C151.875 20.7463 171.075 72.0463 151.275 115.446C131.475 159.046 80.1749 178.146 36.7749 158.346Z" fill="#00664F"/>
            </g>
            <path id="Vector_3" d="M72.6749 152.146C112.66 152.146 145.075 119.732 145.075 79.7463C145.075 39.7608 112.66 7.34625 72.6749 7.34625C32.6895 7.34625 0.274937 39.7608 0.274937 79.7463C0.274937 119.732 32.6895 152.146 72.6749 152.146Z" fill="#B0DDC9"/>
            <path id="Vector_4" d="M138.575 109.846C136.075 115.346 132.975 120.346 129.375 124.946C120.775 128.546 111.175 129.746 101.975 128.146C100.775 127.946 99.5749 127.646 98.6749 126.846C95.9749 124.446 98.2749 120.146 98.2749 116.546C98.2749 113.546 96.4749 110.846 94.7749 108.346C90.9749 102.746 87.1749 95.8463 89.4749 89.3463C91.7749 82.8463 99.4749 79.3463 101.475 72.7463C103.275 66.4463 99.1749 59.9463 99.0749 53.3463C98.9749 48.2463 101.475 43.3463 104.975 39.7463C108.575 36.1463 113.175 33.7463 117.975 32.0463C120.475 31.1463 123.275 30.5463 125.975 30.5463C145.075 51.4463 151.075 82.5463 138.575 109.846ZM50.6749 147.346C54.3749 145.546 57.4749 142.146 58.1749 138.146C58.8749 133.746 56.6749 129.446 53.9749 125.946C51.1749 122.446 47.8749 119.446 45.5749 115.646C44.5749 114.046 43.8749 112.246 43.8749 110.346C43.9749 105.146 49.5749 101.546 50.1749 96.4463C50.7749 91.9463 47.1749 87.8463 43.1749 85.8463C39.0749 83.8463 34.4749 83.3463 30.0749 82.1463C25.6749 80.9463 21.2749 78.5463 19.4749 74.3463C17.2749 69.0463 20.0749 62.7463 17.0749 57.7463C15.1749 54.5463 10.1749 52.4463 5.87494 51.7463C-9.22507 87.6463 6.87493 129.346 42.5749 145.646C44.6749 146.546 46.6749 147.446 48.7749 148.146C49.4749 147.946 50.0749 147.646 50.6749 147.346ZM30.5749 20.8463C30.7749 21.6463 31.0749 22.4463 31.4749 23.1463C34.9749 30.5463 42.4749 36.1463 43.5749 44.2463C43.8749 46.4463 43.7749 48.9463 45.1749 50.6463C45.8749 51.5463 46.9749 52.0463 48.0749 52.5463C57.1749 56.3463 68.5749 53.6463 74.8749 46.0463C80.9749 38.6463 82.0749 28.3463 86.8749 20.0463C88.2749 17.6463 89.9749 15.3463 89.9749 12.5463C89.9749 11.3463 89.5749 10.2463 88.9749 9.24627C68.3749 4.44627 47.1749 8.94627 30.5749 20.8463Z" fill="#2EA889"/>
            <path id="Vector_5" d="M79.7749 164.446H65.5749V198.246H79.7749V164.446Z" fill="#00664F"/>
            <path id="Vector_6" d="M128.775 210.346H16.5749C12.8749 210.346 9.97493 207.346 9.97493 203.746C9.97493 200.046 12.9749 197.146 16.5749 197.146H128.675C132.375 197.146 135.275 200.146 135.275 203.746C135.375 207.346 132.375 210.346 128.775 210.346Z" fill="#00664F"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-t-3xl w-full h-2/3 bottom-0 fixed flex flex-grow flex-col pl-6 ">

        <a className="text-textprimary text-2xl font-bold poppins-black  pt-7">Cartões</a>
        <a className="text-textsecundary text-lg font-bold poppins-black">Recomendado para você</a>

        {/* Cards horizontais */}
        <div className=" flex flex-row overflow-x-scroll">
          <Card type='formulas' icon={"formulas"} title={"formulas"} />
          <Card type='disciplines' icon={"disciplines"} title={"disciplines"} />
          <Card type='formulas' icon={""} title={""} />
          <Card type='formulas' icon={""} title={""} />
        </div>
        
    </div>
    </div>
    </>
  );
}

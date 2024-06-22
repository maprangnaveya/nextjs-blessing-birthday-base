"use client";

import { Mousewheel, Keyboard, Grid, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/grid';

import { BlessingData } from "@/app/lib/definitions";
import { Card } from './blessing-card';


export default function BlessingGridList({ data }: { data: any[][] | null | undefined }) {
    return (

        // <div className="flex w-full flex-row items-start justify-between gap-6">
        <Swiper
            slidesPerView={2}
            spaceBetween={2}
            watchSlidesProgress={true}
            modules={[Grid, Pagination, Keyboard, Navigation, Mousewheel]}
            grid={{
                rows: 2,
                fill: "row",
            }}
            mousewheel={{ enabled: true, }}
            keyboard={{
                enabled: true,
            }}
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
            }}
            style={
                {
                    // "--swiper-pagination-bottom": "0",
                }
            }
        >

            {data?.map((row, index: number) => {
                return (
                    <SwiperSlide key={`blessing-grid-card-${index}-${row[0]}`}>
                        <Card name={row[1]} blessing={row[2]} submittedAt={row[0]} />
                    </SwiperSlide>
                )
            })}
        </Swiper>

        // </div>

    );
};

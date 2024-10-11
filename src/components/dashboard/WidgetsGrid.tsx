"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const inCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title={String(inCart)}
        subTitle="Products added"
        label="Counter"
        icon={<IoCartOutline size={50} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  );
};

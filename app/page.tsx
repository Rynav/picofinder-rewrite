"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {DateRangePicker} from "@/components/ui/date-range-picker";
import {Button} from "@/components/ui/button"
import {useState} from "react";

export default function Home() {

    const [title, setTitle] = useState<string>('')
    const [duration, setDuration] = useState<number>(0)
    const [dateRange, setDateRange] = useState<undefined>(undefined)

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className={"w-96 flex flex-col gap-2"}>
                <Label htmlFor="title">Title</Label>
                <Input type="text" id="title" placeholder="Title" />
                <Label>Duration</Label>
                <div className={"flex flex-row gap-2 items-center"}>
                    <Input type="text" id="Duration" placeholder="From" />
                    <p>-</p>
                    <Input type="text" id="Duration" placeholder="To" />
                </div>
                <Label htmlFor="email">Upload date</Label>
                <DateRangePicker
                    initialDateFrom="2017-01-01"
                    initialDateTo="2023-01-01"
                />
                <Label htmlFor="email">Title</Label>
                <Input type="text" id="title" placeholder="title" />
                <Button variant={"secondary"}>Submit</Button>
            </div>
        </main>
  );
}

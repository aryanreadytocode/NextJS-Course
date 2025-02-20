'use client';

export default function Lecture({params}) {
    console.log("params", params);
    return (
        <div>Lectures 1 of college {params.lectures[0]}, {params.lectures[1]}</div>
    );
};
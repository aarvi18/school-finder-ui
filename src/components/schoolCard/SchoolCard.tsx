import React from 'react';
import type { SchoolData } from '../../types';

const SchoolCard: React.FC<{ data: SchoolData }> = ({ data }) => {
    return (
        <div className="grid grid-cols-[0.8fr_2fr_1fr_1fr_1fr_1fr_1fr_1.5fr_0.5fr] bg-white shadow rounded-lg py-2 px-5 text-sm text-[var(--text-secondary)] border border-[var(--border)] my-5">

            <div className="text-lg font-bold">{data.rank}</div>

            <div>
                <div className="font-semibold">{data.name}</div>
                <div className="text-sm text-gray-600">{data.location}</div>
            </div>

            <div>{data.gmat}</div>
            <div>{data.classSize}</div>
            <div>{data.acceptRate}</div>
            <div className="font-medium">{data.fee}</div>
            <div>{data.deadline}</div>

            <div className="flex flex-col gap-1 items-start">
                {data.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div>
                <a href={data.link} className="text-blue-600 underline">View</a>
            </div>

        </div>
    );
};

export default SchoolCard;
